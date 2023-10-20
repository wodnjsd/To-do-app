import { FormEvent, useState } from "react"
import { TaskType } from "../types/tasks"
import Task from "./Task"
import EditForm from "./EditForm"
import DeleteConfirm from "./popups/DeleteConfirm"
import { SlPencil } from "react-icons/sl";
import { HiOutlineTrash } from 'react-icons/hi2'

type Props = {
  tasks: TaskType[];
  sorted: TaskType[];
  currentTasks: TaskType[];
  editTask(id: string, name: string, date: string): void;
  deleteTask(id: string): void;
  completeTask(id: string): void;
  getTodayString(): string;
}

const BookmarksList = ({ tasks, currentTasks, editTask, deleteTask, completeTask, getTodayString }: Props) => {
  const [editName, setEditName] = useState('')
  const [editDate, setEditDate] = useState('')
  const [id, setId] = useState('')
  const [nameDuplicate, setNameDuplicate] = useState(false)
  const [editId, setEditId] = useState('')
  const [deleteId, setDeleteId] = useState('')

  //overdue tasks to highlight
  const findOverdue = (date: string) => {
    const taskDate = new Date(date)
    const today = new Date(getTodayString())
    // console.log(today, date )
    return taskDate < today
  }

  const handleEditSubmit = (e: FormEvent) => {
    e.preventDefault()
    const toEdit = tasks.filter((task) => task.id !== id)
    if (toEdit.find(task => task.name === editName)) {
      return setNameDuplicate(true)
    }
    if (!nameDuplicate) {
      editTask(id, editName, editDate)
      setEditId('')
    }
  }

  const handleDelete = () => {
    deleteTask(id)
    setDeleteId('')
  }

  const handleComplete = (id: string) => {
    setTimeout(() => {
      completeTask(id)
    }, 500)
  }

  return (
    <div className="py-20">
      <h1 className="py-6 font-geoFill text-xl">My Tasks</h1>
      {currentTasks.map((task, index) => {
        const { id, name, date } = task
        return (
          <div key={id} className={`my-2 flex gap-10 justify-between px-10 py-5 shadow-md items-center border border-t-8 ${findOverdue(date) ? 'border-rose-400' : 'border-cyan-700'}`}>
            <div className="flex gap-10">
              <input type="checkbox" onClick={() => { handleComplete(id) }} />
              <Task key={index} id={id} name={name} date={date} />
            </div>
            <div>
              <button onClick={() => { setEditId(id), setId(id), setEditName(name), setEditDate(date) }}><SlPencil /></button>
              {id === editId && <EditForm handleEditSubmit={handleEditSubmit} name={editName} setName={setEditName} date={editDate} setDate={setEditDate} setEditId={setEditId} getTodayString={getTodayString} nameDuplicate={nameDuplicate}/>}
              <button onClick={() => { setId(id), setDeleteId(id) }}><HiOutlineTrash /></button>
              {id === deleteId && <DeleteConfirm handleDelete={handleDelete} setDeleteId={setDeleteId} />}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BookmarksList