import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { ListTask } from './components/ListTask'

import './global.css'
import styles from './App.module.css'

let array = [
  {

  }
]


function App() {

  if(array.length){

  }else{
    
  }

  return (
    <>
      <Header/>
      <main className={styles.container}>
        <NewTask/>
        <ListTask/>
      </main>
    </>
  )
}

export default App
