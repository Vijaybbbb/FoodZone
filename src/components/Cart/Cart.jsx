import React, { useState } from 'react'
import './Cart.css'
import UserNavbar from '../UserNavBar/UserNavbar'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'


const Cart = () => {

       const cartData = useSelector(state => state.cart.cart)
       const [count,setCount] = useState(cartData)
       const [singleProductTotal,setSingleProductTotal] = useState(null)
       const [subtotal,setSubtotal]  = useState(null)
       const [total,setTotal] = useState(null)




       const handleIncrement = (id) => {
              setCount(prevCount => ({
                ...prevCount,
                [id]: (prevCount[id] || 1) + 1
              }));
              
            };
          
        const handleDecrement = (id) => {
              setCount(prevCount => ({
                ...prevCount,
                [id]: Math.max((prevCount[id] || 0) - 1, 1)
              }));
            };
       




       return (
              <div>
              <UserNavbar />
               <div className="small-container cart-page">
                     
                     
                     <table>
                            <thead>
                                   <tr>
                                          <th>Product</th>
                                          <th>Quantity</th>
                                          <th></th>
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
                                          <td><input type="number" value={count[data.id] || 1} /></td>
                                          <div className='btndiv'>
                                                 <button className='btncount' onClick={()=>{
                                                        handleIncrement(data.id)
                                                        setSingleProductTotal((count[data.id] || 1) * data.price)
                                                        
                                                 }}>+</button>


                                                 <button  className='btncount' onClick={()=>{
                                                        handleDecrement(data.id)
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
