import { Header } from "./components/Header";
import styles from './App.module.css'
import './global.css'
import { Centerbar } from "./components/Centerbar";
import { Task } from "./components/Task";
import { ListForm } from "./components/ListForm";
import { useState } from "react";

export function App() {
  
  const [tasks, setTasks] = useState([])

  const taskHandler = (task) => {
    setTasks([...tasks, task])
  }

  const [checks, setChecks] = useState(0)
  const check = () => {
    let checkbox = document.getElementById('check')
    if(checkbox.checked) {
     
     setChecks(checks + 1)
     console.log(checks)
    }
    if(checkbox.checked == false) {
      console.log('false')
      setChecks(checks - 1)
    }
  }

  function deleteTask(id) {
    console.log(id)
    const delTask = tasks.filter((task) => task.id !== id)
    setTasks(delTask)
  }

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Task tasks={tasks} checks={checks} taskHandler={taskHandler}/>
          <div className={styles.divlIf}>
            {tasks.map((task) => {
              return <ListForm deleteTask={deleteTask} check={check} tasks={tasks} task={task}/>   
            })}
          </div>
         

        <main>
          
        </main>
      </div>
    </div>
    
  )
}

