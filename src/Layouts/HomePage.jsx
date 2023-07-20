import React from 'react'
import { Outlet } from 'react-router-dom' 
import  Menu from '../Menu'


function HomePage() {
  return (
    <div>
        <h1>HOME PAGE</h1>
        <Menu />
        <Outlet />
    </div>
  )
}

export default HomePage