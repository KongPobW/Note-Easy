import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function NoteCard() {
    return (
        <div className="mt-8 bg-amber-50">
            <div className="flex flex-col w-full min-h-150 h-full rounded-lg p-6 overflow-hidden">
                <h2 className="card-title">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In recusandae voluptatem iusto consequatur nulla rerum obcaecati assumenda, veniam fuga laudantium nesciunt eaque nihil! Similique mollitia tenetur iure provident reprehenderit dolorem.
                </h2>
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, cum earum. Delectus, error consectetur suscipit magnam sunt laborum ex quod. Iusto at hic maxime totam blanditiis nihil voluptates, iure itaque?
                    </p>
                </div>
                <span className="text-gray-500 text-sm cursor-pointer">read more</span>
                <div className="flex items-center justify-between mt-2">
                    <div className="text-gray-500 text-sm italic">
                        {new Date().toDateString()} | admin
                    </div>
                    <div className="cursor-pointer">
                        <FontAwesomeIcon icon={faEdit} />
                    </div>
                </div>
            </div>
        </div>
    );
}