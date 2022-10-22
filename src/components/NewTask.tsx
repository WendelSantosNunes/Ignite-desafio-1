import styles from './NewTask.module.css'
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState, FormEvent }from 'react'

interface taskDate {
    onSetTasks: (newTask: string) => void;
}

export function NewTask({onSetTasks}:taskDate){

    const [newTask, setnewTask] = useState('')

    function handleCreateNewTask(event:FormEvent){
        event.preventDefault()

        onSetTasks(newTask)

        setnewTask('')
    }

    function handleNewTask(event: ChangeEvent<HTMLInputElement>){
        setnewTask(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleCreateNewTask} className={styles.task}>
                <input 
                    type="text" 
                    className={styles.task}
                    value={newTask} 
                    onChange={handleNewTask}
                    required={true}
                />
                <button className={styles.TaskButton} type="submit" >
                    Criar
                    <PlusCircle size={16}/>
                </button>
            </form>
        </>
    )
}