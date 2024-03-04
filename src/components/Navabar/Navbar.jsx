import React from 'react'
import '../Home/Home.css'
import '../Home/Script.js'

const Navbar = () => {
  return (
    <div>
      <header>
        <a href="#" className="logo">Food Zone<span>.</span></a>
        <div className="menuToggle" onClick="toggleMenu();"></div>
        <ul className="navigation">
          <li><a href="#banner" onClick="toggleMenu();">Home</a></li>
          <li><a href="#about" onClick="toggleMenu();">About</a></li>
          <li><a href="#menu" onClick="toggleMenu();">Menu</a></li>
          <li><a href="#expert" onClick="toggleMenu();">Login</a></li>
          <li className="conta"><a href="#contact" onClick="toggleMenu();">Contact</a></li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
