import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <>
      <Header/>
      <main className={styles.container}>
        <NewTask/>
      </main>
    </>
  )
}

export default App
