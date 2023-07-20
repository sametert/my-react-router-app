import React, {useState, useEffect} from 'react'
import './Routes.css'
import axios from 'axios'


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/users')
      .then(res => setUsers(res.data))
  } , [])

  return (
    <div className='Users'>
      {
        users.map((user) => (
          <form action="" className='cart' key={user.id}>
            <div className='fullName'>
              <div>
                  <label >Name :</label>
                  <input type="text" placeholder='name..' value={user.name.firstname}/>
              </div>
              <div>
                  <labe htmlFor="">Lastname: </labe>
                  <input type="text" placeholder='surname' value={user.name.lastname} />
              </div>
            </div>

            <div className='info'>
              <div>
                <label>Email:</label>
                <input type="email" placeholder='email' value={user.email}/>
              </div>
              <div>
                <label>Username:</label>
                <input type="text" placeholder='username' value={user.username}/>
              </div>
            </div>
        </form>
        ))
      }
    </div>
  )
}

export default Users