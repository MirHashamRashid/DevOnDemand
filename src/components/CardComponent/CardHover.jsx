import React from 'react'
import './card.css'
import imgHeader from '../../images/UIUX.jpeg'
const CardHover = ({cardData}) => {
  return (
    <ul class="cards rounded-2xl">
    {
      cardData.map((card, index)=>(

  <li className=' drop-shadow-lg shadow-xl'>
    <a href="" class="card">
      <img src={imgHeader} class="card__image bg-cover" alt="" />
      <div class="card__overlay bg-black/20">
        <div class="card__header  text-white">
          {/* <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                      */}
          <img class="card__thumb" src={imgHeader} alt="" />
          <div class="card__header-text">
            <h3 class="card__title text-[30px] text-black/60 leading-7">{card.name}</h3>            
            <span class="card__status text-white">1 hour ago</span>
          </div>
        </div>
        <p class="card__description text-wrap text-black">{card.description}
        </p>
      </div>
    </a>      
  </li>
     ) )}
  {/* <li className=''>
    <a href="" class="card">
      <img src={imgHeader} class="card__image bg-cover" alt="" />
      <div class="card__overlay bg-black/20">
        <div class="card__header  text-white">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={imgHeader} alt="" />
          <div class="card__header-text  ">
            <h3 class="card__title text-[30px] text-black leading-7">UIUX design</h3>            
            <span class="card__status text-white">1 hour ago</span>
          </div>
        </div>
        <p class="card__description  text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li className=''>
    <a href="" class="card">
      <img src={imgHeader} class="card__image bg-cover" alt="" />
      <div class="card__overlay bg-black/20">
        <div class="card__header  text-white">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={imgHeader} alt="" />
          <div class="card__header-text  ">
            <h3 class="card__title text-[30px] text-black leading-7">UIUX design</h3>            
            <span class="card__status text-white">1 hour ago</span>
          </div>
        </div>
        <p class="card__description  text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li> */}
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          {/* <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                  */}
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">kim Cattrall</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  
  {/* <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Web Development</h3>
            <span class="card__status">3 hours ago</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>     */}
</ul>
  )
}

export default CardHover