import React from 'react'
import './cardNew.css'
import logo from '../../images/servicesRaw.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
const CardNew = ({cards}) => {
  return (
    <ul class="cards">
    
    {
        cards.map((card, index) => (
          
          <motion.li
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          key={index}>
            <a href="" class="card">
              <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                  {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                  <div className="card__header-text">
                    <h3 className="card__title ">{card.name}</h3>            
                    {/* <span className="card__status">1 hour ago</span> */}
                  </div>
                </div>
                <p className="card__description">{card.description}</p>
              </div>
            </a>      
          </motion.li>
        ))
    }

    
</ul>
  )
}

export default CardNew