import styles from './ListTask.module.css'

export function ListTask(){
    return (
        <>
            <div className={styles.list}>
                <div className={styles.newsTask}>
                    <p>Tarefas criadas</p>
                    <div>
                        0
                    </div>
                </div>
                <div className={styles.taskComplete}>
                    <p>Concluídas</p>
                    <div>0</div>
                </div>
            </div>
        </>
    )
}