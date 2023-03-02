
import { Ebooks } from "../../../data/ebooks";
import EbookIndividual from "./EbookIndividual";

const ListEbooks = () => {
    
    return (
        <div>
        <div className= "ml-20 items-center mt-40 mb-20">
            <h2 className='text-[3rem] ml-10 font-bold text-[#031442]' >Nuestros productos</h2>
            <h2 className='text-[2.5rem] ml-10 font-bold text-[#031442]' >Ebooks</h2>
        </div>   
        <div className='grid grid-cols-6 gap-5 mx-5'>
            {Ebooks.map((ebook, i)=>{
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