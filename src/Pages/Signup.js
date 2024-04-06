import React from 'react'
import Template from '../Components/Template'
import signupimg from '../Images/signupimg.webp'

 const Signup = ({setISLoggedIn}) => {
  return (
    <Template 
    title="Join the cycling community with BicycleHub"
    desc1="Discover, ride, and connect with fellow enthusiasts for an unforgettable biking experience."
    // desc2="Education to future-proof your career."
    image={signupimg}
    formtype="signup"
    setISLoggedIn={setISLoggedIn}
   ></Template>
  )
}
export default Signup