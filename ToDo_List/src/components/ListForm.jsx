import styles from './ListForm.module.css'
import { VscTrash } from "react-icons/vsc";

export function ListForm({task, deleteTask}) {

  

  return(
    <main className={styles.mainList}>
      <div className={styles.listForm}>
        <input type='checkbox'/>
        <textarea>{task.text}</textarea>
        <a onClick={() => deleteTask(task.id)} className={styles.delete}><VscTrash/></a>
      </div>

    </main>
      
    
  )
}