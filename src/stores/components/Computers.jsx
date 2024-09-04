import React from 'react'
import {computerData} from '../data/computer'

const Computers = () => {
  const firstFiveImages=computerData.slice(0,5)
  return (
    <>
      <div className='proTitle'>
    <h1>Computers</h1>
    </div>
    
    <div className="proSection">
      {
        firstFiveImages.map((item)=>{
            return(
               <div className='imgBox'>
                <img  className='proImage' src={item.image} alt="logo"/>
                <div className='proModel'>
                <b>{item.company}    {item.model}        {item.price}</b>
                 
                </div>
                </div>


            )
        
        })
      }
    </div>
    </>
  )
}

export default Computers

