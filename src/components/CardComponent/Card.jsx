import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import img1 from '../../images/servicesRaw.jpg'
const Card = ({CardsList}) => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-5 lg:gap-10">
    {CardsList.map((Card, index) => (
      <motion.div
        key={index}
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="shadow-xl holder flex flex-col gap-0 overflow-hidden w-full sm:w-[320px] md:w-[380px] lg:w-[30%] relative rounded-[1rem] border-white/50 bg-black/5 hover:bg-black/30 text-black/50 dark:hover:bg-transparent "
      >
        


        <img className="w-full h-60 mix-blend-darken" src={img1} alt="" />
        <div className="flex mx-auto items-center justify-center flex-col flex-wrap w-full sm:w-60 ">
          <h2 className="h2 text-[24px] text-center break-words">
            {Card.name}
          </h2>
          <p className="text-left">{Card.description}</p>
          <div className="flex items-center gap-x-3 my-4 justify-between">
          <button className="btn btn-sm">GitHub</button>
          <button className="btn-link hover:rounded-lg text-white hover:bg-white/20 btn-sm">Live Demo</button>

          </div>
        </div>

      </motion.div>
    ))}
   
  </div>
//   <div className="shadow-xl flex flex-col rounded-tr-none gap-0 overflow-hidden w-full sm:w-[320px] md:w-[380px] lg:w-[30%] rounded-[4rem] p-6  bg-black/5 transition-all duration-200 hover:bg-black/30 text-black/50 dark:hover:bg-transparent relative">
//      {/* top container */}
//     <div className="flex justify-between items-center">
//       {/* top left container */}
//       <div className="flex items-center gap-x-6">
//         <img className="w-14 rounded-full" src={img1} alt="" />
//         <div className=" flex justify-center flex-col">
//           <h2 className=" text-[24px]">Software Development</h2>
//         </div>
//       </div>
//       {/* right container container */}
//       <div className="flex items-center justify-center z-20">
//       <a className=' text-lg text-white rounded-full w-16 h-16 flex justify-center items-center   transition-all duration-500 hover:bg-transparent' href='#'>
//               <BsArrowUpRight/>
//               </a>
      
//       </div>
//       {/* black section */}
//       <div className="absolute z-10 right-0 top-0  clip-path-custom w-[150px] h-[100px] bg-black/20">

//       </div>
//     </div>
//       {/* main content area */}
//       <div className="mx-2 mt-10 text-left">
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ea consequatur, repudiandae facilis enim adipisci sint commodi dolores totam facere est vitae. Doloremque nihil provident reiciendis, nesciunt mollitia ipsum rerum.</p>
//       </div>
//     {/* status */}
//     <div className="flex flex-col">
//       <hr />
//       <span>Status:</span>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center">
//          <GoDotFill className="text-green-600 text-sm mr-1"/>
//          <span>Availible</span>
//        </div>
//        <a className=' text-lg text-white rounded-full w-16 h-16 flex justify-center items-center hover:bg-transparent hover:text-black hover:border transition-all duration-500' href='#'>
//               <BsEnvelope/>
//               </a>
//       </div>
//     </div>
//     </div>
  )
}

export default Card