import React from 'react'
import rating1 from "../assets/Support/Group 151.png"
import rating2 from "../assets/Support/Group 152.png"
import publish from "../assets/Support/activity 1.png"
import analytics from "../assets/Support/pie-chart 1.png"
import engage from "../assets/Support/command 1.png"


const Support = () => {
    return (
        <div className='support'>
            <div className='support-left'>
                <h2>How we support our pratner all over the world</h2>
                <p>
                    SaaS become a common delivery model for many business
                    application, including office software, messaging software,
                    payroll processing software, DBMS software, management software
                </p>
                <div className='support-rating'>
                    <div className='rating-card'>
                        <img src={rating1} alt="" />
                        <h5>4.9 / 5 rating</h5>
                        <p>databricks</p>
                    </div>
                    <div className='rating-card'>
                        <img src={rating2} alt="" />
                        <h5>4.8 / 5 rating</h5>
                        <p>Chainalysis</p>
                    </div>
                </div>

            </div>
            <div className='support-right'>
                <div className='support-right-card'>
                    <img src={publish} alt="" />
                    <div className='right-inner-card'>
                      <h3>Publishing</h3>
                      <p>
                          Plan, collaborate, and publishing
                          your contetn that drivees
                          meaningful engagement and
                          growth for your barnd
                       </p>
                    </div>
                </div>
                <div className='support-right-card'>
                    <img src={analytics} alt="" />
                    <div className='right-inner-card'>
                        <h3>Analytics</h3>
                        <p>
                            Analyze your performance
                            and create goegeous report
                        </p>
                    </div>
                </div>
                <div className='support-right-card'>
                    <img src={engage} alt="" />
                    <div className='right-inner-card'>
                        <h3>Engagement</h3>
                        <p>
                            Quiuckly navigate you
                            anda engage with your adience
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Support
