import React, { useState } from 'react'
import './LoginForm.css';

const LoginForm = ({setIsLoggedIn}) => {

  const [data, setData] = useState({email:"", password:""});

  function changeHandler(event){
    console.log('change');
    setData((prevData) => (
      {
        ...prevData , [event.target.name]:event.target.value
      }
    
    ))
  }


  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
  }

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

export default LoginForm;