import React from 'react'
import '../ProductsPage/ProductPage.css'

const UserNavbar = () => {
  return (
    <div>
      <div className="navcontainer">
        <div className="navbar">
          <div className="logo">
           <h1>FOOD ZONE</h1>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a href="index.html">Home</a></li>
              <li><a href="product.html">Products</a></li>
              <li><a href="#">My Orders</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="account.html">Account</a></li>
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
