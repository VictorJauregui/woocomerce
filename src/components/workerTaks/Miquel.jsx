import React, { useContext } from 'react'
import { toDoContext } from '../../context/Context';
import IndividualTask from '../IndividualTask';

const Miquel = () => {

    const { todoList, setTodoList, deleteTodo } = useContext(toDoContext);
    
    const inProgress = (miquel) => {
        const filterTasks = todoList.filter((todo) => {
            return todo.worker !== miquel.worker
            
        })
        setTodoList([...filterTasks, {...miquel, status: "In progress"}])
   }

    const deleteTask = (miquel) => {
        deleteTodo(miquel._id)
        const deleteTask = todoList.filter((todo) => todo._id !== miquel._id)
        setTodoList(deleteTask);
    }
    
    const miquelTasks = todoList.filter((todo) => todo.worker === "Miquel" && todo.status === "Pending");

    return (
        <div className="bg-[#C0C0C0] w-5/6 mx-auto border-8 border-white flex flex-col items-center rounded-xl border-solid-red h-96 max-h-96 overflow-auto pb-10 mb-10" >
            <h2 className='border-b-2 border-b-[#031442] text-4xl text-[#031442]  w-5/6 flex justify-center p-3 mb-4'>Miquel</h2>
            {  
            miquelTasks.map((miquel)=>{
                const {priority} = miquel
                const color = priority === "Alta"? "bg-red-300 border-red-800 mt-2" : priority === "Media"? "bg-blue-300 border-blue-800 mt-2": "bg-green-300 border-green-800 mt-2";
                return (
                    <IndividualTask color={color} worker={miquel} inProgress={inProgress} deleteTask={deleteTask}/>
                )
        })
        } 
        </div>
  )
}

export default Miquel;