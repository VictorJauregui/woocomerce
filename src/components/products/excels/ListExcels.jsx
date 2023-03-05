import React, { useEffect, useState } from 'react'

import ExcelIndividual from './ExcelIndividual'

const ListExcels = () => {
    const url = "http://localhost:3000/Excels"
    const [excels, setExcels] = useState([])

    useEffect ( () => {
        const excels = async () => {
        const response = await fetch(url);
        const json = await response.json();
        return setExcels(json);
    }
     excels()
}, [])
    
    return (
        <div>
        <div className= "ml-10 items-center mt-40 mb-20">
            <h2 className='text-[2.5rem] ml-10 font-bold text-[#031442]' >Excels</h2>
        </div>   
        <div className='grid grid-cols-5 gap-20 mx-20'>
            {excels.map((excel, i)=>{
                return (
                    <div key={`${excel.name}-${i}`}>
                        <ExcelIndividual excel={excel}/>
                    </div>
                )
            })}
    
          </div>
        </div>
      )
    }

    export default ListExcels