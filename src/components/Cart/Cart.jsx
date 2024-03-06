import React from 'react'
import './Cart.css'



const Cart = () => {
          
       return (
              <div>
                     <div className="small-container cart-page">
                            <table>
                                   <tr>
                                          <th>Product</th>
                                          <th>Quantity</th>
                                          <th>Subtotal</th>
                                   </tr>

                                   <tr>
                                          <td>
                                                 <div className="cart-info">
                                                        <img src="https://i.ibb.co/B3vYjvw/buy-1.jpg" alt="" />
                                                        <div>
                                                               <p>Red Printed T-Shirt</p>
                                                               <small>Price ₹500.00</small>
                                                               <br />
                                                               <a href="#">Remove</a>
                                                        </div>
                                                 </div>
                                          </td>
                                          <td><input type="number" defaultValue="1" /></td>
                                          <td>₹500.00</td>
                                   </tr>
                                   <tr>
                                          <td>
                                                 <div className="cart-info">
                                                        <img src="https://i.ibb.co/qmSHWx7/buy-2.jpg" alt="" />
                                                        <div>
                                                               <p>HRX Shoes</p>
                                                               <small>Price ₹1500.00</small>
                                                               <br />
                                                               <a href="#">Remove</a>
                                                        </div>
                                                 </div>
                                          </td>
                                          <td><input type="number" defaultValue="1" /></td>
                                          <td>₹1500.00</td>
                                   </tr>
                                   <tr>
                                          <td>
                                                 <div className="cart-info">
                                                        <img src="https://i.ibb.co/NyYtY31/buy-3.jpg" alt="" />
                                                        <div>
                                                               <p>Reebok Tracksuit</p>
                                                               <small>Price ₹1500.00</small>
                                                               <br />
                                                               <a href="#">Remove</a>
                                                        </div>
                                                 </div>
                                          </td>
                                          <td><input type="number" defaultValue="1" /></td>
                                          <td>₹1500.00</td>
                                   </tr>
                            </table>

                            <div className="total-price">
                                   <table>
                                          <tr>
                                                 <td>Subtotal</td>
                                                 <td>₹3500.00</td>
                                          </tr>
                                          <tr>
                                                 <td>Tax</td>
                                                 <td>₹15.00</td>
                                          </tr>
                                          <tr>
                                                 <td>Total</td>
                                                 <td>₹3515.00</td>
                                          </tr>
                                   </table>
                            </div>
                     </div>
              </div>


       )
}

export default Cart
