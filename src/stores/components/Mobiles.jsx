import React,{useState}from 'react'
import {mobileData} from '../data/mobile'


const Mobiles = () => {
  const firstFiveImages=mobileData.slice(0,5)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <div className='proTitle'>
    <h1>Mobiles</h1>
    </div>
    
    <div className="proSection">
      {
        
        firstFiveImages.map((item)=>{
            return(

              
              <div className='imgBox'>
                
              <img  className='proImage' src={item.image} alt="logo"/>
              <div className='proModel'>
             <b> {item.company}<b>{item.model}</b>,{item.price}</b>
               
              </div>
              </div>
              
              

            )
            
        
        })
      }
    </div>
    </>
  )
}

export default Mobiles

