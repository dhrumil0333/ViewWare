import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './sign.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
    
    const[firstName,setfName] = useState();
    const[lastName,setlName] = useState();
    const[pass,setPassword] = useState(); 
    const[email,setEmail] = useState();
    const[phone,setPhone] = useState();

   const navigate = useNavigate();

    const { 
        register, 
        handleSubmit,
        watch, 
        formState: { errors } 
    } = useForm();
    const password = watch("password");


    const onSubmit = (data) => {  
      axios.post('http://localhost:3001/sign', data)
          .then((result) => {
              console.log("Successfully saved:", result.data);
              alert("You signed up successfully")
              navigate('/log')
          })
          .catch((err) => {
            if (err.response.status === 402) {
              alert("Email already registered! Try logging in.");
              navigate('/log')
            } else {
              alert("An error occurred. Please try again.");
            }
          });
  };

  return (
    <div>
        <div className='sign'>
          <div className="sign-left">
            <img src="https://triprindia.com/cdn/shop/files/133close1_1024x.jpg?v=1708080238" alt="" />
          </div>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div>
        <h1 className='sign-h1'>ViewWare</h1>
        <p className='sign-p'>Create Account</p>
      <input placeholder='First Name' type='text' onChange={(e) => setfName(e.target.value)} {...register("firstName",{required: {value: true, message: "This field is required"}})} /> 

      <input placeholder='Last Name' type='text' onChange={(e) => setlName(e.target.value)} {...register("lastName",{required:{value: true, message: "This field is required"}})} /> 
      <div className="error-fix">
      {errors.firstName && <p className='error'>{errors.firstName.message}</p>}
      {errors.lastName && <div className='error'>{errors.lastName.message}</div>}
      </div>
      </div>

      <div>
      <input placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} {...register("Email",{required:{value: true, message: "This field is required"}})} />
      <input placeholder='Phone Number' type='text' onChange={(e) => setPhone(e.target.value)} {...register("PhoneNo",{required:{value: true, message: "This field is required"} , minLength: {value: 10 , message: "Number must be of 10 charactor"} , maxLength: {value: 10 , message: "Number must be of 10 charactor"} ,pattern: {value: /^[0-9]+$/,message: "Phone number must be numeric" }})} /> 
      <div className="error-fix">
      {errors.Email && <div className='error'>{errors.Email.message}</div>}
      {errors.PhoneNo && <div className='error'>{errors.PhoneNo.message}</div>}
      </div>
      </div>

      <div>
      <input placeholder='PassWord' type='password' onChange={(e) => setPassword(e.target.value)}{...register("password",{required:{value: true, message: "This field is required"}, minLength: {message: "Minimum 8 charactors are required" , value: 8}})} /> 
      <input placeholder='Confirm Password' type='password' {...register("confirmPass",{required:{value: true, message: "This field is required", minLength: {message: "Minimum 8 charactors are required" , value: 8}} ,  validate: (value) => value === password || "Passwords do not match"})} /> 
      <div className="error-fix">
      {errors.password && <div className='error'>{errors.password.message}</div>}
      {errors.confirmPass && <div className='error'>{errors.confirmPass.message}</div>}
      </div>
      </div>
      <input className='sign-btn' type="submit" />
    </form>
    </div>
    </div>
  )
}

export default Sign
