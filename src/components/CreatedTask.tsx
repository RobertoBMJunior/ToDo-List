import {Trash} from 'phosphor-react'
import styles from './CreatedTask.module.css'
import {Check} from 'phosphor-react'

interface CreatedProps {
    content: string
    id: number
    isCompleted:boolean
    onTaskCompleted:(id:number)=>void
    onDeleteTask:(id:number)=>void
}

export function CreatedTask({content,id,isCompleted,onTaskCompleted,onDeleteTask}:CreatedProps) {

    function handleTaskCompleted(){
        onTaskCompleted(id)
    }

    function handleDeleteTask(){
        onDeleteTask(id)
    }

    return(
        <div className={styles.taskList}>
            <div onClick={handleTaskCompleted} className={isCompleted ? styles.circleCompleted : styles.circle} title='Marcar/Desmarcar'>
              {isCompleted? <Check/> : ''}  
            </div>
            <span className={isCompleted ? styles.taskCompleted : styles.taskIncompleted}>
                {content}
            </span>
            <button onClick={handleDeleteTask} className={styles.trash} title='Deletar Tarefa'>
                <Trash size={20}/>
            </button>
        </div>
    )
}