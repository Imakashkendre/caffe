import React from 'react'
import './OurPartner.css'
import logo from '../../Assets/Images/logo1.png'

const OurPartner = () => {
  return (
    <>
      {/* main div for the content */}
      <div className="flex-div-for-partners">
        {/* width div for content */}
        <div className="width-div-for-partner">
          <div className="flex-content-div">
            {/* first div containing heatding  */}
            <div>
              <p style={{ color: '#FF8730' }}>OUR PARTNERS</p>
              <h2 className="heading-in-our-partner">They support us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem
                ipsum dolor, sit amet consectetur.sit amet consectetur
                adipisicing elit.Lorem ipsum dolor, sit amet consectetur.
              </p>
            </div>
            <div className="partners-logo">
              {/* div for partners logo first row  */}
              <div className="logo-div-for-first-row">
                <div
                  className="wid-div-for-image"
                  style={{ borderBottom: '1px solid rgb(93 90 90 / 44%)' }}
                >
                  <img src={logo} alt="" className="logo-img-styling" />
                </div>
                <div
                  className="wid-div-for-image"
                  style={{ borderBottom: '1px solid rgb(93 90 90 / 44%)' }}
                >
                  <img src={logo} alt="" className="logo-img-styling" />
                </div>
                {/* borderBottom for image  */}
                <div
                  className="wid-div-for-image-3"
                  style={{ borderBottom: '1px solid rgb(93 90 90 / 44%)' }}
                >
                  <img src={logo} alt="" className="logo-img-styling" />
                </div>
              </div>
              {/* div for partners logo second row  */}

              <div className="logo-div-for-sescond-row">
                <div className="wid-div-for-image">
                  <img src={logo} alt="" className="logo-img-styling" />
                </div>
                <div className="wid-div-for-image">
                  <img src={logo} alt="" className="logo-img-styling" />
                </div>
                <div className="wid-div-for-image-3">
                  <img src={logo} alt="" className="logo-img-styling" />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default OurPartner
