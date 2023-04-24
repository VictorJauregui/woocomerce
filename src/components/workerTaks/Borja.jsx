import React, { useContext } from 'react'
import { toDoContext } from '../../context/Context';
import IndividualTask from '../IndividualTask';

const Borja = () => {

    const { todoList, setTodoList, deleteTodo, updateTodoStatus } = useContext(toDoContext);

    const deleteTask = (borja) => {
        deleteTodo(borja._id)
        const deleteTask = todoList.filter((todo) => todo._id !== borja.id)
        setTodoList(deleteTask);
    }

    const inProgress = (borja) => {
        const filterTasks = todoList.filter((todo) => {
            return todo._id !== borja._id
        })
        setTodoList([...filterTasks, {...borja, status: "In progress"}])
        updateTodoStatus(borja, "In progress")
    }
    
    const borjaTasks = todoList.filter((todo) => todo.worker === "Borja" && todo.status === "Pending");
    return (
        <div className="bg-[#C0C0C0] w-5/6 mx-auto border-8 border-white flex flex-col items-center rounded-xl border-solid-red h-96 max-h-96 overflow-auto pb-10 mb-10" >
            <h2 className='border-b-2 border-b-[#031442] text-4xl text-[#031442]  w-5/6 flex justify-center p-3 mb-4'>Borja</h2>
            {  
            borjaTasks.map((borja)=>{
                const {priority} = borja
                const color = priority === "Alta"? "bg-red-300 border-red-800 mt-2" : priority === "Media"? "bg-blue-300 border-blue-800 mt-2": "bg-green-300 border-green-800 mt-2";
                return (
                    <IndividualTask color={color} worker={borja} inProgress={inProgress} deleteTask={deleteTask}/>
                )
        })
        } 
        </div>
  )
}

export default Borja