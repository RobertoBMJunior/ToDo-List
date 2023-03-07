import { EmptyTask } from './EmptyTask'
import { TaskList } from './TaskList';
import styles from './Tasks.module.css'

export function Task() {

    let oi = 8;

    return(
        <div className={styles.tasksContainer}>
            <div className={styles.container}>

                <div className={styles.information}>
                    <div className={styles.tarefasCriadas}>
                        <span>Tarefas Criadas</span>
                        <span>5</span>
                    </div>
                    <div className={styles.tarefasConcluidas}>
                        <span>Concluídas</span>
                        <span>2 de 5</span>
                    </div>
                </div>

                <div className={styles.tasks}>
                    {oi==4 ? <EmptyTask/>: [<TaskList/>, <TaskList/>, <TaskList/> ] }
                    
                </div>

            </div>
        </div>
    )
}