import React, { useContext } from 'react'
import { toDoContext } from '../context/Context';
import rubish from '../assets/images/rubish.png'
import check from '../assets/images/check.png'
import { NavLink } from 'react-router-dom';
import Nav from '../components/workerTaks/NavBar';

export const InProgress = () => {
    const { todoList, setTodoList, deleteTodo } = useContext(toDoContext);
    
    const inProgressTasks = todoList.filter((task) => {
        return task.status === "In progress"
        
    })


    const completed = (task)=>{
        const filterTask = todoList.filter((todo) => {
            return todo.id !== task.id
        })
        setTodoList([...filterTask, {...task, status: "Completed" }])
    }   

    const deleteTask = (task) => {
        deleteTodo(task._id)
        const filterTask = todoList.filter((todo) => {
            return todo.id !== task.id
        })
        setTodoList([...filterTask])
    }

    
    return (
        <>
        <Nav />
        <div className='bg-[#031442] h-screen'>
            <div className='bg-white w-2/4 flex flex-col items-center mx-auto rounded-xl'  >
                <h2 className='text-4xl mb-7 mt-7 text-[#031442]'>In progress</h2>
                {
                inProgressTasks.map((task)=> {
                    console.log(task)
                    return (
                    <div className='grid grid-cols-12 w-5/6 justify-center pt-2 pb-2 border-b-2 mb-5'>
                        <p className='text-xl flex col-span-3 justify-center'>{task.title}</p>
                        <p className='text-xl flex col-span-7 justify-center'>{task.worker}</p>
                        <NavLink to="/completado" >
                            <img className='w-6 cursor-pointer' src={check} alt="" onClick={() => completed(task)} />
                        </NavLink>
                        <img className='w-6 flex items-center cursor-pointer' src={rubish} alt="" onClick={() => deleteTask(task)}/>
                    </div>
                )
                })
                }
            </div>
        </div>
        </>
    )
}
