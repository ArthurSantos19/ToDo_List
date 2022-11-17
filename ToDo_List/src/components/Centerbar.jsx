import styles from './Centerbar.module.css'

export function Centerbar() {
  return (

  <form className={styles.formscenter}>
    <input className={styles.input}
      placeholder='Crie uma tarefa'
    />
    <button>Criar</button>
  </form>
      
    
  )
}