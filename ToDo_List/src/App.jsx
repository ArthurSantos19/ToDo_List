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
    console.log(tasks.length)
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
        <Task tasks={tasks} taskHandler={taskHandler}/>
          <div className={styles.divlIf}>
            {tasks.map((task) => {
              return <ListForm deleteTask={deleteTask} task={task}/>   
            })}
          </div>
         

        <main>
          
        </main>
      </div>
    </div>
    
  )
}

