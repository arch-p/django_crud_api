import { useState } from 'react'
import styles from '../styles/FormNewNote.module.css'
import Notification from "../components/Notification";


type PropsDeleteNote = {
    closeFormDeleteNote:Function,
    renderListNotes:Function,
    id:number
} 

export default function FormDeleteNote(props:PropsDeleteNote) {

    const [textToDelete,setTextToDelete] = useState("")
    const [notificationText,setNotificationText] = useState("")

    const [enableNotification,setEnableNotification] = useState(false)
    const showNotification = () => setEnableNotification(true)
    const closeNotification = () => setEnableNotification(false)

    const updateNoteTitle = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setTextToDelete(event.target.value)
    }

    const deleteNote = () => {

        if(textToDelete !== "delete"){
            setNotificationText("An error has occurred. You have not spelled the word correctly")
            showNotification()
            return -1
        }

        fetch(`http://localhost:8000/notes/${props.id}/`,
        { 
          method: "DELETE"
        }) 
        .then(() => {
            props.renderListNotes()
            props.closeFormDeleteNote()
        })

    }
  
    return(
      <div className={styles.Form +" h-full	"}>
        <div  className={styles.contenido + " bg-stone-200"}>
          <div className="flex justify-end">
              <button onClick={event => props.closeFormDeleteNote()} className="text-sm text-white text-center bg-red-600 hover:bg-red-800 font-bold rounded-lg px-2 py-1 m-1">Close</button>
          </div>
          
          <form className='text-black'>

            <h1 className='text-3xl mb-4 font-bold'>Delete an existing note</h1>

            <div className="mb-6">
              <label className="block text-m font-medium mb-3">This operation is <span className='italic text-red-800'>irreversible</span>, if you are sure you want to delete this note write <span className='italic text-red-800'>delete</span> below and then click delete</label>
              <input onChange={updateNoteTitle} placeholder="delete" className="bg-gray-50 border text-black text-sm rounded-lg block w-full p-2.5" />
            </div>

          </form>

          <button onClick={deleteNote} className='text-xl w-6/12 text-white text-center bg-red-600 hover:bg-red-800 font-bold rounded-lg px-2 py-1 m-4'>Delete</button>
        </div>

        { enableNotification ? 
              <Notification 
                text={notificationText}
                close={closeNotification}
              />
            : undefined } 

    </div>
    )
}