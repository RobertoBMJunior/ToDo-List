import Clipboard from '../assets/Clipboard.svg'
import styles from './EmptyTask.module.css'

export function EmptyTask () {
    return(
        <div className={styles.emptyContainer}>
            <img src={Clipboard} alt="Clipboard" />
            <div>
                <span>Você ainda não tem tarefas cadastradas</span>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}