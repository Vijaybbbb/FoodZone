import React, { useState } from 'react'
import './Cart.css'
import UserNavbar from '../UserNavBar/UserNavbar'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'


const Cart = () => {

       const cartData = useSelector(state => state.cart.cart)
       const [count,setCount] = useState({})
       const [singleProductTotal,setsingleProductTotal] = useState(null)
       const [subtotal,setSubtotal]  = useState(null)
       const [total,setTotal] = useState(null)

       return (
              <div>
              <UserNavbar />
               <div className="small-container cart-page">
                     
                     
                     <table>
                            <thead>
                                   <tr>
                                          <th>Product</th>
                                          <th>Quantity</th>
                                          <th>Subtotal</th>
                                   </tr>
                            </thead>
                            {cartData && cartData.map((data)=>
                            <tbody>
                                   <tr>
                                          <td>
                                                 <div className="cart-info">
                                                        <img src={data.img} alt="" />
                                                        <div>
                                                               <p>{data.name}</p>
                                                               <small>Price ${data.price}</small>
                                                               <br />
                                                               <a href="#">Remove</a>
                                                        </div>
                                                 </div>
                                          </td>
                                          <td><input type="number" value={count} /></td>
                                          <div className='btndiv'>
                                                 <button className='btncount' onClick={()=>{
                                                        setCount()
                                                        setsingleProductTotal()
                                                 }}>+</button>


                                                 <button  className='btncount' onClick={()=>{
                                                        setCount(count-1)
                                                 }}>-</button>
                                          </div>
                                          <td>${singleProductTotal}</td>
                                   </tr>
                                  
                            </tbody>
                               )}
                     </table>
                  
                     <div className="total-price">
                            <table>
                                   <tbody>
                                          <tr>
                                                 <td>Subtotal</td>
                                                 <td>${subtotal}</td>
                                          </tr>
                                          <tr>
                                                 <td>Tax</td>
                                                 <td>₹15.00</td>
                                          </tr>
                                          <tr>
                                                 <td>Total</td>
                                                 <td>${total}</td>
                                          </tr>
                                   </tbody>
                            </table>
                     </div>
                     
              </div>
              <Footer />
       </div>


       )
}

export default Cart
