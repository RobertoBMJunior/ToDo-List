import LogoFoguete from '../assets/Logo-Foguete.svg'
import styles from './ToDo.module.css'
import {PlusCircle} from 'phosphor-react'

export function ToDo () {
    return(
        <main className={styles.toDoContainer}>
            <header className={styles.headerContainer}>
                <img src={LogoFoguete} alt="Desenho de um foguete" />
                <div className={styles.title}>
                    <span>to</span>
                    <span>do</span>
                </div>
            </header>

            <main className={styles.mainContainer}>
                <form action="">
                    <input className={styles.inputTask} type="text" placeholder='Adicione uma nova tarefa'/>
                    <button className={styles.buttonCreate} type='submit'>
                        <span>Criar</span>
                        <PlusCircle size={18}/>
                    </button>
                </form>
            </main>

        </main>
    )
}