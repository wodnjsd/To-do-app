import { useState } from 'react'
import { TaskType } from './types/tasks'
import { useLocalStorage } from './hooks/useLocalStorgae'
import Home from './components/Home'
import Footer from './components/Footer'
import Action from './components/popups/Action'

function App() {
  const [tasks, setTasks] = useLocalStorage<TaskType[]>("saved", [])
  const [action, setAction] = useState('')

  const addTask = (id: string, name: string, date: string) => {
    setTasks([
      ...tasks,
      {
        id: id,
        name: name,
        date: date
      },
    ])
    setAction('Added')
    setTimeout(() => {
      setAction('')
    }, 1000)
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
    setAction('Saved')
    setTimeout(() => {
      setAction('')
    }, 1000)
    console.log(tasks)
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
    setAction('Deleted')
    setTimeout(() => {
      setAction('')
    }, 1000)
  }

  const completeTask = (id:string) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
    setAction('Wohoo!')
    setTimeout(() => {
      setAction('')
    }, 1000)
  }

  return (
    <>
      <h1 className='py-10 font-bungee text-3xl'>My Todo List</h1>
      <Home tasks={tasks} addTask={addTask} editTask={editTask} deleteTask={deleteTask} completeTask={completeTask}
      />
      {action !== '' && <Action action={action}/> }
      <Footer />
    </>
  )
}

export default App
