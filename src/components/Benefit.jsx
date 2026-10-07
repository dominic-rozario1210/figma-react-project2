import React from 'react'
import tick from "../assets/Benefit/Subtract.png"
import image from "../assets/Benefit/Rectangle 48.png"
import saving from "../assets/Benefit/Group 111.png"
import totalIncome from "../assets/Benefit/Group 112.png"
import transferMoney from "../assets/Benefit/Group 114.png"
import greenBox from "../assets/Benefit/Group 113.png"

const Benefit = () => {
  return (
    <div className='benefit'>
        <div className='benefit-left'>
            <h1>What Benefit Will You Get</h1>
            <div className='benefit-left-content'>
                <img src={tick} alt="" />
                <p>Free Consulting With Experet Saving Money</p>
            </div>
            <div className='benefit-left-content'>
                <img src={tick} alt="" />
                <p>Online Banking</p>
            </div>
            <div className='benefit-left-content'>
                <img src={tick} alt="" />
                <p>Investment Report Every Month</p>
            </div>
             <div className='benefit-left-content'>
                <img src={tick} alt="" />
                <p>Saving Money For The Future</p>
            </div>
             <div className='benefit-left-content'>
                <img src={tick} alt="" />
                <p>Online transaction</p>
            </div>
            
        </div>
        <div className='benefit-right'>
            <div className='benefit-right-image'>
               <img src={image} alt="" />
            </div>
            <div className='benefit-saving-money'>
                <img src={saving} alt="" />
            </div>
            <div className='benefit-total-income'>
                <img src={totalIncome} alt="" />
            </div>
            <div className='benefit-transfer'>
                <img src={transferMoney} alt="" />
            </div>
            <div className='benefit-green-box'>
                <img src={greenBox} alt="" />
            </div>

        </div>
      
    </div>
  )
}

export default Benefit
