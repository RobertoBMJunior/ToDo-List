import { EmptyTask } from './EmptyTask'
import { CreatedTask} from './CreatedTask';
import styles from './TaskArea.module.css'

interface TaskList {
    id: number
    content: string
    isCompleted: boolean
}

interface ListProps {
    list: Array<TaskList>
    onTaskCompleted: (id:number)=>void
    onDeleteTask: (id:number)=>void
}

export function TaskArea({list,onTaskCompleted,onDeleteTask}:ListProps) {

    const conclued = list.filter(l => l.isCompleted == true)
    return(
        // <div className={styles.tasksContainer}>
            <div className={styles.container}>

                <div className={styles.information}>
                    <div className={styles.tarefasCriadas}>
                        <span>Tarefas Criadas</span>
                        <span>{list.length}</span>
                    </div>
                    <div className={styles.tarefasConcluidas}>
                        <span>Concluídas</span>
                        <span>{`${conclued.length} de ${list.length}`}</span>
                    </div>
                </div>

                <div className={styles.tasks}>
                    
                    {list.length==0 ? <EmptyTask/>: list.map( (l) => {
                        return <CreatedTask 
                                content={l.content} 
                                id={l.id} 
                                isCompleted={l.isCompleted}
                                onTaskCompleted={onTaskCompleted}
                                onDeleteTask={onDeleteTask} 

                            />
                    }) }
                    
                </div>

            </div>
        // </div>
    )
}