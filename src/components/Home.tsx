import { FormEvent, useState } from 'react'
import TaskList from './TaskList'
import Form from './Form'
import { TaskType } from '../types/tasks'
import { v4 as uuidv4 } from 'uuid'
import Pagination from './Pagination'

type Props = {
  tasks: TaskType[];
  addTask(id: string, name: string, date: string): void;
  editTask(id: string, name: string, date: string): void;
  deleteTask(id: string): void;
  completeTask(id: string): void
}

const Home = ({ tasks, addTask, editTask, deleteTask, completeTask }: Props) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [nameDuplicate, setNameDuplicate] = useState(false)

  const getTodayString = () => {
    //get today's date for minimum value of date input
    const today = new Date()
    const year = today.getFullYear()
    //months are zero-based (0 = January)
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const day = String(today.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  };

  //create shallow copy and sort by date
  const sorted = tasks.slice().sort((task1, task2) => {
    return task1.date.localeCompare(task2.date)
  })

  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [tasksPerPage] = useState(10)
  const indexOfLastTask = currentPage * tasksPerPage
  const indexOfFirstTask = indexOfLastTask - tasksPerPage
  const currentTasks = sorted.slice(indexOfFirstTask, indexOfLastTask)
  const nPages = Math.ceil(tasks.length / tasksPerPage)
  const paginate = (pgNumber: number) => setCurrentPage(pgNumber)
  const next = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  const previous = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (tasks.find(task => task.name === name)) {
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
      <Form name={name} setName={setName} date={date} setDate={setDate} handleSubmit={handleSubmit} getTodayString={getTodayString} nameDuplicate={nameDuplicate} setNameDuplicate={setNameDuplicate} />
      {tasks.length>0? <TaskList tasks={tasks} currentTasks={currentTasks} editTask={editTask} deleteTask={deleteTask} completeTask={completeTask} getTodayString={getTodayString} sorted={sorted} /> :
      <div className='flex flex-col justify-center items-center mt-20'>No tasks yet
        <p className='text-xs mt-2'>Start adding now!</p></div>}
      <Pagination totalTasks={tasks.length} nPages={nPages} paginate={paginate} next={next} previous={previous} currentPage={currentPage}/>
    </>
  )
}

export default Home