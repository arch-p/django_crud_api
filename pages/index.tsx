import { useEffect, useState } from "react";
import FormNewNote from "@/components/FormNewNote"
import Note from "../components/Note";

type NoteModel = {
  id:number,
  title:string,
  description:string
}

export default function Index() {

  let [notes, setNotes] = useState(Array<NoteModel>)

  const [enableFormNewNote,setEnableFormNewNote] = useState(false)
  const openFormNewNote = () => setEnableFormNewNote(true)
  const closeFormNewNote = () => setEnableFormNewNote(false) 

  const [enableRenderNotes, setEnableRenderNotes] = useState(false)
  const renderListNotes = () => setEnableRenderNotes(!enableRenderNotes)

  useEffect(() => {
    fetch('http://localhost:8000/notes/')
      .then((response) => response.json())
      .then((notes) => setNotes(notes))
  }, [enableRenderNotes]);
  
  return (
    <main>
      <nav className=" z-20 p-4 flex justify-center">
        <button onClick={openFormNewNote} className="text-white text-xl bg-green-600 hover:bg-white hover:text-green-600 font-bold rounded-lg text-sm px-4 py-2 text-center mr-3 ">Add new note</button>  
      </nav>

      <div className="px-10">
        { 
          notes.length ?
          notes.map((note) =>
            <Note 
              key={note.id} 
              id={note.id} 
              title_={note.title} 
              description={note.description} 
              renderListNotes={renderListNotes}
            />
          )
          :  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">There are no notes, try adding one</h5>


        }
      </div>

      { enableFormNewNote ? 
        <FormNewNote 
          renderListNotes={renderListNotes}
          closeFormNewNote={closeFormNewNote}
        />
        : undefined } 

    </main>
  )
}
