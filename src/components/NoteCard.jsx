import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function NoteCard({ setView, setIndex, note, index }) {

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
                    </div>
                </div>
            </div>
        </div>
    );
}