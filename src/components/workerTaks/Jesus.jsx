import React, { useContext } from 'react'
import { toDoContext } from '../../context/Context';
import rubish from '../../assets/images/rubish.png'
import working from '../../assets/images/working.png'

const Jesus = () => {

    const { todoList, setTodoList } = useContext(toDoContext);

    const inProgress = (jesus) => {
        const filterTasks = todoList.filter((todo) => {
            return todo.id !== jesus.id
        })
        setTodoList([...filterTasks, {...jesus, status: "In progress"}])
    }
    
    const deleteTask = (jesus) => {
        const deleteTask = todoList.filter((todo) => todo.id !== jesus.id)
        setTodoList(deleteTask);
    }
    
    const jesusTasks = todoList.filter((todo) => todo.name === "Jesus" && todo.status === "Pending");

    return (
        <div className="bg-[#C0C0C0] border-8 border-white w-1/6 flex flex-col items-center rounded-xl border-solid-red h-96 max-h-96 overflow-auto pb-10" >
            <h2 className='border-b-2 border-b-[#031442] text-4xl text-[#031442]  w-5/6 flex justify-center p-3 mb-4'>Jesus</h2>
            {  
            jesusTasks.map((jesus)=>{
                const {priority} = jesus
                const color = priority === "Alta"? "bg-red-300 border-red-800 mt-2" : priority === "Media"? "bg-blue-300 border-blue-800 mt-2": "bg-green-300 border-green-800 mt-2";
                return (
                    <div className={`${color} w-5/6 rounded border flex flex-col`}>
                        <p className='m-2'>{jesus.task}</p>
                        <div className='flex gap-1 justify-end mb-2 mr-2'>
                            <img className='w-6 h-6 cursor-pointer' src={working} alt="" onClick={() => inProgress(jesus)} />   
                            <img className='w-6 h-6 cursor-pointer' src={rubish} alt="" onClick={() => deleteTask(jesus)}/>   
                        </div>     
                    </div>
                )
        })
        } 
        </div>
  )
}

export default Jesus