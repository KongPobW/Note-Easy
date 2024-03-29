import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function NoteDetail({ setView, note }) {
    return (
        <div className="fixed top-0 left-0 w-full min-h-screen flex items-center justify-center z-50 backdrop-blur-[15px]">
            <div className="detail-wrapper w-1/2 min-h-300px p-6 bg-white text-gray-700 shadow-lg rounded-md flex flex-col gap-4">
                <div onClick={() => setView(false)} className="h-10 w-10 rounded-full bg-opacity-20 bg-black flex items-center justify-center cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <h2 className="detail-title">{note.title}</h2>
                <span className="text-gray-500 italic text-base">{note.date}</span>
                <div className="detail-body">
                    <p>{note.content}</p>
                </div>
            </div>
        </div>
    );
}