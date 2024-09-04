import React from 'react'
import {Link} from "react-router-dom"

const Signup = () => {
  return (
   
    <div className='child-firm'>
        <h2>Register</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Name</strong>
                </label>
                <input 
                type="text"
                placeholder="Enter name"
                autoComplete="off"
                name="name"
                className='form-control rounded-0'/>
                

            </div>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input 
                type="text"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className='form-control rounded-0'/>
                

            </div>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>password</strong>
                </label>
                <input 
                type="text"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className='form-control rounded-0'/>
                

            </div>
            <button type="submit" className='btn btn-success w-100 rounded-0'>
                Register
                </button>
                
        </form>
                <button>Already have an account</button>
              <Link to="/Landingpage" type="submit" className='btn btn-success w-100 rounded-0'>
                    <button className="login-btn">Login</button>
                </Link>
                <button>
                    
                </button>


    </div>
      
    
  )
}

export default Signup
