import React from 'react'
import Icon from '../assets/brandmark.png'
import Button from './button/Button'

const ForgotPassword = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-secondary-dark-gray'>
    <div className=' flex justify-items-center w-full mx-1  flex-col items-center  lg:w-[600px] sm:mx-20 md:mx-20  '>
     <h1 className='text-[#203A45] uppercase text-2xl xs:text-2xl sm:text-center sm:text-4xl' >forgot password</h1>
     <p className='text-[#333333] text-center'>Please enter your email address to reset your password</p>
    <div className='flex flex-col w-full items-center justify-center my-4 rounded-lg px-12  bg-white py-10 drop-shadow-2xl' >
         <img className='w-20' src={Icon} alt="" />
    <form className='w-full items-center justify-center flex flex-col' onSubmit={()=>{}}>
     <div className='flex flex-col justify-start py-4 w-full '>
             <label htmlFor="email" className='text-black'>Email</label>
             <input className='text-left w-full bg-transparent border-2 mb-2  h-10 rounded-lg p-2  transition te
             xt-black'  type="email" name='email' placeholder='123@gmail.com' />
     </div>
     {/* <button className='cursor-point bg-primary-red hover:bg-primary-black transition active:tw-bg-gray-900 focus:tw-outline-none focus:tw-border-gray-900 focus:tw-ring focus:tw-ring-gray-300'>Reset password</button> */}
     <Button
        color="primary" // Choose a color variant: primary, secondary, error, success, info
        variant="filled" // Choose a variant: filled, ghost, default, outline
        disabled={false} // Set to true if you want the button to be disabled
        onClick={()=>{}} // Attach a click event handler
        ariaLabel="Reset Password" // Optional aria-label for accessibility
      >
        Reset password
      </Button>
      </form>
    </div>
    </div>
 </div>
  )
}

export default ForgotPassword