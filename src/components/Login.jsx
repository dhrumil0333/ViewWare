import React from 'react'
import './login.css'
import { set, useForm } from "react-hook-form";
import { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LogContext } from '../context/LogContext';

const Login = () => {
      const[pass,setPassword] = useState(); 
      const[email,setEmail] = useState(); 
      const { profile, setProfile } = useContext(LogContext);
      const navigate = useNavigate();
      const { logEmail, setlogEmail } = useContext(LogContext);
      

    const { 
      register, 
      handleSubmit,
      watch, 
      formState: { errors } 
    } = useForm();

        const onSubmit = (data) => {  
          axios.post('http://localhost:3001/log', data)
              .then((result) => {
                if(result.data === "Success"){
                  console.log("Successfully saved:", result.data);
                      alert("You logged in successfully")
                      navigate('/')
                      setProfile("user")
                      setlogEmail(data.Email)
                  }
                else{
                  alert("Invalid Email or Password")
                }
              })
      };
    

  return (
    
    <div>
      <div className="log-login">
        <div className="login-left">
          <img src="https://www.bringitonline.in/uploads/2/2/4/5/22456530/male-model-photography-in-delhi-bring-it-online_orig.jpeg" alt="" />
        </div>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="login-text">
          <h1 className='sign-h1'>ViewWare</h1>
          <p className='sign-p'>Login Your Account</p>
          </div>
          <div className='log-right'>
          <input placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} {...register("Email",{required:{value: true, message: "This field is required"}})} />
          {errors.Email && <div className='error'>{errors.Email.message}</div>}
          <input placeholder='PassWord' type='password' {...register("password",{required:{value: true, message: "This field is required"}, minLength: {message: "Minimum 8 charactors are required" , value: 8}})} /> 
          {errors.password && <div className='error'>{errors.password.message}</div>}
          <input className='login-btn' type="submit" />
          <button className='login-btn register-now' onClick={()=>{navigate('/sign')}}>Register Now</button>
          </div>
        </form>
      </div>
    </div>
 
    
  )
}

export default Login
