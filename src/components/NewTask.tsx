import styles from './NewTask.module.css'
import { PlusCircle } from "phosphor-react";

export function NewTask(){
    return (
        <>
            <form className={styles.task}>
                <input type="text" className={styles.task} />
                <button className={styles.TaskButton}>
                    Criar
                    <PlusCircle size={16}/>
                </button>
            </form>
        </>
    )
}