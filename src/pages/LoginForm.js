import React from 'react'
import './LoginForm.css';

const loginForm = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input 
          type='email'
          placeholder='Email'
          value='' 
          required/>
        </div>
        <div className='input-box'>
          <input 
          type='password'
          placeholder='Password'
          value='' 
          required/>
        </div>

        <div className='remember-forgot'>
          <labe><input type='checkbox' />Remember Me</labe>
          <a href='#'>Forgot Password</a>
        </div>
        <button className='submit' type='submit'>Login</button>

        <div className='register-link'>
          <p>Dont have a account? <a href='#'>Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default loginForm;