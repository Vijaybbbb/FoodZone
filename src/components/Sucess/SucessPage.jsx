import React from 'react'
import './Sucess.css'
import './Sucess.js'
import { useState } from 'react'

const SucessPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleButtonClick = () => {
      setIsActive(true);
      setIsOrderPlaced(true);
      setTimeout(() => {
          setIsSuccess(true);
      }, 1000);
  };


  return (
    <div>
        <div className={`container ${isActive ? 'active' : ''}`}>
      <button className={`book-now-button ${isActive ? 'active' : ''} ${isOrderPlaced ? 'order-placed' : ''} ${isSuccess ? 'success' : ''}`} onClick={handleButtonClick}>
        <div className="pre-booking">
          <div className="icon-container">
            <div className="icon-bg"></div>
            <div className="icon">
              <div className="fork">
                <div className="fork-prongs">
                  <div className="prong prong-one"></div>
                  <div className="prong prong-two"></div>
                  <div className="prong prong-three"></div>
                </div>
                <div className="fork-head"></div>
                <div className="fork-base"></div>
              </div>
              <div className="plate-container">
                <div className="ring"></div>
                <div className="plate">
                  <div className="inner-plate"></div>
                  <span className="minute"></span>
                  <span className="hour"></span>
                  <div className="tick">
                    <div className="tick-mask"></div>
                  </div>
                </div>
              </div>
              <div className="knife">
                <div className="knife-head"></div>
                <div className="knife-body"></div>
              </div>
            </div>
          </div>
          <span className="book-now-button-text"></span>
        </div>
        <div className="post-booking">
          Order Placed
        </div>
      </button>
    </div>
    </div>
  )
}

export default SucessPage
