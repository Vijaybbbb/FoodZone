import React, { useRef, useState } from 'react';
import './myOrders.css';
import UserNavbar from '../UserNavBar/UserNavbar';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';

const MyOrders = () => {
  const orders = useSelector(state => state.userOrder.orderDetails);
  const [address, setAddress] = useState();
  const [price, setPrice] = useState();
  const [canceledItems, setCanceledItems] = useState({});
  const [selectedItemId, setSelectedItemId] = useState('');
  const ref  = useRef()

  function selectedOrder(order, itemId) {
    setAddress(order.userDetails);
    setSelectedItemId(itemId);
    const cartItemsArray = orders.flatMap(order => order.cartItems);
    setCanceledItems({}); // Clear canceled items
    cartItemsArray.forEach(item => {
      if (canceledItems[item.id]) {
        // If item was canceled, maintain its canceled state
        setCanceledItems(prevState => ({ ...prevState, [item.id]: true }));
      } else {
        // Otherwise, set its canceled state to false
        setCanceledItems(prevState => ({ ...prevState, [item.id]: false }));
      }
    });
  }

  function findPrice(price) {
    const p = Number(price);
    setPrice(p + 5);
  }

  function handleCancelOrder(itemId) {
    setCanceledItems(prevState => ({ ...prevState, [itemId]: true }));
  }

  return (
    <div>
      <UserNavbar />

      <div className="small-container cart-page" style={{ height: '1000px' }}>
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
                        <a
                          href="#popup"
                          onClick={() => {
                            selectedOrder(order, item.id);
                            findPrice(item.price);
                          }}
                        >
                          View Details
                        </a>
                      </div>
                      <div id="popup">
                      
                        <div className="window">
                        <div style={{position:"absolute"}}>
                          <div className='progress1'>
                              <label htmlFor="" style={{color:'white',position:'absolute',top:'22px',left:'7px',fontSize:'10px'}}>Placed</label>
                          </div>
                          <div className='progressLine1'>

                          </div>
                          <div className='progress2'>
                              <label htmlFor="" style={{color:'white',position:'absolute',top:'22px',left:'7px',fontSize:'10px'}}>Shipped</label>
                          </div>
                          <div className='progressLine2'>

                          </div>
                          <div className={canceledItems[item.id] ? 'progress3Canceled' : 'progress3'}>
                              <label ref={ref} htmlFor="" style={{color:'white',position:'absolute',top:'22px',left:'3px',fontSize:'10px'}}>Delivered</label>
                          </div>
                        </div>
                          <div className="orderDetails">
                            <div className="dcard">
                              <div className="dheader">Order Details</div>
                              <table className="ddetails-table">
                                <tbody>
                                  <tr>
                                    <th style={{ color: 'black' }}>Order ID:</th>
                                    <td>COD{selectedItemId}</td>
                                  </tr>
                                  <tr>
                                    <th style={{ color: 'black' }}>Order Date:</th>
                                    <td>March 10, 2024</td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="dsection-title">Shipping Address</div>
                              <p style={{ color: 'black', textAlign: 'left' }}>
                                {address?.fullname}
                                <br />
                                {address?.email}
                                <br />
                                {address?.phone}
                                <br />
                                {address?.address1}
                              </p>
                              <div className="dsection-title">Order Summary</div>
                              <table className="ddetails-table">
                                <tbody>
                                  <tr>
                                    <th style={{ color: 'black' }}>Shipping:</th>
                                    <td>$5.00</td>
                                  </tr>
                                  <tr>
                                    <th style={{ color: 'black' }}>Total:</th>
                                    <td>${price}</td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      <button
                                        className="cancel-button"
                                        onClick={() => handleCancelOrder(selectedItemId)}
                                      >
                                        Cancel Order
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <a href="#" className="close-button" title="Close">
                            Close
                          </a>
                          <h1></h1>
                        </div>
                      </div>
                    </td>
                    <td>{order.userDetails.paymentType}</td>
                    <td >
                    {canceledItems[item.id] ? (
                        <span style={{ color: 'red' }}>Canceled</span>
                        
                      ) : (
                        <span style={{ color: 'green' }}>Confirmed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default MyOrders;
