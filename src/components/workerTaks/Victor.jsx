import React, { useContext } from 'react'
import { toDoContext } from '../../context/Context';
import IndividualTask from '../IndividualTask';

const Victor = () => {

    const { todoList, setTodoList, deleteTodo} = useContext(toDoContext);

    const inProgress = (victor) => {
        const filterTasks = todoList.filter((todo)=>{
            return todo._id !== victor._id
        })
        setTodoList([...filterTasks, {...victor, status: "In progress"}])
    }

    const deleteTask = (victor) => {
        deleteTodo(victor._id)
        const deleteTask = todoList.filter((todo) => todo._id !== victor._id)
        setTodoList(deleteTask);
    }
    
    const victorTasks = todoList.filter((todo) => todo.worker === "Victor" && todo.status === "Pending");

    return (
        <div className="bg-[#C0C0C0] w-5/6 mx-auto border-8 border-white flex flex-col items-center rounded-xl border-solid-red h-96 max-h-96 overflow-auto pb-10 mb-10" >
        <h2 className='border-b-2 border-b-[#031442] text-4xl text-[#031442]  w-5/6 flex justify-center p-3 mb-4'>Víctor</h2>
        {  
        victorTasks.map((victor)=>{
            const {priority} = victor
            const color = priority === "Alta"? "bg-red-300 border-red-800 mt-2" : priority === "Media"? "bg-blue-300 border-blue-800 mt-2": "bg-green-300 border-green-800 mt-2";
            return (
                <IndividualTask color={color} worker={victor} inProgress={inProgress} deleteTask={deleteTask}/>
            )
        })
        } 
        </div>
  )
}

export default Victor