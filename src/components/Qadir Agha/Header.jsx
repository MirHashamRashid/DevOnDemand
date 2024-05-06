import React, {useState} from 'react'
import { Logo } from '../../assets'
import { TiArrowSortedDown } from "react-icons/ti";
import { CiMenuBurger } from 'react-icons/ci';
const Header = ({menuHandler}) => {
    const [isOpen, setIsOpen] = useState(null)
  return (
    <div className='flex justify-between bg-white w-full  px-6 '>
       <div className='flex items-center justify-content'>
                <CiMenuBurger onClick={menuHandler} className='text-black cursor-pointer text-xl md:hidden'/>
                <img src={Logo.Elips} alt="" className='ml-4' />
                <div className='border-2 bg-primary-black text-primary-black h-10 mx-2'></div>
                <p className='text-black text-3xl uppercase'>Way Leg</p>
            </div>

        <div className='flex items-center text-center'>
           <div className='text-black md:flex-col mx-4 hidden md:flex'>
            <p>Hello,</p>
            <strong>Jasmin</strong>
           </div>
           <img className='w-10 rounded-full mx-4' src={Logo.Elips} alt="" />
            <TiArrowSortedDown onClick={()=>{setIsOpen(!isOpen)}} className='text-black text-2xl cursor-pointer ' />
            <div className={`${isOpen ? 'flex ' : 'hidden'} flex-col absolute top-20 right-4 w-20 rounded bg-white text-black pt-2`}>
                <p className='border'>hello</p>
                <p className='border'>hello</p>
                <p className='border'>hello</p>
                
            </div>
        </div>    
    </div>
  )
}

export default Header