import React from 'react'
import {computerData} from '../stores/data/computer'
import {useParams} from 'react-router-dom'

const ComputerSingle = () => {
    const {id} = useParams()
    const product=computerData.find((item)=>item.id===id)

  console.log(id)
  {
  return (
    <>
 
    
   <div className="ind-page">

    <div className="ind-image">
        <img src={product.image}></img>
    </div>
    <div className='ind-model'>
        <h1>{product.model}</h1>
    
    <div className='ind-desc'>
        <h1>{product.description}</h1>
        </div>
       
    </div>
   </div>
   </>
  )}
}

export default ComputerSingle
