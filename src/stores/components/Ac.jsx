import React from 'react'
import {acData} from '../data/ac'

const Ac = () => {
    const firstFiveImages =acData.slice(0,5)

  return (
    <>
    <div className='proTitle'>
    <h1>Acs</h1>
    </div>
    
    <div className='proSection'>
        {
            firstFiveImages.map((item) =>{
                return(
                    <div className='imgBox'>
                        <img  className='proImage' src={item.image}  alt="logo"></img>
                        
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

export default Ac
