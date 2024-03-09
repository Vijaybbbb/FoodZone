import React from 'react';
import './myOrders.css';
import UserNavbar from '../UserNavBar/UserNavbar';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import { useState } from 'react';

const MyOrders = () => {
  const orders = useSelector(state => state.userOrder.orderDetails);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };


  return (
    <div>
      <UserNavbar/>

      {showPopup && (
        <div className="popup">
          {/* Popup content */}
          <div className="popup-content">
            <h2>Details</h2>
            <p>This is the content of the popup.</p>
            {/* Close button to hide the popup */}
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}

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
                     <button className='viewDetails' onClick={togglePopup} >View Details</button>
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
