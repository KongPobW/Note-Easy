import NavBar from "@/components/NavBar";
import NoteForm from "@/components/NoteForm";
import { useRouter } from "next/router";

export default function EditNote() {
    const router = useRouter();
    const data = JSON.parse(router.query.data);

    return (
        <div>
            <NavBar />
            <NoteForm topic="Edit Note" data={data} />
        </div>
    );
}