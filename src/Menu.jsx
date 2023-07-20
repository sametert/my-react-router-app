import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

function Menu() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/' className='link'>Home</Link>
            <Link to='show' className='link'>Users</Link>
            <Link to='features' className='link'>Features</Link>
        </div>
       
    </div>
  )
}

export default Menu