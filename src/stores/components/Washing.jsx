import React from 'react'
import {washingData} from '../data/washing'

const Washing = () => {
  const firstFiveImages=washingData.slice(0,5)
  return (
    <>
      <div className='proTitle'>
    <h1>WashingMachines</h1>
    </div>
    
  
    <div className="proSection">
      {
        
        firstFiveImages.map((item)=>{
            return(

              
               <div className='imgBox'>
                
                <img  className='proImage' src={item.image} alt="logo"/>
                <div className='proModel'>
               <b>{item.category}     {item.Designed}    {item.price}    </b>              
                </div>
                </div>


            )
        
        })
      }
    </div>
    </>
  )
}

export default Washing

