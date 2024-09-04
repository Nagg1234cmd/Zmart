import React from 'react'
import {fridgeData} from '../data/fridges'

const Fridges = () => {
    const firstFiveImages=fridgeData.slice(0,5)
  return (
    <>
    <div>
        <h1> Fridges</h1>
        </div>
    <div className='proSection'>
        {
            firstFiveImages.map((item) =>
            {
                return(
                <div className='imgBox'>
                    <img className="proImage " src={item.image} alt="logo" />
                 
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

export default Fridges
