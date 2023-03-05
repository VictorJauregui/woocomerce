import React, { useEffect, useState } from 'react'
import PlanificacionesIndividual from './PlanificacionesIndividual'

const PlanificacionesList = () => {
    const url = "http://localhost:3000/Planificaciones"
    const [planificaciones, setPlanificaciones] = useState([])

    useEffect ( () => {
        const planificaciones = async () => {
        const response = await fetch(url);
        const json = await response.json();
        return setPlanificaciones(json);
    }
     planificaciones()
}, [])
    
    return (
        <div>
        <div className= "ml-10 items-center mt-40 mb-20">
            <h2 className='text-[2.5rem] ml-10 font-bold text-[#031442]'>Planificaciones</h2>
        </div>   
        <div className='grid grid-cols-5 gap-20 mx-20'>
            {planificaciones.map((planificacion, i)=>{
                return (
                    <div key={`${planificacion.name}-${i}`}>
                        <PlanificacionesIndividual planificacion={planificacion}/>
                    </div>
                )
            })}
    
          </div>
        </div>
      )
    }

    export default PlanificacionesList