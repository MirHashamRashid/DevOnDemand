import React from 'react'
import { IoSettingsSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
const SideBar = ({isOpen}) => {
  const linkActive = 'bg-black 2xl';
  const linkNoneActive = 'bg-black text-black rounded-2xl my-2 cursor-pointer hover:text-white items-center flex justify-center'
  return (
    <div className='flex justify-center' >
    <div className=' h-full hidden md:flex'> 
    

    <ul className={` ml-4 md:flex-col  hidden md:flex h-full items-center  rounded-2xl w-28 py-6 bg-slate-100 `}>
          {/* <NavLink className={({isActive})=>{ `${isActive ? 'bg-black' : 'bg-white'}`  }} to={'/inbox'} activeClassName='bg-black'> */}
        <li className='hover:bg-black text-black  rounded-2xl my-2 cursor-pointer hover:text-white w-16 h-10 items-center flex justify-center'>
          
        <IoSettingsSharp className='  text-xl'/>
        </li>
          {/* </NavLink> */}
          <NavLink to={'/contacts'}  className={({isActive}) =>`${isActive ? {linkActive} : 'bg-transaparent'} hover:bg-black text-black rounded-2xl my-2 cursor-pointer hover:text-white w-16 h-10 items-center flex justify-center` }>

        <li className=''>
        <IoSettingsSharp className='  text-xl'/>
        </li>
          </NavLink>
        <li className='hover:bg-black text-black rounded-2xl my-2 cursor-pointer hover:text-white w-16 h-10 items-center flex justify-center'>
        <IoSettingsSharp className='  text-xl'/>
        </li>
    </ul>
</div>
    </div>
  ) 
}

export default SideBar