import { Header } from "./components/Header";
import styles from './App.module.css'
import './global.css'
import { Centerbar } from "./components/Centerbar";

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Centerbar/>
        <main>
          
        </main>
      </div>
    </div>
    
  )
}

