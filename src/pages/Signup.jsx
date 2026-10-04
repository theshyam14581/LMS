import React from 'react'
import "./Signup.css"
const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup-container'>

        <form action="/signup" className='signup-form'>
        <label htmlFor="username" className='label-tag'>Username:</label>
          <input type="text" id="username" className='input-field' placeholder='Enter your username' />
          <br />

          <label htmlFor="name" className='label-tag'>Name:</label>
          <input type="text" id="name" className='input-field' placeholder='Enter your name' />
          <br />
          <label htmlFor="email" className='label-tag'>Email:</label>
          <input type="email" id="email" className='input-field' placeholder='Enter your email' />
          <br />
          <label htmlFor="password" className='label-tag'>Password:</label>
          <input type="password" id="password" className='input-field' placeholder='Enter your password' />
          <br />
          <label htmlFor="confirmPassword" className='label-tag'>Confirm Password:</label>
          <input type="password" id="confirmPassword" className='input-field' placeholder='Confirm your password' />
          <br />
          <button type="submit" className='sign-btn'>Sign Up</button>




        </form>

      </div>
    </div>
  )
}

export default Signup
