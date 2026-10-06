import React from 'react'
import splash from "../assets/Collabs/Group 141.png"
import notion from "../assets/Collabs/Group 142.png"
import intercom from "../assets/Collabs/Group 144.png"
import descript from "../assets/Collabs/Group 145.png"
import grammarly from "../assets/Collabs/Group 146.png"
const Collabs = () => {
  return (
    <div className='collabs'>
        <h2>More than 25,000 teams use Collabs</h2>
        <div className='collabs-img'>
            <img src={splash} alt="" />
            <img src={notion} alt="" />
            <img src={intercom} alt="" />
            <img src={descript} alt="" />
            <img src={grammarly} alt="" />
        </div>
      
    </div>
  )
}

export default Collabs
