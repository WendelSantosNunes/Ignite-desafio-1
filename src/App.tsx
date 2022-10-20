import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'
import { NotTask } from './components/NotTask'
import { ListTask } from './components/ListTask'

import './global.css'
import styles from './App.module.css'

let task = [
  {
    id: 1,
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
  {
    id: 2,
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  }
]

function App() {
  let content 

  if(task.length){
    content = task.map(item => {
      return <ListTask 
          key={item.id}
          // content={item.text}
      />
  })
  }else{
    content = <NotTask/>
  }

  return (
    <>
      <Header/>
      <main className={styles.container}>
        <NewTask/>
        <Task/>
        {content}
      </main>
    </>
  )
}

export default App
