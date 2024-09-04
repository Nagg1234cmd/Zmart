import React from 'react'
import {tvData} from '../stores/data/tv'
import { useParams} from 'react-router-dom'
import Navbar from '../stores/components/Navbar'


const TvSingle = () => {
  const {id}= useParams()
  const product= tvData.find((item)=>item.id  === id)
  console.log(id)
  return (
    <>
    <Navbar />
    <div>
    <div className='ind-page'>
    <div className="ind-image">
        <img src={product.image}></img>
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
    </div>
    </>
  )
}

export default TvSingle

