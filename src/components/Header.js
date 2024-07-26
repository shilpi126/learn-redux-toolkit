import React from 'react'
import "./Header.css"
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../store/AuthSlice'

const Header = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.isAuthentication);
    console.log(auth)
  
    const handleLogout = () => {
        dispatch(authAction.logout(false))
    }

  return (
    <div className='nav-container'>
        <div className='left'><h2>ReactAuth</h2></div>
          {auth &&  
          <ul className='right'>  
            <li>User</li>
            <li>Sales</li>
          <li>
          <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>}
    </div>
  )
}

export default Header