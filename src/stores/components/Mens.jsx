import React from 'react'
import {menData} from '../data/menswear'

const Mens = () => {
    const firstFiveImages=menData.slice(0,5) 
  return (
    <>
   <div className='proTitle'>
    <h1>Mens</h1>
    </div>
    
    <div className='proSection'>
        {
            
                firstFiveImages.map((item )=>
                {
            return(

                  <div className='imgBox'>
                    <img className='proImage' src={item.image} alt="logo" />
                    <div className='proModel'>
                    <b>{item.company}    {item.model}        {item.price}</b>
                </div>
                    </div>
            )

                }
                )
            
        }
      
    </div>
    </>
  )
}

export default Mens
