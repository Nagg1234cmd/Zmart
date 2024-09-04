import React from 'react'
import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
    <div className="navSection">
      <div className="title">
        <h2>Zmart</h2>
      </div>
      <div className="search"> 
        <input type="text" placeholder="search..."/>
      </div>
      <div className="user">
        <div className="user-detail">
          <Link to="/signup">signin/signup</Link>
        </div>
        </div>
        <div className="cart"><b> cart</b> </div>
       

        </div>
        </div>
        
        <div className="subMenu">
          <ul>
            <Link to="/mobilepage">
            <li>Mobiles</li>
            </Link>
            <Link to="/computerspage">
            <li>Computers  </li>
            </Link>
            <Link to="/acpage">
            <li>Ac</li>
            </Link>
            <Link  to='/tvpage'>
            <li>Tv</li>
            </Link>
            <Link to='/speakerpage' >
            <li>Speakers</li>
            </Link>
           <Link to='/washingpage'><li>Washing</li></Link> 
            <Link to="/fridgespage"> <li>Fridges</li></Link>
           <Link to="/menspage"> <li>MensWear</li></Link>
           <Link to="/womenspage"><li>WomensWear</li></Link> 
           <Link to="/watchespage"><li>Watches</li></Link >
           <Link to="/kidspage"> <li>KidsWear</li></Link >
           <Link to="/kitchenpage"><li>Kitchen</li></Link> 
           <Link to='/jewelerypage'> <li>Jewellery</li></Link> 
            <Link to="/furniturepage"><li>Furniture</li></Link>
            


          </ul>

        </div>
       
       </> 
       

    
    
  )
}

export default Navbar
