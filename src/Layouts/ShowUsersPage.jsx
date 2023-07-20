import React from 'react'
import { Outlet ,Link } from 'react-router-dom' 


function ShowUsersPage() {
  return (
    <div>
        <h1>SHOW USERS</h1>
        <Outlet />

        <Link to='/'>
            Home
        </Link>

    </div>
  )
}

export default ShowUsersPage