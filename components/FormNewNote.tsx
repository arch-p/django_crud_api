import { useEffect, useState } from 'react'
import styles from '../styles/FormNewNote.module.css'
import Notification from "../components/Notification";

type PropsFormNewNote = {
  closeFormNewNote:Function,
  renderListNotes:Function
} 

export default function FormNewNote(props:PropsFormNewNote) {
   
    const [noteTitle,setNoteTitle] = useState("")
    const [noteDescription,setNoteDescription] = useState("")
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
        setNotificationText("The description cannot have more than 10000 characters")
        showNotification()
        return -1
      }else
        setNoteDescription(event.target.value)
    }

  
    const saveNewNote = () => {

      if(noteDescription === "" || noteTitle === "" ){
        window.alert("An error has occurred. Do not leave empty fields.")
       
        return -1
      }

      fetch(`http://localhost:8000/notes/`,
      { 
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title:noteTitle,
          description:noteDescription
        })
      }) 
      .then(()=>{
        props.renderListNotes()
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
                <h1 className='text-3xl mb-4 font-bold'>Create a new note</h1>

                <div className="mb-6">
                  <label className="block text-m font-medium">Title</label>
                  <input onChange={updateNoteTitle} value={noteTitle} placeholder="Title" className="bg-gray-50 border text-black text-sm rounded-lg block w-full p-2.5" />
                </div>

                <div className="mb-6">
                  <label className="block text-m font-medium">Description</label>
                  <textarea onChange={updateNoteDescription} value={noteDescription} placeholder="Description" className="bg-gray-50 border text-black text-sm rounded-lg block w-full p-2.5 resize-none" />
                </div>

              </form>

              <button onClick={saveNewNote} className='text-xl w-6/12 text-white text-center bg-green-600 hover:bg-green-800 font-bold rounded-lg px-2 py-1 m-4'>Save</button>
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
  