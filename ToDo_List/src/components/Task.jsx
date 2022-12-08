import { useState } from 'react'
import { ListForm } from './ListForm'
import styles from './Task.module.css'
import { Centerbar } from './Centerbar'


export function Task({ taskHandler }) {

  const [text, setText] = useState('')
  const [id, setId] = useState(0)

  const taskCreate = (text) => {
    const obj = {text: text, id: id}
    setId(id + 1)
    taskHandler(obj)
  }
  

  return(
    <>
      
      <div className={styles.form}>
        <div className={styles.campos}>
          <input className={styles.input}
            placeholder='Crie uma tarefa' onChange={(e) => setText(e.target.value)}
          
          />
          <button text={text} onClick={() =>taskCreate(text)}>Criar</button>
        </div>
        
        <ul className={styles.taskI}>
          <ul>
            <li>Tarefas criadas <span> 0</span></li>
          </ul>
          <ul>
            <li>Concluídas 0</li>
          </ul>
        </ul>
        
      </div>
      
    </>
  )
}