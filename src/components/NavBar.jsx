import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import NavIcon from "./NavIcon";
import { useRouter } from "next/router";

export default function NavBar() {

    const router = useRouter();

    const handlePlusButton = () => {
        router.push("add-note");
    };

    const handleBackHome = () => {
        router.push("home");
    };

    return (
        <div className="w-full h-16 flex items-center justify-center shadow-md bg-gray-400 sticky top-0">
            <div className="flex items-center justify-between w-full text-white">
                <span className="text-2xl font-bold cursor-pointer ml-4" onClick={handleBackHome}>Note Easy</span>
                <div className="flex items-center">
                    <NavIcon method={handleBackHome} icon={faHouse} />
                    <NavIcon method={handlePlusButton} icon={faPlus} />
                </div>
            </div>
        </div>
    );
}