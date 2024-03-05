import React from 'react'
import '../Home/Home.css'
import '../Home/Script.js'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <header>
        <a href="#" className="logomain">Food Zone<span>.</span></a>
        <div className="menuToggle" onClick="toggleMenu();"></div>
        <ul className="navigation">
          <li><a href="" onClick="toggleMenu();">Home</a></li>
          <li><a href="" onClick="toggleMenu();">About</a></li>
          <li><a href="" onClick={()=>{navigate('/products')}} >Menu</a></li>
          <li><a href="" onClick={()=>{navigate('/')}}>Login</a></li>
          <li className=""><a href="#contact" onClick="toggleMenu();">Contact</a></li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
