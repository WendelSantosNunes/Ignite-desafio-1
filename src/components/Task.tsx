import styles from './Task.module.css'

interface date {
    created: number;
    onTrue: number;
}

export function Task({created,onTrue}:date){
    return (
        <>
            <div className={styles.list}>
                <div className={styles.newsTask}>
                    <p>Tarefas criadas</p>
                    <div>
                        {created}
                    </div>
                </div>
                <div className={styles.taskComplete}>
                    <p>Concluídas</p>
                    <div>{onTrue} de {created}</div>
                </div>
            </div>
        </>
    )
}