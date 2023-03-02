import React from 'react'
import { Excels } from '../../../data/excels'
import ExcelIndividual from './ExcelIndividual'

const ListExcels = () => {
    
    return (
        <div>
        <div className= "ml-20 items-center mt-40 mb-20">
            <h2 className='text-[2.5rem] ml-10 font-bold text-[#031442]' >Excels</h2>
        </div>   
        <div className='grid grid-cols-6 gap-5 mx-5'>
            {Excels.map((excel, i)=>{
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