import React from 'react'
import Icon from '../assets/images/brandmark.png'
import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-secondary-dark-gray'>
       <div className=' flex justify-items-center w-full mx-1  flex-col items-center  lg:w-[600px] sm:mx-20 md:mx-20  '>
        <h1 className=' text-[#203A45]  ' >Login</h1>
        <p className='text-[#333333]'>Sign in to your account</p>
       <div className='flex flex-col w-full items-center justify-center my-4 rounded-lg px-12  bg-white py-10 drop-shadow-2xl' >
            <img className='w-20' src={Icon} alt="" />

        <form onSubmit={()=>{}} className='w-full items-center justify-center flex flex-col'>
        <div className='flex flex-col justify-start py-4 w-full '>
        
                <label htmlFor="email" className='text-black'>Email</label>
                <input className='text-left w-full bg-transparent border-2 mb-2  h-10 rounded-lg p-2  transition te
                xt-black'  type="email" name='email' placeholder='123@gmail.com' />
                <label htmlFor="password" className='text-black '>Password</label>
                <input className='text-left bg-transparent border-2 h-10 rounded-lg p-2 focuse:ring transition text-black' type="password" name='password' placeholder='password' />
               <Link to={'/forgotPassword'}> <span className='text-red-400 text-xs/[10px]'>Forgot your password?</span></Link>
        
       <label htmlFor='login ' className='my-4 flex items-center ' >
        <input className=' bg-red-500' type="checkbox" name="login" id="" />
        <span className='text-black text-x px-1 '>Remember me next time</span>    
       </label>
        </div>
        {/* <button className='cursor-point hover:bg-primary-black transition active:tw-bg-gray-900 focus:tw-outline-none focus:tw-border-gray-900 focus:tw-ring focus:tw-ring-gray-300'>Sign In</button> */}
        <Button
        color="primary" // Choose a color variant: primary, secondary, error, success, info
        variant="filled" // Choose a variant: filled, ghost, default, outline
        disabled={false} // Set to true if you want the button to be disabled
        onClick={()=>{}} // Attach a click event handler
        ariaLabel="Reset Password" // Optional aria-label for accessibility
      >
        Login
      </Button>
      </form>
       </div>
       </div>
    </div>
  )
}

export default Login