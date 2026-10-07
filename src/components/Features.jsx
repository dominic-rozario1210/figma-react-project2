import React from 'react'
import collabration from "../assets/Features/Frame 247.png"
import cloud from "../assets/Features/Frame 53.png"
import analysis from "../assets/Features/Frame 54.png"

const Features = () => {
  return (
    <div className='features'>
        <div className='features-heading'>
            <h2>Our Features you cab get</h2>
            <p>
                We offer a variety of interesting features
                that you can help increase yor productivity 
                at work and manage your projrct esaly
            </p>
            <button>Get Started</button>

        </div>
        <div className='features-content'>
            <div className='content-card'>
                <img src={collabration} alt="" />
                <h4>Collboration Teams </h4>
                <p>
                    Here you can handle projects 
                    together with team virtually
                </p>
            </div>
             <div className='content-card'>
                <img src={cloud} alt="" />
                <h4>Cloud Storage </h4>
                <p>
                    No nedd to worry about storage because 
                    we provide storage up to 2 TB
                </p>
            </div>
             <div className='content-card'>
                <img src={analysis} alt="" />
                <h4>Daily Analytics </h4>
                <p>
                   We always provide useful informatin to 
                   make it easier for you every day
                </p>
            </div>

        </div>
      
    </div>
  )
}

export default Features
