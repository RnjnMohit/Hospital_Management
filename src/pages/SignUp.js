import React from 'react'

export const SignUp = () => {
    return (
        <div className='wrapper'>
          <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <div className='input-box'>
              <input 
              name='email'
              type='email'
              placeholder='Email'
              onChange={changeHandler}
              value={data.email} 
              required/>
            </div>
            <div className='input-box'>
              <input 
              name='password'
              type='password'
              placeholder='Password'
              onChange={changeHandler}
              value={data.password} 
              required/>
            </div>
    
            <div className='remember-forgot'>
              <label><input type='checkbox' />Remember Me</label>
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
