import React from 'react'
import backimg from '../Images/backimg.jpg';
import {SignupForm } from './SignupForm';
import {LoginForm } from './LoginForm';
import { FcGoogle } from "react-icons/fc";

 const Template = ({title,desc1,desc2,image,formtype,setISLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

        <div className='flex flex-col ml-0 items-start w-11/12 max-w-[450px]'>
            <h1 className='text-gray-50 font-semibold text-[1.875rem] leading-[2.375rem] font-serif '>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4 flex flex-col items-start'>
                <span className='text-gray-100'>{desc1}</span>
                
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {
                formtype==="signup" ? 
                (<SignupForm setISLoggedIn={setISLoggedIn}/>) : 
                (<LoginForm setISLoggedIn={setISLoggedIn}/>)
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-gray-700'></div>
                    <p className='text-gray-700 font-medium leading-[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-gray-700'></div>
            </div>

            <button className=' w-full flex justify-center items-center 
            rounded-[8px] font-medium text-gray-100 border
             border-gray-700 px-[12px] py-[8px] gap-x-2 mt-4 hover:bg-gray-900 transition-all duration-100 '>
            <FcGoogle />
            <p>Sign Up with Google</p>
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px] '>
             <img src={backimg} alt='Pattern' width={558} 
                 height={499} loading='lazy' className='h-[300px]' />
{
                formtype==="signup" ? 
                (<img src="https://wallpapers.net/mountain-bike-wallpaper-for-desktop-mobiles/download/1920x1200.jpg" alt='Student' width={558} 
                 height={499} loading='lazy' className='absolute -top-1 right-4'/>) : 
                (<img src="https://c1.wallpaperflare.com/preview/134/271/586/people-adventure-bicycle-bicycles.jpg" alt='Student' width={558} 
                 height={499} loading='lazy' className='absolute -top-4 right-4'/>)
            }
            
        </div>
    </div>
  )
}
export default Template