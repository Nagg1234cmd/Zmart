import React from 'react'
import {acData} from '../stores/data/ac'
import {useParams} from 'react-router-dom'


const AcSingle = () => {
    const {id}=useParams()
    const product=acData.find((item)=>item.id===id)
    
    console.log(id)
  return (
   <div className="ind-page">
    <div className="ind-image">
        <img src={product.image} alt="logo"/><img/>
        </div>
    <div className="ind-model">
        <h2>
            {product.model}
        </h2>
    
     <div className="indDesc">
        <h1>
            {product.description}
        </h1>
        <div className='button'>
        <button>cart</button>
        </div>
        
     
     </div>
     </div>
     
   </div>
  )
}

export default AcSingle
