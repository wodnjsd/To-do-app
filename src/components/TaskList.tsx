import { FormEvent, useState } from "react"
import { TaskType } from "../types/tasks"
import Task from "./Task"
import EditForm from "./EditForm"
import DeleteConfirm from "./popups/DeleteConfirm"

type Props = {
  tasks: TaskType[];
  editTask(id: string, name: string, date: string): void;
  deleteTask(id: string): void
}

const BookmarksList = ({ tasks, editTask, deleteTask }: Props) => {
  const [editName, setEditName] = useState('')
  const [editDate, setEditDate] = useState('')
  const [id, setId] = useState('')
  const [nameDuplicate, setNameDuplicate] = useState(false)
  const [editId, setEditId] = useState('')
  const [deleteId, setDeleteId] = useState('')

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

  return (
    <>
      <h1 className="py-5">My Task List</h1>
      {tasks.map((task, index) => {
        const { id, name, date } = task
        return (
          <div className=" flex gap-10 border px-10 py-5 items-center">
            <input type="checkbox" />
            <Task key={index} id={id} name={name} date={date} />
            <div>
              <button onClick={() => { setEditId(id), setId(id), setEditName(name), setEditDate(date) }}>Edit</button>
              {id === editId && <EditForm handleEditSubmit={handleEditSubmit} name={editName} setName={setEditName} date={editDate} setDate={setEditDate} setEditId={setEditId} />}
              <button onClick={() => { setId(id), setDeleteId(id) }}>Delete</button>
              {id === deleteId && <DeleteConfirm handleDelete={handleDelete} setDeleteId={setDeleteId} />}
            </div>

          </div>

        )
      })}
    </>
  )
}

export default BookmarksList