import React, { useContext } from 'react'
import { toDoContext } from '../context/Context';
import rubish from '../assets/images/rubish.png'
import check from '../assets/images/check.png'

export const InProgress = () => {
    const { todoList } = useContext(toDoContext);

    const inProgressTasks = todoList.filter((task) => {
        return task.status === "In progress"
    })
    
    return (
        <div className='bg-[#031442] h-screen'>
            <div className='bg-white w-2/4 flex flex-col items-center mx-auto rounded-xl'  >
                <h2 className='text-4xl mb-7 mt-7 text-[#031442]'>In progress</h2>
                {
                inProgressTasks.map((task)=> {
                    return (
                    <div className='grid grid-cols-12 w-5/6 justify-center pt-2 pb-2 border-b-2 mb-5'>
                        <p className='text-xl flex col-span-3 justify-center'>{task.name}</p>
                        <p className='text-xl flex col-span-7 justify-center'>{task.task}</p>
                        <img className='w-6 cursor-pointer' src={check} alt="" />
                        <img className='w-6 flex items-center cursor-pointer' src={rubish} alt="" />
                    </div>
                )
                })
                }
            </div>
        </div>
    )
}
