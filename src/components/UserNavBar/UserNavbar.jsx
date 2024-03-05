import React from 'react'
import '../ProductsPage/ProductPage.css'
import { useNavigate } from 'react-router-dom'

const UserNavbar = () => {

       const navigate = useNavigate()

  return (
    <div>
      <div className="navcontainer">
        <div className="navbar">
          <div className="logo">
           <h1>FOOD ZONE</h1>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a href="" onClick={()=>{navigate('/home')}}>Home</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">My Orders</a></li>
              <li><a href="">Wishlist</a></li>
              <li><a href="">Account</a></li>
            </ul>
          </nav>
          <a href="cart.html"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt="" width="30px" height="30px" /></a>
          <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" className="menu-icon" />
        </div>
      </div>
    </div>
  )
}

export default UserNavbar
