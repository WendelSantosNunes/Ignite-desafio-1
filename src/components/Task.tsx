import styles from './Task.module.css'

export function Task(){
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