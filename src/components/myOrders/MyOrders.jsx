import React from 'react'
import './myOrders.css'
import UserNavbar from '../UserNavBar/UserNavbar'

const MyOrders = () => {
  return (

       <div>
       <UserNavbar/>
       <div class="small-container cart-page">
              
              <table>
         <tr>
           <th>Orders</th>
           <th></th>
           <th></th>
         </tr>
     
         <tr>
           <td>
             <div class="cart-info">
               <img src="https://i.ibb.co/B3vYjvw/buy-1.jpg" alt="" />
               <div>
                 <p>Red Printed T-Shirt</p>
                 <small>Price ₹500.00</small>
                 <br />
                 <a href="#">Remove</a>
               </div>
             </div>
           </td>
           <td><input type="number" value="1" /></td>
           <td>₹500.00</td>
         </tr>
         <tr>
           <td>
             <div class="cart-info">
               <img src="https://i.ibb.co/qmSHWx7/buy-2.jpg" alt="" />
               <div>
                 <p>HRX Shoes</p>
                 <small>Price ₹1500.00</small>
                 <br />
                 <a href="#">Remove</a>
               </div>
             </div>
           </td>
           <td><input type="number" value="1" /></td>
           <td>₹1500.00</td>
         </tr>
         <tr>
           <td>
             <div class="cart-info">
               <img src="https://i.ibb.co/NyYtY31/buy-3.jpg" alt="" />
               <div>
                 <p>Reebok Tracksuit</p>
                 <small>Price ₹1500.00</small>
                 <br />
                 <a href="#">Remove</a>
               </div>
             </div>
           </td>
           <td><input type="number" value="1" /></td>
           <td>₹1500.00</td>
         </tr>
       </table>
     
      
     </div>
     </div>
  )
}

export default MyOrders
