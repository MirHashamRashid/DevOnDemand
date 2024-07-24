import React from 'react'
import {BiHomeAlt, BiUser} from 'react-icons/bi'; 
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'; 
//Links
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='fixed bottom-2 z-20 lg:bottom-4 w-full'>
        <div className='container mx-auto'>
        <div className='bg-black/10 dark:white/10 rounded-full flex justify-between items-center  h-[96px] max-w-[460px] mx-auto  px-5 text-2xl text-black dark:text-white backdrop-blur-'>
        <Link to='home' activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className=' w-[60px] h-[60px] flex items-center justify-center '>
        <BiHomeAlt className='hover:text-white cursor-pointer' />
        </Link>

        <Link to='about' activeClass='active'
        smooth={true}
        spy={true}
        className=' w-[60px] h-[60px] flex items-center justify-center '>
        <BiUser className='hover:text-white cursor-pointer' />
        </Link>

        <Link to='services' activeClass='active'
        smooth={true}
        spy={true}
        className=' w-[60px] h-[60px] flex items-center justify-center '>
        <BsClipboardData className='hover:text-white cursor-pointer' />
        </Link>

        <Link to='contact' activeClass='active'
        smooth={true}
        spy={true}
        className=' w-[60px] h-[60px] flex items-center justify-center '>
        <BsChatSquare className='hover:text-white cursor-pointer' />
        </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar