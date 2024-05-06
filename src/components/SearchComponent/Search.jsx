import React from 'react'
import { BiSearch } from 'react-icons/bi'
const Search = () => {
  return (
    <div className='flex border items-center py-4 px-2  text-black rounded-md '>
        <BiSearch  className='text-2xl '/>
        <form action="" className='w-full'>
            <input type="text" placeholder='Search' className='outline-none bg-transparent w-full  ml-1' />
        </form>
    </div>
  )
}

export default Search