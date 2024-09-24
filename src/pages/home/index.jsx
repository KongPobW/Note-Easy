import NavBar from "@/components/NavBar";
import NoteCard from "@/components/NoteCard";
import NoteDetail from "@/components/NoteDetail";
import NoteManager from "@/utils/note";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  const userName = session.user.name.username;

  const [onViewNote, setOnViewNote] = useState(false);
  const [notes, setNotes] = useState();
  const [noteIndex, setNoteIndex] = useState();

  const refreshNotes = async () => {
    const notesData = await NoteManager.getNotes(userName);
    
    if (notesData) {
      setNotes(notesData);
    }
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const notesData = await NoteManager.getNotes(userName);

      if (notesData) {
        setNotes(notesData);
      }
    };

    fetchNotes();
  }, []);

  if (!notes) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center flex-col w-full min-h-screen h-full">
      <NavBar />
      <div className="max-w-[1368px] min-w-[280px] px-[1rem] w-full">
        <div className="note-wrapper">
          {notes && notes.length > 0 ? (
            notes.map((note, index) => (
              <NoteCard setView={setOnViewNote} setIndex={setNoteIndex} note={note} index={index} refreshNotes={refreshNotes} />
            ))
          ) : (
            <p></p>
          )}
        </div>
        {onViewNote && <NoteDetail setView={setOnViewNote} note={notes[noteIndex]} />}
      </div>
    </div>
  );
}