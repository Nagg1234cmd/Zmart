
import React from 'react'
import {menData} from '../stores/data/menswear'
import {useParams} from 'react-router-dom'
import Navbar from "../stores/components/Navbar"

const   MenSingle = () => {
    const {id} = useParams()
    const product=menData.find((item)=>item.id===id)
    

  console.log(id)
  {
  return (
    <>
      <Navbar />
    <div className='ind-page'>
      <div className='ind-image'>
        <img src={product.image} alt='logo'/>

      </div>
      <div className="ind-Model">
        <h3>{product.model}</h3>
      
      <div className="indPrice">
        <h2>
          {product.price}
        </h2>
      
       <div className="ind-Desc">
        <h2>{product.description}</h2>
       </div>
       </div>
       </div>
    </div>
    </>
    
  
  
  
  )}
}



export default MenSingle
