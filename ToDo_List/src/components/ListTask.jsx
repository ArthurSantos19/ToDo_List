import styles from './Task.module.css'

export function ListTask() {
  return(
    <>
     <form className={styles.tasksForm}>
      <div className={styles.divTask}>
        <input type="checkbox"/>
        <p className={styles.textArea}></p>
        {/* <img className={styles.imgDel} src={del}/> */}
      </div>
    </form>
    </>
  )
}