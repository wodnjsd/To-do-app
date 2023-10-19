import { FormEvent, useState } from "react"
import { TaskType } from "../types/tasks"
import Task from "./Task"
import EditForm from "./EditForm"
import DeleteConfirm from "./popups/DeleteConfirm"
import { SlPencil } from "react-icons/sl";
import { HiOutlineTrash } from 'react-icons/hi2'

type Props = {
  tasks: TaskType[];
  editTask(id: string, name: string, date: string): void;
  deleteTask(id: string): void;
  completeTask(id: string): void;
  getTodayString(): string;

}

const BookmarksList = ({ tasks, editTask, deleteTask, completeTask, getTodayString }: Props) => {
  const [editName, setEditName] = useState('')
  const [editDate, setEditDate] = useState('')
  const [id, setId] = useState('')
  const [nameDuplicate, setNameDuplicate] = useState(false)
  const [editId, setEditId] = useState('')
  const [deleteId, setDeleteId] = useState('')

  //create shallow copy and sort by date
  const sorted = tasks.slice().sort((task1, task2) => {
    return task1.date.localeCompare(task2.date)
  })

  //overdue tasks to highligh
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
    }, 1000)
  }

  return (
    <>
      <h1 className="py-5">My Tasks</h1>
      {sorted.map((task, index) => {
        const { id, name, date } = task
        return (
          <div key={id} className={`flex gap-10 justify-between px-10 py-5 items-center border ${findOverdue(date) ? 'border-rose-400' : 'border-black'}`}>
            <div className="flex gap-10">
              <input type="checkbox" onClick={() => { handleComplete(id) }} />
              <Task key={index} id={id} name={name} date={date} />
            </div>
            <div>
              <button onClick={() => { setEditId(id), setId(id), setEditName(name), setEditDate(date) }}><SlPencil /></button>
              {id === editId && <EditForm handleEditSubmit={handleEditSubmit} name={editName} setName={setEditName} date={editDate} setDate={setEditDate} setEditId={setEditId} getTodayString={getTodayString} />}
              <button onClick={() => { setId(id), setDeleteId(id) }}><HiOutlineTrash /></button>
              {id === deleteId && <DeleteConfirm handleDelete={handleDelete} setDeleteId={setDeleteId} />}
            </div>
          </div>

        )
      })}
    </>
  )
}

export default BookmarksList