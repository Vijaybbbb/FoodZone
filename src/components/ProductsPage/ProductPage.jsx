import React, { useEffect, useState } from 'react';
import './Script.js';
import './ProductPage.css';
import axios from 'axios';
import UserNavbar from '../UserNavBar/UserNavbar.jsx';


const ProductPage = () => {
  const [item, setItem] = useState();

  useEffect(() => {
    const fetchData = async (category) => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${category}`);
        setItem(response.data.meals.slice(0,12))

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call fetchData immediately
    fetchData('b');

  }, [])


  console.log(item);

  return (
    <div>
      <UserNavbar/>

      <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <select>
            <option value="">Default Shorting</option>
            <option value="">Short by price</option>
            <option value="">Short by popularity</option>
            <option value="">Short by rating</option>
            <option value="">Short by sale</option>
          </select>
        </div>


        {/* {item && item.map((data) => {
          return <div className='row'><img src={data.strMealThumb}></img></div>;
        })
        }
 */}
<div class="container">
   <div class="art-board">
      <div class="art-board__container">
         {item && item.map((data, index) => (
            <div class="card" key={index}>
               <div class="card__image">
                  <img src={data.strMealThumb} alt="Meal" />
               </div>
               <div class="card__info">
                  <div class="car__info--title">
                     <h3>{data.strMeal}</h3>
                     <p>Fresh & sweet</p>
                  </div>
                  <div class="card__info--price">
                     <p>$ 5</p>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                  </div>
               </div>

               <button class="CartBtn">
  <span class="IconContainer"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  </span>
  <p class="text">Add to Cart</p>
</button>
            </div>
         ))}
      </div>
   </div>
</div>







        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and iso mobile phone.</p>
              <div className="app-logo">
                <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
                <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
              </div>
            </div>

            <div className="footer-col-2">
              <img src="https://i.ibb.co/j3FNGj7/logo-white.png" alt="" />
              <p>
                Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div>

            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>

            <div className="footer-col-4">
              <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright &copy; 2021 - Red Store</p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;
