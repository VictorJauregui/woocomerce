import React, { useContext } from 'react'
import { toDoContext } from '../context/Context';
import Nav from '../components/workerTaks/NavBar';

export const Completed = () => {

  const { todoList, setTodoList } = useContext(toDoContext);

  const taskCompleted = todoList.filter((todo) => {
    return todo.status === "Completed"
  })

  const cleanTasks = () => {
    todoList.filter((todo) => {
      return todo.status === "Completed"
    })
    setTodoList([])
  }


    return (
      <>
      <Nav />
      <div className='bg-[#031442] h-[70vh]'>
        <div className='w-2/4 bg-white mx-auto rounded-xl'>
          <h2 className='text-4xl text-[#031442] flex justify-center py-5 '>Tareas Completadas</h2>
          <div className='grid grid-cols-4 text-center gap-5 mx-10'>
            {
              taskCompleted.map((task) => {
                return (
                  <div className='border-2 rounded bg-green-100 border-green-800'>
                    <h1 className='border border-b-green-800 w-3/4 mx-auto text-xl py-1 '>{task.name}</h1>
                    <h1 className='h-20 flex justify-center items-center text-gray-500'>{task.task}</h1>
                  </div>
                )
              })
            }
            
          </div>
          <div className='flex justify-center'>
            <button className='bg-[#6366F1] text-white px-10 py-1 my-8 rounded' onClick={() => cleanTasks()}>Limpiar tareas completadas</button>
          </div>
    
        </div>
      </div>
      </>

    )
    
  }

