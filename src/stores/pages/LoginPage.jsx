import React from 'react'
import {Link} from "react-router-dom"
const LoginPage = () => {
  return (
    <div className='child-firm'>
        <h2>Login</h2>
        <form>
            
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
           
               <Link to="/signup"> <p>Doesn't Have a account?</p></Link>
              <Link to="/Landingpage" type="submit" className='btn btn-success w-100 rounded-0'>
                    <button className="login-btn">Login</button>
                </Link>

        </form>

    </div>
      
    
  )
}

export default LoginPage
