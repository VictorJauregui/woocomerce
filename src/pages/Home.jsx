import React, { useEffect, useState } from 'react'
import { ListOfTasks } from '../components/ListOfTaks/ListOfTasks'
import './styles-pages.css';

export const Home = () => {
    
    const [isVisible, setIsVisible] = useState(false)
    const [allTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem("allTasks")) || [])
    const [task, setTask] = useState("");

 

    const saveData = () => {
        console.log(allTasks)

        if(task.trim()!== ''){
            const newTask = {
                task: task
            }
            setAllTasks((allTasks)=>[newTask, ...allTasks]);
            setTask('');
        }
        setIsVisible(true);
    }

    useEffect(()=> {
        localStorage.setItem("tasks", JSON.stringify(allTasks))
    }, [allTasks])

  return (
    <div className='full-home'>
        <div className='box'>
            <form className='inputs' onSubmit={(e)=>{
                setAllTasks([...allTasks, 
                    {
                    name: e.target.name.value, 
                    task: e.target.task.value
                }])
                e.preventDefault();

            }}>
                <div className='div-input-what-to-do'>
                    <label>Task</label>
                    <input name="task" type="text" placeholder='hola'/>
                </div>
                <div className='div-input-person'>
                    <label>Who have to do it?</label>
                    <input name="name" type="text" placeholder='hola' />
                </div>
                <div className='priority'>
                    <label>Priority</label>
                    <select name="priority "type="text" placeholder='hola'>
                        <option value=''>Hight priority</option>
                        <option value=''>Medium priority</option>
                        <option value=''>Low priority</option>
                    </select>
                </div>
                <div className='div-btn'>
                    <button className='btn-save' type="submit" placeholder='hola' onClick={saveData}>Save</button>
                </div>
            </form>
            <p className='text-list-of-tasks'>List of tasks</p>
            {
                isVisible && allTasks.map((task) =>{
                    return <ListOfTasks  allTasks={allTasks} setAllTasks={setAllTasks} task={task.task} name={task.name} taskComplete={task} setIsVisible={setIsVisible}/>
            })
                        
                
            }
        </div>
    </div>
  )
}

export default Home