import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <div id='notfound' style={{backgroundColor:"#e30d39"}}>
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>

            </div>
            <h2>sorry this page is not found</h2>
            <NavLink to="/" className='btn-back-to-home'>Back To Home</NavLink>
        </div>
    </div>
    
    
    </>
  )
}

export default ErrorPage
