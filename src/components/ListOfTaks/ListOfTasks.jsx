import React from 'react'
import './ListOfTasks.css'
import working from '../../assets/images/working.png';
import rush from '../../assets/images/rush.png'


export const ListOfTasks = ({task, name, setAllTasks, allTasks}) => {
  
  const deleteTask = (task) => {
  const filteredTasks = allTasks.filter(individualTask => individualTask.task !== task)
  setAllTasks(filteredTasks);
}

const InProgress = () => {
  
}

  return (
    <div>
        <div className='all-information'>
            <div className='name-and-to-do'>
                <p className='name'>{name}</p>
                <p className='what-to-do'>{task}</p>
            </div>
            <div className='div-imgs'>
              <img className='img-working-rush' src={working} alt="" onClick={() => InProgress()} />
              <img className='img-working-rush' src={rush} alt="" onClick={() => deleteTask(task)} />
            </div>
        </div>
    </div>
  )
}
