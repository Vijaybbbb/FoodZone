import React from 'react';
import './myOrders.css';
import UserNavbar from '../UserNavBar/UserNavbar';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import { useState } from 'react';

const MyOrders = () => {
  const orders = useSelector(state => state.userOrder.orderDetails);
 
  const [showPopup, setShowPopup] = useState(false);
  const [address,setAddress] =useState()
  const [price,setPrice] = useState() 

  
  function selectedOrder(order){
    console.log(order);
      setAddress(order.userDetails);
  }
  function findPrice(price){
    const p = Number(price)
    setPrice(p+5)
  }

  return (
    <div>
      <UserNavbar/>

      <div className="small-container cart-page">    
        <table>
          <thead>
            <tr>
              <th>Orders</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <React.Fragment key={index}>
                {order.cartItems.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>
                      <div className="cart-info">
                        <img src={item.img} alt="" />
                        <div>
                          <p style={{ color: 'black' }}>{item.name}</p>
                          <small>Price ₹{item.price}</small>
                          <br />
                        </div>
                  
                      </div>
                    </td>
                    <td>
                      <div id="button">
                        <a href="#popup" onClick={()=>{
                          selectedOrder(order)
                          findPrice(item.price)
                          }}>View Details</a>
                      </div>
                      <div id="popup">
                        <div class="window">
                         <div className='orderDetails'>                 
                    <div className="dcard">
                    <div className="dheader">Order Details</div>
                    <table className="ddetails-table">
                        <tbody>
                            <tr>
                                <th style={{color:'black'}}>Order Number:</th>
                                <td>#000000</td>
                            </tr>
                            <tr>
                                <th style={{color:'black'}}>Order Date:</th>
                                <td>March 10, 2024</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="dsection-title">Shipping Address</div>
                    <p  style={{color:'black' ,textAlign:'left'}}>
                        {address?.fullname}<br />
                        {address?.email}<br />
                        {address?.phone}<br />
                        {address?.address1}
                    </p>                   
                    <div className="dsection-title">Order Summary</div>
                    <table className="ddetails-table">
                        <tbody>
                           
                            <tr>
                                <th>Shipping:</th>
                                <td>$5.00</td>
                            </tr>
                            <tr>
                                <th>Total:</th>
                                <td>${price}</td>
                            </tr>
                            <tr>
                              <td></td><td><button className="cancel-button" >Cancel Order</button></td>
                            </tr>
                        </tbody>
                    </table>           
                </div>   
            </div>   
          <a href="#" className="close-button" title="Close">Close</a>
          <h1></h1>
        </div>
      </div>
                    </td>
                    <td>{order.userDetails.paymentType}</td>
                    <td className='status' style={{color:'green'}}>Confirmed</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>


      
      

      <Footer/>
    </div>
  );
}

export default MyOrders;
