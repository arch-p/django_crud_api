import { useState } from "react"
import FormUpdateNote from "./FormUpdateNote"
import FormDeleteNote from "./FormDeleteNote"

type NoteProps = {
    id:number
    title_:string,
    description:string,
    renderListNotes:Function
}

export default function Note(props:NoteProps) {

    const [enableFormUpdateNote,setEnableFormUpdateNote] = useState(false)
    const [enableFormDeleteNote,setEnableFormDeleteNote] = useState(false)

    const [noteTitle,setNoteTitle] = useState(props.title_)
    const [noteDescription,setNoteDescription] = useState(props.description)

    const openFormUpdateNote = ()=> setEnableFormUpdateNote(true)
    const closeFormUpdateNote = () => setEnableFormUpdateNote(false)

    const openFormDeleteNote = ()=> setEnableFormDeleteNote(true)
    const closeFormDeleteNote = () => setEnableFormDeleteNote(false)

    const renderThisNote = (title:string, description:string) => {
        setNoteTitle(title)
        setNoteDescription(description)
    }

    const renderListNotes = () => props.renderListNotes()
    
    return (

        <div className="w-xl p-4 my-2 bg-white rounded-lg shadow block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{noteTitle}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{noteDescription}</p>
            <div className="flex justify-end">
                <button onClick={openFormUpdateNote} className="text-white text-center bg-blue-600 hover:bg-blue-800 font-bold rounded-lg  px-2 py-1 m-1">Update</button>
                <button onClick={openFormDeleteNote} className="text-white text-center bg-red-600 hover:bg-red-800 font-bold rounded-lg  px-2 py-1 m-1">Delete</button>
            </div>

            { enableFormUpdateNote ? 
                <FormUpdateNote 
                    id={props.id}
                    title_={noteTitle} 
                    description={noteDescription} 
                    closeFormNewNote={closeFormUpdateNote}
                    renderNoteData={renderThisNote} /> 
                : undefined } 

            { enableFormDeleteNote ? 
                <FormDeleteNote 
                    id={props.id}
                    closeFormDeleteNote={closeFormDeleteNote}
                    renderListNotes={renderListNotes}
                /> 
                : undefined } 

        </div>
    )
  }
  