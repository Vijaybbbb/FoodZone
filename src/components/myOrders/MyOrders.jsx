import React from 'react';
import './myOrders.css';
import UserNavbar from '../UserNavBar/UserNavbar';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';

const MyOrders = () => {
  const orders = useSelector(state => state.userOrder.orderDetails);
 console.log(orders);
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
                      <button>
                        <p>Subscribe</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </button>
                    </td>
                    <td>{order.userDetails.paymentType}</td>
                    <td>Confirmed</td>
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
