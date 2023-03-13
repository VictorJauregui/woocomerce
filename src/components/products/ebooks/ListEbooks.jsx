
import { useEffect, useState } from "react";
import EbookIndividual from "./EbookIndividual";

const ListEbooks = () => {
    const url = "http://localhost:3000/Ebooks"
    const [ebooks, setEbooks] = useState([])

    useEffect(() => {
        const ebooks = async () => {
            const response = await fetch(url)
            const json = await response.json()
            return setEbooks(json)
        }
        ebooks();
    }, [])
    

    return (
        <div>
        <div className= "ml-20 items-center mt-40 mb-20">
            <h2 className='text-[3rem] font-bold text-[#031442]' >Nuestros productos</h2>
            <h2 className='text-[2.5rem] font-bold text-[#031442]' >Ebooks</h2>
        </div>   
        <div className='grid grid-cols-5 gap-20 mx-20'>
            {ebooks.map((ebook, i)=>{
                return (
                    <div key={`${ebook.name}-${i}`}>
                        <EbookIndividual ebook={ebook}/>
                    </div>
                )
            })}
    
          </div>
        </div>
      )
    }

    export default ListEbooks