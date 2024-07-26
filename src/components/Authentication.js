import React, { useState } from 'react'
import "./Authentication.css"
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../store/AuthSlice'


const Authentication = () => {
    const auth = useSelector((state) => state.auth) 
    const dispatch = useDispatch();
    console.log(auth)
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(email,password);
        dispatch(authAction.login(true))
        setEmail("")
        setPassword("")

    }


  return (
    <div className='form-container'>
        <form onSubmit={handleFormSubmit}>
            
            <input 
            type='email'
            id='email'
            value={email}
            placeholder='email'
            onChange={handleEmailChange}
            />
            
            <input type="password" id='password' placeholder='password' value={password} onChange={handlePasswordChange}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Authentication