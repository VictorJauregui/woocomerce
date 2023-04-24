import React, { useContext, useEffect, useState } from 'react'
import Alberto from '../components/workerTaks/Alberto';
import Borja from '../components/workerTaks/Borja';
import Jesus from '../components/workerTaks/Jesus';
import Miquel from '../components/workerTaks/Miquel';
import Victor from '../components/workerTaks/Victor';
import { toDoContext } from '../context/Context'
import Nav from '../components/workerTaks/NavBar';


export const Home = () => {
  const { addTodo, getTodos} = useContext(toDoContext);

  const handleAddTodo = (e) => {
    e.preventDefault()
    addTodo(formData)

  }
  
  const [formData, setFormData ] = useState({
    title: "",
    worker: "Victor",
    priority: "Alta",
    status: "Pending"
  })

  
    const handleChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getTodos()
  }, [])
  
  
    return (
      <>
      <Nav />
    <div className='bg-[#031442] pb-20' >
        <form className='bg-white w-4/5 lg:w-2/3 xl:w-2/3 2xl:w-2/4 mx-auto rounded-xl flex flex-col items-center mb-20' onSubmit={handleAddTodo}>
          <div className='border-b border-[#031442] w-full flex justify-center '>
            <h2 className='text-2xl font-bold my-2 text-[#031442] '>Crear tarea</h2>
          </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 w-full gap-3 px-10 pt-4' >
                <div className='flex flex-col col-span-2'>
                    <label className='text-xl' htmlFor="task">Tarea</label>
                    <input className="bg-[#F4F4F4] border-2 border-gray-400 h-8 rounded w-full"
                        value={formData.title}
                        name="title"
                        type="text"
                        id="task"
                        onChange={handleChangeFormData}
                        />
                </div>
                <div className='flex flex-col'>
                <label className='text-xl' htmlFor='worker'>Worker</label>   
                    <select className="bg-[#F4F4F4] border-2 border-gray-400 h-8 rounded"
                        value={formData.worker}
                        name="worker"
                        id="worker"
                        onChange={handleChangeFormData}>
                        <option value="Victor">Víctor</option>
                        <option value="Jesus">Jesús</option>
                        <option value="Alberto">Alberto</option>
                        <option value="Miquel">Miquel</option>
                        <option value="Borja">Borja</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl' htmlFor="priority">Prioridad</label>
                    <select className="bg-[#F4F4F4] border-2 border-gray-400 h-8 rounded"
                        value={formData.priority}
                        name="priority"
                        id="priority"
                        onChange={handleChangeFormData}>
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baja">Baja</option>
                    </select>
                </div>
            </div>
            <button className='bg-[#6366F1] py-1 my-7 text-white rounded w-2/6'>Asignar tarea</button>
        </form>  
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 justify-around mt-10'>
                <Miquel />
                <Victor/>
                <Jesus />
                <Borja />
                <Alberto setFormData={setFormData} formData={formData}/>
            </div> 


    </div>
    </>
    
  )
}
