import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {

    const [username, setUsername] = useState("admin1"); //admin2
    const [password, setPassword] = useState("admin1eiei"); //admin2eiei
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await signIn("credentials", {
                username, password, redirect: false
            });

            if (res.error) {
                setError("Incorrect username or password");
                setUsername("");
                setPassword("");
                return;
            }

            router.replace("home");

        } catch (error) {
            toast.error("Error 500");
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-gray-700">Note Easy</h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setError("");
                            }}
                            value={username}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError("");
                            }}
                            value={password}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    {error && (
                        <div className="mt-2 text-rose-500 font-bold">{error}</div>
                    )}
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}