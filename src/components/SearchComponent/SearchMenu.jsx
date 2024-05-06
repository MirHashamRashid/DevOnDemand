import React from 'react'
import Search from './Search'
const SearchMenu = () => {
  return (
    <div className='flex flex-col px-4 w-fit  border-r-4 mr-1'>

        <h2 className='mb-4 text-lg text-black'>Inbox</h2>

        <Search />
        <div className='mt-4 my-2 flex flex-col px-2  overflow-scroll'>

            <div className='flex  my-2 hover:bg-gray-100 p-4 hover:cursor-pointer   rounded-2xl'>
                <div className='text-black flex flex-col '>
                    <h3 className='text-sm lg:text-lg font-bold'>the offer is here</h3>
                    <p className='text-[10px]'>By <strong className='text-[12px]'>Rashid</strong></p>
                    <span className='text-[10px]'>2h ago</span>
                </div>
            </div>
            <div className='flex  my-2 hover:bg-gray-100 p-4 hover:cursor-pointer   rounded-2xl'>
                <div className='text-black flex flex-col '>
                    <h3 className='text-sm lg:text-lg font-bold'>the offer is here</h3>
                    <p className='text-[10px]'>By <strong className='text-[12px]'>Rashid</strong></p>
                    <span className='text-[10px]'>2h ago</span>
                </div>
            </div>
            <div className='flex justify-between my-2 hover:bg-gray-100 p-4 hover:cursor-pointer   rounded-2xl'>
                <div className='text-black flex flex-col '>
                    <h3 className='text-sm lg:text-lg font-bold'>the offer is here</h3>
                    <p className='text-[10px]'>By <strong className='text-[12px]'>Rashid</strong></p>
                    <span className='text-[10px]'>2h ago</span>
                </div>
            </div>
            <div className='flex justify-between my-2 hover:bg-gray-100 p-4 hover:cursor-pointer   rounded-2xl'>
                <div className='text-black flex flex-col '>
                    <h3 className='text-sm lg:text-lg font-bold'>the offer is here</h3>
                    <p className='text-[10px]'>By <strong className='text-[12px]'>Rashid</strong></p>
                    <span className='text-[10px]'>2h ago</span>
                </div>
            </div>
            <div className='flex justify-between my-2 hover:bg-gray-100 p-4 hover:cursor-pointer   rounded-2xl'>
                <div className='text-black flex flex-col '>
                    <h3 className='text-sm lg:text-lg font-bold'>the offer is here</h3>
                    <p className='text-[10px]'>By <strong className='text-[12px]'>Rashid</strong></p>
                    <span className='text-[10px]'>2h ago</span>
                </div>
            </div>
            <div className='flex justify-between my-2 hover:bg-gray-100 p-4 hover:cursor-pointer   rounded-2xl'>
                <div className='text-black flex flex-col '>
                    <h3 className='text-sm lg:text-lg font-bold'>the offer is here</h3>
                    <p className='text-[10px]'>By <strong className='text-[12px]'>Rashid</strong></p>
                    <span className='text-[10px]'>2h ago</span>
                </div>
            </div>
            <div className='flex justify-between my-2 hover:bg-gray-100 p-4 hover:cursor-pointer   rounded-2xl'>
                <div className='text-black flex flex-col '>
                    <h3 className='text-sm lg:text-lg font-bold'>the offer is here</h3>
                    <p className='text-[10px]'>By <strong className='text-[12px]'>Rashid</strong></p>
                    <span className='text-[10px]'>2h ago</span>
                </div>
            </div>
      
          
        </div>


    
    </div>
  )
}

export default SearchMenu