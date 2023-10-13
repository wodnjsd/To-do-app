import { useState } from 'react'
import { TaskType } from './types/tasks'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  const addTask = (id: string, name: string, date: string) => {
    setTasks([
      ...tasks,
      {
        id: id,
        name: name,
        date: date
      },
    ])
  }

  const editTask = (id: string, name: string, date: string) => {
    const index = tasks.findIndex(task => task.id === id)
    const newTask = {
      id: id,
      name: name,
      date: date
    }
    const newList = tasks.map((task, i) => {
      if (i === index) {
        return newTask;
      } else {
        return task
      }
    })
    setTasks(newList)
    console.log(tasks)
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  return (
    <>
      <h1 className='py-10 font-bungee text-3xl'>My Todo List</h1>
      <Home tasks={tasks} addTask={addTask} editTask={editTask} deleteTask={deleteTask}
      />
      <Footer />
    </>
  )
}

export default App
