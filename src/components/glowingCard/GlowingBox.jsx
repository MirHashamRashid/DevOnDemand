import React from 'react'
import './GlowingBox.css'
import img1 from '../../images/IMG.jpg'
const GlowingBox = () => {
  return (
    <div className="box-container">
        
    <div className='box'>
        <div className="cardContain">
            <div className="front">
                <img src={img1} alt="" />
            </div>
            <div className="back">
                <h2>MirHasham Rashid</h2>
                <p>software Engineer</p>
                <a href="#">Hire ME</a>
            </div>
        </div>
    </div>
    <div className='box'>
        <div className="cardContain">
            <div className="front">
                <img src={img1} alt="" />
            </div>
            <div className="back">
                <h2>MirHasham Rashid</h2>
                <p>software Engineer</p>
                <a href="#">Hire ME</a>
            </div>
        </div>
    </div>
    <div className='box'>
        <div className="cardContain">
            <div className="front">
                <img src={img1} alt="" />
            </div>
            <div className="back">
                <h2>MirHasham Rashid</h2>
                <p>software Engineer</p>
                <a href="#">Hire ME</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default GlowingBox