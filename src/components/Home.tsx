import { FormEvent, useState } from 'react'
import TaskList from './TaskList'
import Form from './Form'
import { TaskType } from '../types/tasks'
import { v4 as uuidv4} from 'uuid'


type Props = {
  tasks: TaskType[];
  addTask(id:string, name: string, date: string): void;
  editTask(id:string, name: string, date: string): void;
  deleteTask(id:string): void;
  completeTask(id:string): void
}

const Home = ({tasks, addTask, editTask, deleteTask, completeTask}: Props) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [nameDuplicate, setNameDuplicate] = useState(false)
  
  const getTodayString = () => {
    //get today's date for minimum value of date input
    const today = new Date()
    const year = today.getFullYear()
    //months are zero-based (0 = January)
    const month = String(today.getMonth()+1).padStart(2, "0")
    const day = String(today.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
    };
  


  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    if(tasks.find(task => task.name ===name)) {
      return setNameDuplicate(true)
    }
    if (!nameDuplicate) {
      const id = uuidv4()
      addTask(id, name, date)
      setName('')
      setDate('') 
    }
  }

  return (
    <>
      <Form name={name} setName={setName} date={date} setDate={setDate} handleSubmit={handleSubmit} getTodayString={getTodayString}/>
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} completeTask={completeTask} getTodayString={getTodayString}/>

    </>
  )
}

export default Home