import React from 'react'
import image1 from "../assets/Hero/Vector 32.jpg"
import play from "../assets/Hero/circle-play-regular-full.svg"
import image2 from "../assets/Hero/Frame 46.png"
import barChart from "../assets/Hero/bar-chart-2 1.png"
import credit from "..//assets/Hero/Frame 45.png"
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h1>
            We’re here to Increase your Productivity
        </h1>
        <img src={image1} alt="" />
        <p>
            Let's make your work more organize and easily
            using the Taskio Dashboard with many of the latest
            featuresin managing work every day.
        </p>
        <div className='hero-btn'>
            <button>Try Free Trial</button>
            <div className='btn-demo'>
                <img src={play} alt="" />
                <p>View Demo</p>
            </div>
        </div>

      </div>
      <div className='hero-right'>
        <div className='hero-image'>
            <img src={image2} alt="" />

        </div>
        <div className='send-card'>
          <div>
            <span>Enter Amount</span>
            <p>$450.00</p>
          </div>
          <button>Send</button>

        </div>
        <div className='income-card'>
           <span>Total Income</span>
           <div className='income-card-price'>
             <p>$245.00</p>
             <img src={barChart} alt="" />
            </div>
        </div>
        <div className='credit-card'>
          <img src={credit} alt="" />
        </div>
        <div className='purple-icon'>
           ✓
        </div>
        <div className='orange-icon'>
          <i class="fa-regular fa-message"></i>
        </div>
        <div className='yellow-icon'>
            ▤
        </div>

      </div>
    </div>
  )
}

export default Hero
