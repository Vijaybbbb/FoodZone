import React, { useEffect, useState } from 'react';
import './Cart.css';
import UserNavbar from '../UserNavBar/UserNavbar';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartData = useSelector(state => state.cart.cart);
  const [count, setCount] = useState({});
  const [singleProductTotal, setSingleProductTotal] = useState({});
  const [subtotal, setSubtotal] = useState(null);
  const [total, setTotal] = useState(null);
  const [updatedCart, setUpdatedCart] = useState([]);

  useEffect(() => {
    setUpdatedCart(cartData);
  }, [cartData]);

  useEffect(() => {
    const updatedTotals = {};
    updatedCart.forEach(data => {
      updatedTotals[data.id] = (count[data.id] || 1) * data.price;
    });
    setSingleProductTotal(updatedTotals);
  }, [count, updatedCart]);

  useEffect(() => {
    let stotal = 0;
    updatedCart.forEach(data => {
      stotal += (count[data.id] || 1) * data.price;
    });
    setSubtotal(stotal);
    const tax = 15;
    setTotal(stotal + tax);
  }, [count, updatedCart]);

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

  const removeProduct = (id) => {
    const result = JSON.parse(localStorage.getItem('persist:root'));
    const userData = JSON.parse(result.cart);
    const index = userData.cart.findIndex(data => data.id === id);
    if (index !== -1) {
      userData.cart.splice(index, 1); // Remove the item from the array
      result.cart = JSON.stringify(userData);
      localStorage.setItem('persist:root', JSON.stringify(result)); // Update localStorage
      console.log("Product removed successfully.");
      setUpdatedCart([...userData.cart]);
      setCount(prevCount => {
        const updatedCount = { ...prevCount };
        delete updatedCount[id];
        return updatedCount;
      });
    } else {
      console.log(`Product with id ${id} not found in the cart.`);
    }
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
          {updatedCart && updatedCart.map((data) =>
            <tbody key={data.id}>
              <tr>
                <td>
                  <div className="cart-info">
                    <img src={data.img} alt="" />
                    <div>
                      <p>{data.name}</p>
                      <small>Price ${data.price}</small>
                      <br />
                      <label className='label' onClick={() => { removeProduct(data.id) }}>Remove</label>
                    </div>
                  </div>
                </td>
                <td><input type="number" value={count[data.id] || 1} /></td>
                <div className='btndiv'>
                  <button className='btncount' onClick={() => {
                    handleIncrement(data.id)
                    setSingleProductTotal((count[data.id] || 1) * data.price)

                  }}>+</button>


                  <button className='btncount' onClick={() => {
                    handleDecrement(data.id)
                  }}>-</button>
                </div>
                <td>${singleProductTotal[data.id] || data.price}</td>
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
        
                       <div className='paymentbtn'>
                              <button class="cssbuttons-io">
                                     <span>
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                   d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                                                   fill="currentColor"
                                            ></path>

                                            Proceed to Payment
                                     </span>
                              </button>


                       </div>

      </div>
      <Footer />
    </div>
  );
};

export default Cart;