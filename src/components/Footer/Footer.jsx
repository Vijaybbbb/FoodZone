import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='sfooterbody'>
    <div class="sfooter">
    <div class="scontainer">
    <div class="srow">
    <div class="sfooter-col-1">
    <h3>Download Our App</h3>
    <p>Download App for Android and iso mobile phone.</p>
    <div class="sapp-logo">
           <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
           <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
    </div>
    </div>

    <div class="sfooter-col-2"> 
    <img src={logo} alt="" />
    <p>
           Our Purpose Is To Sustainably Make the Pleasure and Benefits of
           Sports Accessible to the Many.
    </p>
    </div>

    <div class="sfooter-col-3">
    <h3>Useful Links</h3>
    <ul>
           <li>Coupons</li>
           <li>Blog Post</li>
     <li>Return Policy</li>
     <li>Join Affiliate</li>
   </ul>
 </div>

 <div class="sfooter-col-4">
   <h3>Follow us</h3>
   <ul>
     <li>Facebook</li>
     <li>Twitter</li>
     <li>Instagram</li>
     <li>YouTube</li>
   </ul>
 </div>
</div><br />
<hr /><br /><br />
{/* <p class="scopyright">Copyright &copy; 2021 - Red Store</p> */}
</div>
</div>
</div>
  
  )
}

export default Footer
