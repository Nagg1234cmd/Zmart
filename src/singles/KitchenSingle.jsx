
import React from 'react'
import {kitchenData} from '../stores/data/kitchen'
import {useParams} from 'react-router-dom'

const KitchenSingle = () => {
    const {id} = useParams()
    const product=kitchenData.find((item)=>item.id===id)

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

export default KitchenSingle
