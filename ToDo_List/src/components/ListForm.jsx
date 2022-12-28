import styles from './ListForm.module.css'
import { VscTrash } from "react-icons/vsc";
import trash from '../assets/trash.png'
import { useState } from 'react';
export function ListForm({task, deleteTask, check}) {
  

  return(
    <main className={styles.mainList}>
      <div className={styles.listForm}>
        <input id='check' onClick={check} className={styles.check} type='checkbox'/>
        <textarea>{task.text}</textarea>
        {/* <a onClick={() => deleteTask(task.id)} className={styles.delete}><VscTrash/></a> */}
        <img onClick={() => deleteTask(task.id)} className={styles.delete} src={trash}/>
        
      </div>
    </main>
      
    
  )
}