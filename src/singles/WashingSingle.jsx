import React from 'react'
import {washingData} from '../stores/data/washing'
import {useParams} from 'react-router-dom'

const WashingSingle = () => {
    const {id} = useParams()
    const product=washingData.find((item)=>item.id===id)

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

export default WashingSingle
