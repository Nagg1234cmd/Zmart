import React from 'react'
import {womanData} from '../data/womenswear'

const Womens = () => {
    const firstFiveImages=womanData.slice(0,5)
  return (
    <>
     <div className='proTitle'>
    <h1>WomensWear</h1>
    </div>
    
       <div className='proSection'>
        {
            
                firstFiveImages.map((item )=>
                {
            return(

                  <div className='imgBox'>
                    <img className='proImage' src={item.image} alt="logo" />
                    <div className='proModel'>
               <b>{item.company}  {item.model}  {item.price}</b>
               
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

export default Womens
