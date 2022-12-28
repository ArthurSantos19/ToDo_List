import { useState } from 'react'
import { ListForm } from './ListForm'
import styles from './Task.module.css'
import { Centerbar } from './Centerbar'
import {TiPlus} from "react-icons/ti"
import any from '../assets/Clipboard.png'


export function Task({ taskHandler, tasks, checks }) {

  const [text, setText] = useState('')
  const [id, setId] = useState(0)

  const taskCreate = (text) => {
    const obj = {text: text, id: id}
    setId(id + 1)
    taskHandler(obj)
    document.getElementById('input').value = null
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
            <li>Concluídas <span> {checks} de {tasks.length}</span></li>
          </ul>
        </ul>
        {!tasks.length && (
          <div className={styles.card}>
            <img src={any} alt='clipboard' />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
        
      </div>
      
    </>
  )
}