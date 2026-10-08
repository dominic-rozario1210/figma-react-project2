import React from 'react'
import tick from "../assets/Benefit/Subtract.png"

const PricingCard = () => {
  return (
    <div className='pricing-container'>
      <div className='pricing-heading'>
        <h1>
          Choose PlanThat’s Right For You
        </h1>
      </div>
      <p>Choose plan that works best for you, feel free to contact us</p>
      <div className='pricing-btn'>
        <p>Bill Monthly</p>
        <button>Bill Yearly</button>
      </div>
      <div className='pricing-card'>
        <div className='price-free-business'>
          <h2>Free</h2>
          <p>Have a go  and test your  superpowers</p>
          <div className='price-tag'>
            <p>$</p>
            <h1>0</h1>
          </div>
          <div className='price-details'>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>2 Users</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>2 Files</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>Public share & comments</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>Chat Support</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>New income apps</p>
            </div>
            <button className='signup-btn'>Signup for free</button>
          </div>
        </div>

        <div className='price-pro'>
          <h2>Pro</h2>
          <h4>Have a go  and test your  superpowers</h4>
          <div className='price-tag-pro'>
            <p>$</p>
            <h1>8</h1>
          </div>
          <button className='pro-save-btn'>Save $50 a year</button>
          <div className='price-details'>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>4 Users</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>All apps</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>Unlimited editable exports</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>Folders and collaboration</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>All incoming apps</p>
            </div>
            <button className='pro-btn'>Go to pro</button>
          </div>
        </div>

        <div className='price-free-business' >
          <h2>Business</h2>
          <p>Unveil new superpowers and join the Design Leaque</p>
          <div className='price-tag-business'>
            <p>$</p>
            <h1>16</h1>
          </div>
          <div className='price-details'>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>All the features of pro plan</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>Account success Manager</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>Single Sign-On (SSO)</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>Co-conception program</p>
            </div>
            <div className='price-details-user'>
              <img src={tick} alt="" />
              <p>Collaboration program</p>
            </div>
            <button className='signup-btn'>Goto Business</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default PricingCard
