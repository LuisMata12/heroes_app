import React from 'react'
import { useNavigate } from "react-router-dom";

export const Login = () => {
    
  const navegate = useNavigate();
  const onLogin =()=>{
    navegate('/',{
        replace:true,
    })
  }
  return (
    <div className='container'>
        <h1>Login</h1>
        <hr />
        <button 
        className='btn btn-primary'
        onClick={onLogin}>
        login
        </button>
    </div>
  )
}
