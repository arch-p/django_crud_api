
import styles from '../styles/FormNewNote.module.css'


export default function Notification(props:any) {

    return (
        <div className={styles.Form +" h-full	"}>
             <div  className={styles.contenido + " bg-stone-200"}>
                <div className='text-black'>
                    <h1 className='text-3xl mb-4 font-bold'>{props.text}</h1>
                </div>
                <button onClick={event => props.close()} className='text-xl w-6/12 text-white text-center bg-pink-600 hover:bg-pink-800 font-bold rounded-lg px-2 py-1 m-4'>Aceptar</button>
            </div>
        </div>
    )
}