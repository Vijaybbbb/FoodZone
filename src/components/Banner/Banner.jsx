import React from 'react'
import '../Home/Home.css'
import '../Home/Script.js'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate()

  return (
    <div>
      <section className="banner" id="banner">
        <div className="content">
          <h2>Always Choose Good</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .</p>
          <a href="#" className="btn" onClick={()=>{navigate('/products')}}>Our Menu</a>
        </div>  
      </section>
      <section className="about" id="about">
        <div className="row">
          <div className="co150">
            <h2 className="titleText"><span>About Us</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <div className="co150">
            <div className="imgBx">
              <img src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="about"/>
            </div>
          </div>
        </div>
      </section>
      <section className="menu" id="menu">
        <div className="title">
          <h2 className="titleText">Our <span>M</span>enu</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="content">
          <div className="box">
            <div className="imgBx">
              <img src="https://images.pexels.com/photos/2116090/pexels-photo-2116090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="menu"/>
            </div>
            <div className="text">
              <h3>Special Salad</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src="https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="menu"/>
            </div>
            <div className="text">
              <h3>Momos</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="menu"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
