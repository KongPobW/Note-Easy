import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavIcon({ icon }) {
    return (
        <>
            <div className="h-{45} w-{45} rounded-full justify-center bg-white bg-opacity-50 mr-4 cursor-pointer text-xl flex items-center p-3 hover:bg-gray-300">
                <FontAwesomeIcon icon={icon} />
            </div>
        </>
    );
}