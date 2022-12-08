import { useState } from 'react'
import styles from './Centerbar.module.css'

export function Centerbar() {


  return (

  <form className={styles.formscenter}>
    <input className={styles.input}
      placeholder='Crie uma tarefa' onChange={(e) => setText(e.target.value)}
    />
    <button text={text} onClick={() => taskCreate(text)}>Criar</button>
  </form>
      
    
  )
}