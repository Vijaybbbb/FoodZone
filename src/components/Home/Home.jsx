import React from 'react';
import './Home.css'
import './Script.js'
import Navbar from '../Navabar/Navbar.jsx';
import Banner from '../Banner/Banner.jsx';




const Home = () => {
  return (
    <body>
      <Navbar/>
      <Banner/>
      <div className="copyrightText">
        <p>Copyright 2021. All rights are reserved</p>
      </div>
    </body>
  );
};

export default Home;
