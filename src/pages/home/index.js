import NavBar from "@/components/NavBar";
import NoteCard from "@/components/NoteCard";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  const userName = session.user.name.username.toUpperCase();

  return (
    <div className="flex items-center flex-col w-full min-h-screen h-full">
      <NavBar />
      <div className="max-w-[1368px] min-w-[280px] px-[1rem] w-full">
        <div className="note-wrapper">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </div>
  );
}