import NoteManager from "@/utils/note";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoteForm = ({ topic = "Add Note", data = "", username = null }) => {

    const [title, setTitle] = useState(data ? data.title : "");
    const [content, setContent] = useState(data ? data.content : "");

    const id = data ? data._id : null;

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const router = useRouter();

    const filterButton = async () => {

        if (title && content) {

            if (topic === "Add Note") {

                const isSuccess = await NoteManager.add(title, content, username);

                if (isSuccess) {
                    router.push("home");
                } else {
                    toast.error("Failed adding new note");
                }

            } else if (topic === "Edit Note") {

                const isSuccess = await NoteManager.edit(id, title, content);

                if (isSuccess) {
                    router.push("home");
                } else {
                    toast.error("Failed editing the note");
                }
            }

        } else {
            toast.warn("Please fill title and content");
        }
    };

    return (
        <div className="flex justify-center items-center h-auto my-7">
            <div className="container mx-auto p-4 text-center" style={{ maxWidth: "400px" }}>
                <h1 className="text-2xl font-bold mb-4">{topic}</h1>

                <div className="mb-4">
                    <label className="block text-gray-600 text-left font-semibold">Title</label>
                    <input
                        type="text"
                        className="border p-2 w-full bg-amber-50"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-left font-semibold">Content</label>
                    <textarea
                        rows="10"
                        cols="10"
                        className="border p-2 w-full bg-amber-50"
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>

                <div className="text-left">
                    <button
                        className="bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600"
                        onClick={filterButton}
                    >
                        {topic}
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default NoteForm;