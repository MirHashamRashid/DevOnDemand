import React from 'react';
import './TeamCard.css'
import Main from '../../images/Mir.png'
import { FaFacebook, FaGithub } from 'react-icons/fa6';
const TeamCard = ({TeamMembers}) => {
  return (
    <div className="flex flex-col md:flex-row py-4 gap-4 w-full flex-wrap ">
        {
          TeamMembers.map((team,index) => {
            return(
              <article className='flex nft  flex-col max-w-[300px]  bg-black/20 p-4 rounded-xl mx-auto' >
              <img src={Main} className='rounded-2xl' alt="" />
              <div className='flex flex-col '>
              <h2 className='h2 mb-0 text-xl mt-4'>{team.name}</h2>
              <span className='text-gray-300'>{team.Job}</span>
              </div>
              <p className='text-gray-300 text-left my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. .</p>
              <hr className='w-full my-4  text-white'/>
              <div className='flex mx-auto gap-4'>
                <a href="http://">
                <FaGithub className='w-8 h-8 hover:text-black cursor-pointer'/>
                </a>
                <a href="http://">
                <FaFacebook className='w-8 h-8 hover:text-blue-600 cursor-pointer'/>
                </a>
              </div>
              </article>
            )
          })
        }
      
    
        
    </div>
  );
};

export default TeamCard;
