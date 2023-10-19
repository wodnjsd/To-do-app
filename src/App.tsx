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
    }, 800)
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
    }, 800)
    console.log(tasks)
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
    setAction('Deleted')
    setTimeout(() => {
      setAction('')
    }, 800)
  }

  const completeTask = (id:string) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
    setAction('Wohoo!')
    setTimeout(() => {
      setAction('')
    }, 800)
  }

  return (
    <>
      <h1 className='py-16 font-bungee text-4xl'>My Todo List</h1>
      <Home tasks={tasks} addTask={addTask} editTask={editTask} deleteTask={deleteTask} completeTask={completeTask}
      />
      {action !== '' && <Action action={action}/> }
      <Footer />
    </>
  )
}

export default App
