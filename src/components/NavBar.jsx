import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import NavIcon from "./NavIcon";

export default function NavBar() {
    return (
        <div className="w-full h-16 flex items-center justify-center shadow-md bg-gray-400 sticky top-0">
            <div className="flex items-center justify-between w-full text-white">
                <span className="text-2xl font-bold cursor-pointer ml-4">Note Easy</span>
                <div className="flex items-center">
                    <NavIcon icon={faHouse} />
                    <NavIcon icon={faPlus} />
                </div>
            </div>
        </div>
    );
}