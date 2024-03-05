import React, { useEffect, useState } from 'react';
import './Script.js';
import './ProductPage.css';
import axios from 'axios';
import UserNavbar from '../UserNavBar/UserNavbar.jsx';
import Footer from '../Footer/Footer.jsx';


const ProductPage = () => {

  const [item, setItem] = useState();
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async (category) => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${category}`);

        // setItem(response.data.meals)
        setItem(prevData => {
          if (prevData === undefined) {
            return [...response.data.meals];
          } else {
            return [...prevData, ...response.data.meals];
          }
        });
        console.log(response.data.meals);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call fetchData immediately
    fetchData('b');
    fetchData('c');
    fetchData('e');

  }, [])


  //function for indicate pagination
  function selectedPage(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= item.length &&
      selectedPage !== page
    )
      setPage(selectedPage)
  }

  //generate Price For product
  function getPrice(id) {
    const str = String(id);
    return str[0] + str[2] + str[str.length - 1]

  }


  return (
    <div>
      <UserNavbar />

      <div className="small-container">
        <div className="row row-2">
          <h2 className='allprod'>All Products</h2>
          <select>
            <option value="">Default Shorting</option>
            <option value="">Short by price</option>
            <option value="">Short by popularity</option>
            <option value="">Short by rating</option>
            <option value="">Short by sale</option>
          </select>
        </div>


        <div class="container">
          <div class="art-board">
            <div class="art-board__container">
              {item && item.slice(page * 12 - 12, page * 12).map((data, index) => (
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

                


                  <p className='price'>${getPrice(data.idMeal)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Pagination */}


        {item && item.length > 0 && (
          <div className="page-btn">
            <span onClick={() => { selectedPage(page - 1) }}>{'<'}</span>
            {[...Array(Math.ceil(item.length / 12))].map((_, i) => (
              <span
                key={i + 1}
                onClick={() => { selectedPage(i + 1) }}
                className={page === i + 1 ? 'pagination_selected' : ''}

              >{i + 1}</span>
            ))}
            <span onClick={() => { selectedPage(page + 1) }}>{'>'}</span>

          </div>
        )}




      </div>

      <Footer/>


    </div>
  )
}

export default ProductPage;
