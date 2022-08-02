import React from 'react'
import './Offers.css'

const Offers = () => {
  return (
    <>
      <div className="flex-div-for-offers">
        <div className="width-div-for-offers">
          <div className="flex-div-for-cards">
            <div className="div-for-singlecard">
              <img
                src="https://images.unsplash.com/photo-1611691934391-5a8805e0bd1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
              <div className="text-on-offer-cards">
                <h3 className="heading-on-card">
                  Discount 30% for <br /> civet coffee{' '}
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi, ut?
                </p>
                <button className="btn-on-card">Buy Now</button>
              </div>
            </div>
            <div className="div-for-singlecard">
              <img
                className="img-in-cards"
                src="https://images.unsplash.com/photo-1623859763838-a304cbfd4901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
              <div className="text-on-offer-cards-2">
                <h3 className="heading-on-card">
                  Caffe' Americano <br /> Only $2{' '}
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi, ut?
                </p>
                <button className="btn-on-card">Buy Now</button>
              </div>
            </div>
            <div className="div-for-singlecard">
              <img
                src="https://images.unsplash.com/photo-1623859763838-a304cbfd4901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
              <div className="text-on-offer-cards-3">
                <h3 className="heading-on-card">
                  Buy 1 Get 1 Free For <br /> Latte coffee{' '}
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi, ut?
                </p>
                <button className="btn-on-card">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offers
