import React from 'react'
import { NavLink } from 'react-router-dom';
import { navConfig } from '../navbarConfig';
import {PATH_DASHBOARD} from '../../../routes/paths'
import Icon from '../../../assets/react.svg'
const Sidebar = () => {
  return (
        <div className={`transition-all duration-300 ease-in-out w-full  bg-primary-red text-white  justify-center flex flex-col`}>
            <div className='flex flex-col items-center w-full'>
                <img src={Icon} alt="" />
            </div>
            
        </div>
    );
}
export default Sidebar