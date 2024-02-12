import NavBar from "@/components/NavBar";
import NoteForm from "@/components/NoteForm";
import { useSession } from "next-auth/react";

export default function AddNote() {
    const { data: session } = useSession();
    console.log(session);

    const userName = session.user.name.username;

    return (
        <div>
            <NavBar />
            <NoteForm username={userName} />
        </div>
    );
}