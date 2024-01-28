import React, { useState } from 'react';
import './SignUp.css';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "", // Use 'role' for the selected option
    password: "",
    department: "",
    disease: "",
  });

  function changeHandler(event) {
    const { name, value, type } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: name === "radio" ? value : value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();

    const accountData = {
        ...data
    };

    const response = await fetch("http://localhost:4000/hospital/signup", {
        method:"POST",
        headers:{
            'Content-Type':"application/json",
        },

        body:JSON.stringify({
            name:data.name,
            email:data.email,
            phone:data.phone,
            password:data.password,
            role: data.role,
            department: data.department,
            disease:data.disease,
        })
    });

    if(response.status === 400){
        toast.error('Ivalid Role');
        return;
    }

    const json = await response.json();
    console.log(accountData.role);
    toast.success('Account Created');
    console.log('submission', accountData);
    // Perform your form submission logic here
  }

  return (
    <div className='wrapper'>
      <form onSubmit={submitHandler}>
        <h1>Signup</h1>
        <div className='input-box'>
          <input
            name='name'
            type='text'
            placeholder='Name'
            onChange={changeHandler}
            value={data.name}
            required
          />
        </div>
        <div className='input-box'>
          <input
            name='email'
            type='email'
            placeholder='Email'
            onChange={changeHandler}
            value={data.email}
            required
          />
        </div>
        <div className='input-box'>
          <input
            name='phone'
            type='number'
            placeholder='Phone'
            onChange={changeHandler}
            value={data.phone}
            required
          />
        </div>
        <div className='input-box'>
          <input
            name='password'
            type='password'
            placeholder='Password'
            onChange={changeHandler}
            value={data.password}
            required
          />
        </div>
        <div className='isDoc'>
          <label id='isDoctor'>
            <input
              name='role'
              type='radio'
              value='doctor'
              onChange={changeHandler}
              checked={data.role === 'doctor'}
            />
            doctor
          </label>
          <label id='isPatient'>
            <input
              name='role'
              type='radio'
              value='patient'
              onChange={changeHandler}
              checked={data.role === 'patient'}
            />
            patient
          </label>
        </div>
        <div className='input-box'>
          {data.role === 'doctor' ? (
            <input
              name='department'
              type='text'
              placeholder='Select Department'
              onChange={changeHandler}
              value={data.department}
            />
          ) : (
            <input
              name='disease'
              type='text'
              placeholder='Enter Disease Name'
              onChange={changeHandler}
              value={data.disease}
            />
          )}
        </div>
        <div className='remember-forgot'>
          <label>
            <input
              name='rememberMe'
              type='checkbox'
              onChange={changeHandler}
              checked={data.rememberMe}
            />
            Remember Me
          </label>
          <a href='#'>Forgot Password</a>
        </div>
        <button className='submit' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
