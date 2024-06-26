import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from 'react-hot-toast';
import { navigate, useNavigate } from 'react-router-dom';


export const SignupForm = ({setISLoggedIn}) => {
 const navigate = useNavigate();
 const[formData,setFormdata] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    cnfpassword:""
 })
 const [showPassword,setShowPassword]=useState(false); 
 const [showPassword1,setShowPassword1]=useState(false); 
 const[accountType,setAccountType]=useState("Student");

 function changeHandler(event){
    setFormdata( (prevData) => (
        {
            ...prevData,
            [event.target.name] : event.target.value
        }
    ))
}

function submitHandler(event){
    event.preventDefault();
    if(formData.password!= formData.cnfpassword){
        toast.error("Password do not match");
        return ;
    }
    setISLoggedIn(true);
    toast.success("Your account is created");

    const acodata= {
        ...formData
    };
    const finaldata ={
        ...acodata,accountType
    }
    console.log("your account is created...");
    console.log(finaldata);
    navigate("/dashboard");
}

  return (
    <div className='w-11/12 max-w-[450px]'>
    {/* student instructer tab */}
   
        <form onSubmit={submitHandler} className='w-[450px]'>
       {/* first and last name  */}
        <div className='flex justify-between gap-2 mt-8'>
            <label  className='w-full flex flex-col items-start relative mt-1'>
                <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2'>
                First Name<sup className='text-pink-500'>*</sup></p>
                <input 
                required
                    type='text'
                    name='firstname'
                    onChange={changeHandler}
                    placeholder='Enter First Name'
                    value={formData.firstname}
                    className='bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200'
                />
            </label>

            <label  className='w-full flex flex-col items-start relative mt-1'>
                <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2'>
                Last Name<sup className='text-pink-500'>*</sup></p>
                <input 
                required
                    type='text'
                    name='lastname'
                    onChange={changeHandler}
                    placeholder='Enter Last Name'
                    value={formData.lastname}
                    className='bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200'
                />
            </label>
            </div>
                {/* email  */}
            <label  className=' flex flex-col items-start relative mt-2'>
                <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2'>
                Email Address<sup className='text-pink-500'>*</sup></p>
                <input 
                required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    value={formData.email}
                    className='bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200'
                />
            </label>
            {/* create password  */}
            <div className=' flex justify-between gap-2'>
            <label  className='w-full flex flex-col items-start relative mt-2'>
                <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2'>
                Create Password<sup className='text-pink-500'>*</sup></p>
                <input 
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    value={formData.password}
                    className='bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200'
                />
                 <span
                 className='absolute right-3 top-[30px] cursor-pointer mt-1'
                  onClick={ () =>
         setShowPassword((prev) => !prev)}>
            {showPassword ?  (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) :
            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
            </span>
            </label>

            <label  className='w-full flex flex-col items-start relative mt-2'>
                <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2'>
                Confirm Password<sup className='text-pink-500'>*</sup></p>
                <input 
                    required
                    type={showPassword1 ? ("text") : ("password")}
                    name='cnfpassword'
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    value={formData.cnfpassword}
                    className='bg-gray-800 rounded-[0.5rem] text-gray-50 p-[12px] w-full h-10 border-b-2 border-b-blue-200'
                />

                 <span 
                  className='absolute right-3 top-[30px] cursor-pointer mt-1'
                 onClick={ () =>
         setShowPassword1((prev) => !prev)}>
            {showPassword1 ?   (<AiOutlineEye fontSize={24} fill='#AFB2BF' />): 
            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) }
            </span>
            </label>
            </div>

            <button  className='bg-yellow-500 mt-5 w-full rounded-[8px] font-medium text-gray-800 px-[10px] py-[10px] border-2 border-gray-950  hover:text-white duration-200'>
                Create Account
            </button>
        </form>



    </div>
  )
}
