import React, { useContext, useState } from 'react'
import rubish from '../assets/images/rubish.png'
import working from '../assets/images/working.png'
import { NavLink } from 'react-router-dom'
import { toDoContext } from '../context/Context'
import pencil from '../assets/images/pencil.png'

const IndividualTask = ({color, worker, inProgress, deleteTask}) => {
  const {editTodo, setTodoList, todoList} = useContext(toDoContext)
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(worker.title)
    
  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleEditTodo = async () => {
   const response = await editTodo(worker._id, inputValue)
   if(response.ok){
    setIsEditing(false)
    const updateTodos = todoList.map((todo) => {
      if(todo._id !== worker._id){
        return todo
      }
      else {
        return {...todo, title: inputValue}
      }
    })
    setTodoList(updateTodos)
   }
  }

  const handleCancelTodo = () => {
    setInputValue(worker.title)
    setIsEditing(false)
  }

  return (
  
    <div className={`${color} w-5/6 rounded border flex flex-col`}>
            { isEditing ?
                      <>
                      <input type="text" 
                      value={inputValue}
                      onChange={handleChangeInputValue}
                      />
                      <button onClick={handleEditTodo}>Aceptar</button>
                      <button onClick={handleCancelTodo}>Cancelar</button>
                      </>
                      :
                      <>
                        <p className='m-2'>{worker.title}</p>
                        <div className='flex gap-1 justify-end mb-2 mr-2'>
          
                            <img className='w-7 h-7 cursor-pointer' onClick={()=>setIsEditing(true)} src={pencil} alt=""/>
                            <NavLink to="/in-progress">
                                <img className='w-6 h-6 cursor-pointer' src={working} alt="" onClick={() => inProgress(worker)} />
                            </NavLink> 
                            <img className='w-6 h-6 cursor-pointer' src={rubish} alt="" onClick={() => deleteTask(worker)}/>
                        </div>   
                        </>  
                  }
                    </div>
  )
}

export default IndividualTask