import React, { useContext } from 'react'
import { toDoContext } from '../../context/Context';

import { NavLink } from 'react-router-dom';
import IndividualTask from '../IndividualTask';

const Alberto = () => {

    const { todoList, setTodoList, deleteTodo } = useContext(toDoContext);
    
    const albertoTasks = todoList.filter((todo) => todo.worker === "Alberto" && todo.status === "Pending");

    
    const inProgress = (alberto) => {
        const filterTasks = todoList.filter((todo) => {
            return todo._id !== alberto._id
        })
        setTodoList([...filterTasks, {...alberto, status: "In progress"}])
    }
    
    console.log(todoList)

    const deleteTask = (alberto) => {
        
        deleteTodo(alberto._id)
        const deleteTask = todoList.filter((todo) => todo._id !== alberto._id );
        setTodoList(deleteTask)
    }

    return (
        <div className="bg-[#C0C0C0] w-5/6 mx-auto border-8 border-white flex flex-col items-center rounded-xl border-solid-red h-96 max-h-96 overflow-auto pb-10 mb-10" >
            <h2 className='border-b-2 border-b-[#031442] text-4xl text-[#031442]  w-5/6 flex justify-center p-3 mb-4'>Alberto</h2>
            {  
            albertoTasks.map((alberto)=>{
                const {priority} = alberto
                const color = priority === "Alta"? "bg-red-300 border-red-800 mt-2" : priority === "Media"? "bg-blue-300 border-blue-800 mt-2": "bg-green-300 border-green-800 mt-2";
                return (
                    <IndividualTask color={color} worker={alberto} inProgress={inProgress} deleteTask={deleteTask}/>
                    
                    // <div className={`${color} w-5/6 rounded border flex flex-col`}>
                    //     <p className='m-2'>{alberto.title}</p>
                    //     <div className='flex gap-1 justify-end mb-2 mr-2'>
                    //         <NavLink to="/in-progress">
                    //             <img className='w-6 h-6 cursor-pointer' src={working} alt="" onClick={() => inProgress(alberto)} />
                    //         </NavLink> 
                    //         <img className='w-6 h-6 cursor-pointer' src={rubish} alt="" onClick={() => deleteTask(alberto)}/>   
                    //     </div>     
                    // </div>
                )
        })
        } 
        </div>
  )
}

export default Alberto