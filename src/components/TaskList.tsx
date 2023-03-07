import {Trash} from 'phosphor-react'
import styles from './TaskList.module.css'
import {Check} from 'phosphor-react'

export function TaskList() {
    let completed = true

    return(
        <div className={styles.taskList}>
            <div className={completed ? styles.circleCompleted : styles.circle}>
              {completed==true ? <Check/> : ''}  
            </div>
            <span className={completed ? styles.taskCompleted: ''}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </span>
            <Trash size={20} className={styles.trash}/>
        </div>
    )
}