import { useState } from 'react'
import { ListForm } from './ListForm'
import styles from './Task.module.css'
import { Centerbar } from './Centerbar'
import {TiPlus} from "react-icons/ti"


export function Task({ taskHandler, tasks }) {

  const [text, setText] = useState('')
  const [id, setId] = useState(0)

  const taskCreate = (text) => {
    const obj = {text: text, id: id}
    setId(id + 1)
    taskHandler(obj)
    document.getElementById('input').value = null
  }

  const numTask = () => {
    let num = tasks.length
    return num
  }
  

  return(
    <>
      
      <div className={styles.form}>
        <div className={styles.campos}>
          <input id='input' className={styles.input}
            placeholder='Crie uma tarefa' onChange={(e) => setText(e.target.value)}
          
          />
          <button text={text} onClick={() =>taskCreate(text)}>Criar <TiPlus/> </button>
        </div>
        
        <ul className={styles.taskI}>
          <ul>
            {/* <li>Tarefas criadas <span> {text}</span></li> */}
            <li>Tarefas criadas <span>{tasks.length}</span></li>
          </ul>
          <ul>
            <li>Concluídas <span> 0</span></li>
          </ul>
        </ul>
        
      </div>
      
    </>
  )
}