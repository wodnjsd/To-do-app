import { FormEvent, useState } from 'react'
import TaskList from './TaskList'
import Form from './Form'
import { TaskType } from '../types/tasks'
import { v4 as uuidv4} from 'uuid'


type Props = {
  tasks: TaskType[];
  addTask(id:string, name: string, date: string): void;
  editTask(id:string, name: string, date: string): void;
  deleteTask(id:string): void
}

const Home = ({tasks, addTask, editTask, deleteTask}: Props) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [nameDuplicate, setNameDuplicate] = useState(false)


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
      <Form name={name} setName={setName} date={date} setDate={setDate} handleSubmit={handleSubmit} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask}/>

    </>
  )
}

export default Home