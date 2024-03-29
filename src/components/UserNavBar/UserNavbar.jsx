import React from 'react'
import './UserNavBar.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'


const UserNavbar = () => {

       const navigate = useNavigate()
       const data = useSelector(state=> state.userData)

  return (
    <div>
      {data?.email ? (
      <div className="navcontainer">
        <div className="navbar">
          <div className="logo">
           <img src={logo} className='logo' alt="" />
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a href="" onClick={()=>{navigate('/home')}}>Home</a></li>
              <li><a href="" onClick={()=>{navigate('/products')}}>Products</a></li>
              <li><a href="" onClick={()=>{navigate('/myorders')}}>My Orders</a></li>
              <li><a href="">Wishlist</a></li>
              <li><a href="" onClick={()=>{navigate('/profile')}} >Account</a></li>
            </ul>
          </nav>
          <a href=""  onClick={()=>{navigate('/cart')}}><img src="https://i.ibb.co/PNjjx3y/cart.png" alt="" width="30px" height="30px" /></a>
          <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" className="menu-icon" />
        </div>
      </div>
      ):(
        <div className="navcontainer">
        <div className="navbar">
          <div className="logo">
           <img src={logo} className='logo' alt="" />
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a href="" onClick={()=>{navigate('/home')}}>Home</a></li>
              <li><a href="" onClick={()=>{navigate('/products')}}>Products</a></li>
              <li><a href="" onClick={()=>{navigate('/')}} >Login</a></li>
              <li><a href="" onClick={()=>{navigate('/signup')}} >Sign Up</a></li>
            </ul>
          </nav>
          <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" className="menu-icon" />
        </div>
      </div>

      )}
    </div>
  )
}

export default UserNavbar
