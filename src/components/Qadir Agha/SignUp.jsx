import React from 'react'
import { images,Logo } from '../../assets'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='flex bg-slate-100 justify-between h-screen  items-center pt-2'>

        <div className='  justify-center hidden lg:flex p-4 rounded h-screen overflow-hidden my-4 '>
            <img src={images.Building} className='rounded-lg bg-cover w-[850px] overflow-hidden' alt="" />
        </div>
        <div className=' flex  mx-auto flex-col'>
            <div className='flex mx-auto items-center mb-6'>
                <img src={Logo.Elips} alt="" className='' />
                <div className='border-2 bg-primary-black text-primary-black h-10 mx-2'></div>
                <p className='text-black text-3xl uppercase'>Way Leg</p>

            </div>
            <div className='flex flex-col mx-auto bg-slate-50 px-8 py-10 rounded-2xl drop-shadow-xl  justify-center '>
                <h2 className='text-black'>Acceso</h2>
                <hr className='h-1 w-20  bg-slate-100 mb-4'/> 
                <form className='flex flex-col' action="">
                    <input className='bg-transparent mb-2 border p-2 w-[300px] lg:w-[450px] lg:p-4 text-left text-black rounded-lg' type="email"  placeholder='email ' />
                    <input className='bg-transparent mb-2 border p-2 w-[300px] lg:w-[450px] lg:p-4 text-black rounded-lg' type="password" placeholder='password' />
                    <div className='flex w-full  text-center my-3 justify-center items-center'>
                        <hr className=' h-1 w-full  bg-slate-100'/>
                        <p className=' text-black text-nowrap '>Forgot your password?</p>
                        <hr className=' h-1 w-full  bg-slate-100'/>
                    </div>
                    <button type='submit' className='bg-black my-4'>Login</button>
                    <div className='flex w-full items-center justify-center'>
                    <p className='text center justify-self-center text-slate-600 text-lg'> New user? <Link to={'/register'} target="_blank" rel="noopener noreferrer">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp