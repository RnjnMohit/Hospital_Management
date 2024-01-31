import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <nav className='navbar-items'>
            <ul>
                <li><a><i className='fa-solid fa-house-user'></i>Home</a></li>
                <li><a><i className='fa-solid fa-briefcase'></i>Appointment</a></li>
                <li><a><i className='fa-solid fa-circle-info'></i>Service</a></li>
                <li><a><i className='fa-solid fa-circle-info'></i>Timings</a></li>
                <li><a><i className='fa-solid fa-circle-info'></i>Doctors</a></li>
                <Link to='/login'><button>Log In</button></Link>
                <Link to='/signup'><button>Sign Up</button></Link>
            </ul>
        </nav>
    </div>
  )
}
