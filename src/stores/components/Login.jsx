import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25"'>
        <h2>Register</h2>
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
            <button type="submit" className='btn btn-success w-100 rounded-0'>
                Register
                </button>
                <p>Already have an account</p>
                <Link to="/Landingpage" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    Login
                </Link>

        </form>

    </div>
      
    </div>
  )
}

export default Login
