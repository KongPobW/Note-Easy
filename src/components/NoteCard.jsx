import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import NoteManager from "@/utils/note";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NoteCard({ setView, setIndex, note, index, refreshNotes }) {

    const handleReadMore = () => {
        setView(true);
        setIndex(index);
    };

    const router = useRouter();

    const handleEdit = () => {
        router.push({
            pathname: "edit-note",
            query: { data: JSON.stringify(note) }
        });
    };

    const handleDelete = async () => {

        const isSuccess = await NoteManager.delete(note._id);

        if (isSuccess) {
            refreshNotes();
        } else {
            toast.error("Failed deleting the note");
        }

    };

    return (
        <div className="mt-8 bg-amber-50">
            <div className="flex flex-col w-full min-h-150 h-full rounded-lg p-6 overflow-hidden">
                <h2 className="card-title">{note.title}</h2>
                <div className="card-body">
                    <p>{note.content}</p>
                </div>
                <span className="text-gray-500 text-sm cursor-pointer" onClick={() => handleReadMore()}>read more</span>
                <div className="flex items-center justify-between mt-2">
                    <div className="text-gray-500 text-sm italic">
                        {note.date} | {note.username}
                    </div>
                    <div className="cursor-pointer">
                        <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit()} />
                        <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete()} className="ml-2" />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}