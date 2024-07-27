import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import SubmitButton from './submitButton/SubmitButton'
import contact from '../images/contact-banner.svg'
const ContactUs = () => {
  return (
    <section className='py-0 md:py-12 lg:section '  id='contact'>
        <div className="container mx-auto">
          <div className='flex  flex-col justify-center'>

               {/* text */}
              <motion.div 
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount:0.3}}
              className='flex flex-col items-center mb-4'>
              <h4 className='text-2xl uppercase  font-medium mb-1 tracking-wide'>Get In Touch</h4>
              <h2 className='text-[45px] lg:text-[70px] leading-none mb-1'>let's work <br/> together</h2>
              </motion.div>
          {/* Contact form here */}
          <div className='flex rounded-3xl shadow-m bg-black/5 p-4 gap-x-3 shadow-2xl'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 hidden md:flex   bg-no-repeat justify-center lg:justify-start items-center'>
          <img src={contact} className='h-full bg-no-repeat pointer-events-none' alt="" />
          </motion.div> 
          <motion.form 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1  rounded-2xl  flex flex-col gap-y-3 md:gap-y-6 pb-24 md:p-6 items-start'>
            <input className='bg-transparent border placeholder:text-white shadow-lg rounded-3xl p-3 outline-none w-full  text-black dark:text-white font-bold placeholder:font-normal focus:border-black/20 transition-all duration-500 focus:shadow-xl' placeholder='your name here' type='text'/>

            <input required className='bg-transparent rounded-3xl border placeholder:text-white shadow-lg p-3 outline-none w-full  text-black font-bold placeholder:font-normal dark:text-white focus:border-black/20 transition-all duration-500 focus:shadow-xl' placeholder='your email here' type='email'/>

            <textarea className='bg-transparent border placeholder:text-white shadow-lg px-3 rounded-3xl py-10 outline-none w-full text-black dark:text-white font-bold placeholder:font-normal focus:border-black/20 transition-all duration-500 resize-none mb-12 focus:shadow-xl' spellCheck placeholder='your message'></textarea>

            {/* <button type='submit' className='btn btn-lg  '>send message</button> */}
            <SubmitButton />
          </motion.form>

          </div>

          </div>
        </div>
    </section>

    
  )
}

export default ContactUs