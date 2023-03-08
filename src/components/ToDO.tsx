import LogoFoguete from '../assets/Logo-Foguete.svg'
import styles from './ToDo.module.css'
import {PlusCircle} from 'phosphor-react'
import { useState } from 'react'
import { TaskArea } from './TaskArea'

interface TaskList {
    id: number
    content: string
    isCompleted: boolean
}


export function ToDo () {

    const [tasks, setTasks] = useState<TaskList[]>([])
    const [newTask,setNewTask] = useState('')

    function handleSubmit(e:any) {
        e.preventDefault()

        const newAssignment:TaskList = {
            id: Math.random(),
            content: newTask,
            isCompleted: false
        }

        setTasks(state => [...state,newAssignment])
        setNewTask('')
    }

    function handleNewTask(e:any) {
        e.target.setCustomValidity('')
        setNewTask(e.target.value)
    }

    function taskCompleted (id:number){
       
        let lista_de_Tarefas = [...tasks];
       
        for(let tarefa of lista_de_Tarefas ) {
            if(tarefa.id == id) {
                tarefa.isCompleted = !tarefa.isCompleted
            }
        }

        setTasks(lista_de_Tarefas)
    }

    function deleteTask (id:number) {
        const updatedTask = tasks.filter(task=>{
            return task.id != id
        })

        setTasks(updatedTask)
    }

    function handleInvalid (e:any) {
        e.target.setCustomValidity("Este campo é obrigatório! Dê um nome para sua tarefa.")
    }

    return(
        <div className={styles.toDoContainer}>
            <header className={styles.headerContainer}>
                <img src={LogoFoguete} alt="Desenho de um foguete" />
                <div className={styles.title}>
                    <span>to</span>
                    <span>do</span>
                </div>
            </header>

            <main className={styles.mainContainer}>
                <form action="" onSubmit={handleSubmit}>
                    <input 
                    className={styles.inputTask} 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleNewTask}
                    value={newTask}
                    onInvalid={handleInvalid}
                    required
                    />
                    <button className={styles.buttonCreate} type='submit'>
                        <span>Criar</span>
                        <PlusCircle size={18}/>
                    </button>
                </form>
            </main>


            <TaskArea list={tasks} onTaskCompleted={taskCompleted} onDeleteTask={deleteTask}/>

        </div>
    )
}