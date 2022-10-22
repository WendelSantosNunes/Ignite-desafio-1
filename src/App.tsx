import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'
import { NotTask } from './components/NotTask'
import { ListTask } from './components/ListTask'

import { v4 as uuidv4 } from 'uuid';
import './global.css'
import styles from './App.module.css'
import { useState } from 'react'

interface Task {
  id: string;
  text: string;
  isComplete: boolean;
}

function App() {
  let content,contTrue = 0

  const [tasks, setTasks] = useState<Task[]>([])

  function onCreateNewTask(newTask:string){    
    setTasks([...tasks,{'id':uuidv4(), 'text':newTask, 'isComplete': false}])
  }

  function onDeleteTask(text:string){
    let NewArray = tasks.filter(task => task.text !== text);
 
    setTasks(NewArray)
  }

  function onUpdateTask(text:string){
    let UpdateArray = tasks.map((item) => {
        if(item.text === text){
          if(item.isComplete === true)
            item.isComplete = false;
          else
            item.isComplete = true;
        }

        return item
    })

    setTasks(UpdateArray)
  }

  if(tasks.length){
    content = tasks.map(item => {

      if(item.isComplete === true)
        contTrue++;

      return <ListTask 
          key={item.id}
          content={item.text}
          isComplete={item.isComplete}
          OnDelete={onDeleteTask}
          onUpdate={onUpdateTask}
      />
    })
  }else{
    content = <NotTask/>
  }

  return (
    <>
      <Header/>
      <main className={styles.container}>
        <NewTask onSetTasks={onCreateNewTask} />
        <Task created={tasks.length || 0} onTrue={contTrue || 0} />
        {content}
      </main>
    </>
  )
}

export default App
