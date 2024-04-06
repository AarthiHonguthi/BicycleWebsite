import React from 'react'
import Template from '../Components/Template'
import loginimg from '../Images/loginimg.webp'

 const Login = ({setISLoggedIn}) => {
  return (
    <Template 
     title="Welcome Back"
     desc1="Build skills for today, tomorrow, and beyond."
     desc2="Education to future-proof your career."
     image={loginimg}
     formtype="login"
     setISLoggedIn={setISLoggedIn}
    ></Template>
  )
}
export default Login