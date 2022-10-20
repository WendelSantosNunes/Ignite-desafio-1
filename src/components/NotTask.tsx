import imgClipboard from '../assets/Clipboard.png'
import styles from './NotTask.module.css'


export function NotTask(){
    return (
        <div className={styles.container}>
            <img src={imgClipboard} alt="Clipboard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}