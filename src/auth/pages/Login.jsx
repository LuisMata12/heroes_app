import React from 'react'
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

export const Login = () => {
  
  const {login} = useContext(AuthContext);
  const navegate = useNavigate();
  const onLogin =()=>{
    login('Luis')
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
