import { useState } from 'react'
import styles from '../styles/FormNewNote.module.css'
import Notification from "../components/Notification";


type PropsUpdateNote = {
  closeFormNewNote:Function,
  renderNoteData:Function,
  title_:string,
  description:string,
  id:number
} 

export default function FormUpdateNote(props:PropsUpdateNote) {

    const [noteTitle,setNoteTitle] = useState(props.title_)
    const [noteDescription,setNoteDescription] = useState(props.description)

    const [notificationText,setNotificationText] = useState("")

    const [enableNotification,setEnableNotification] = useState(false)
    const showNotification = () => setEnableNotification(true)
    const closeNotification = () => setEnableNotification(false)


    const updateNoteTitle = (event:React.ChangeEvent<HTMLInputElement>) =>{
      if(event.target.value.length > 100){
        setNotificationText("The title cannot have more than 100 characters")
        showNotification()
        return -1
      }else
        setNoteTitle(event.target.value)
    }

    const updateNoteDescription = (event:React.ChangeEvent<HTMLTextAreaElement>) =>{
      if(event.target.value.length > 1000){
        setNotificationText("The description cannot have more than 1000 characters")
        showNotification()
        return -1
      }else
        setNoteDescription(event.target.value)
    }

    const saveNewNote = () => {

      if(noteDescription === "" || noteTitle === "" ){
        setNotificationText("An error has occurred. Do not leave empty fields.")
        showNotification()
        return -1
      }
      fetch(`http://localhost:8000/notes/${props.id}/`,
        { 
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title:noteTitle,
            description:noteDescription
          })
        }) 
        .then(() => {
          props.renderNoteData(noteTitle,noteDescription)
          props.closeFormNewNote()
        })
    }

    return (
      <div className={styles.Form +" h-full	"}>
            <div  className={styles.contenido + " bg-stone-200"}>
              <div className="flex justify-end">
                  <button onClick={event => props.closeFormNewNote()} className="text-sm text-white text-center bg-red-600 hover:bg-red-800 font-bold rounded-lg px-2 py-1 m-1">Close</button>
              </div>
              
              <form className='text-black'>

                <h1 className='text-3xl mb-4 font-bold'>Update an existing note</h1>

                <div className="mb-6">
                  <label className="block text-m font-medium">Title</label>
                  <input onChange={updateNoteTitle} value={noteTitle} placeholder="Title" className="bg-gray-50 border text-black text-sm rounded-lg block w-full p-2.5" />
                </div>

                <div className="mb-6">
                  <label className="block text-m font-medium">Description</label>
                   <textarea onChange={updateNoteDescription} value={noteDescription} placeholder="Description" className="bg-gray-50 border text-black text-sm rounded-lg block w-full p-2.5 resize-none	" />
                </div>

              </form>

              <button onClick={saveNewNote} className='text-xl w-6/12 text-white text-center bg-blue-600 hover:bg-blue-800 font-bold rounded-lg px-2 py-1 m-4'>Update</button>
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
  