import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link , useNavigate} from 'react-router-dom';
import {toast} from 'react-hot-toast'

export const LoginForm = ({setISLoggedIn}) => {
const [formData, setFormdata]=useState({
    email:"",password:""
});
 const navigate =useNavigate();
const [showPassword,setShowPassword]=useState(false);

function changeHandler(event){
    setFormdata( (prevData) => (
        {
            ...prevData,
            [event.target.name] : event.target.value
        }
    ))
}

function submitHandler(event) {
    event.preventDefault();
    setISLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
}

  return (
   <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 items-start '>
       <label className='w-full flex flex-col items-start'>
       
          <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-0'> 
          Email Address <sup className='text-pink-500'>*</sup></p>

        <input 
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id..'
            name='email'
            className='bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200'
        />
       </label>
       <label className='w-full flex flex-col items-start relative'>
          <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-0'>
          Password <sup className='text-pink-500'>*</sup></p>

        <input 
            required
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name='password'
            className='bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200'
        />
         <span 
         className='absolute right-3 top-[30px] cursor-pointer mt-1'
         onClick={ () =>
         setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>): 
            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) }
            </span>

        <Link to="#">
            <p className='text-xs mt-1 text-blue-100 ml-[360px] hover:text-blue-400'>
                Forgot Password
            </p>
        </Link>
       </label>

       <button className='bg-yellow-500 w-full rounded-[8px] font-medium text-gray-800 px-[10px] py-[10px] border-2 border-gray-950  hover:text-white duration-200'>
         Sign In
       </button>
   </form>
  )
}
