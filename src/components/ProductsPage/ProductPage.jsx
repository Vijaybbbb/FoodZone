import React, { useEffect, useRef, useState } from 'react';

import './ProductPage.css';
import axios from 'axios';
import UserNavbar from '../UserNavBar/UserNavbar.jsx';

import { useNavigate } from 'react-router-dom';
import { singleProduct } from '../../Redux/selecteditemSlice.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from "../../Redux/cartSlice.jsx"
import Footer from '../Footer/Footer.jsx';


const ProductPage = () => {

  const [item, setItem] = useState();
  const [page, setPage] = useState(1)
  const[isLoading,setIsLoading] = useState(true)
  const[filterOption,setFilterOption] = useState("Filter")

  const navigate = useNavigate()
  const dispatch = useDispatch()


  //fetching cartData from Store
  const cartData = useSelector(state => state.cart.cart)
  const user = useSelector(state=>state.userData)
  const cartBtn = useRef()
  
  
  useEffect(() => {
    // Call fetchData immediately
    setTimeout(()=>{
      fetchData('b');
      fetchData('c');
      fetchData('e');
    },1000)
  }, [])




  //fetch Data for initial Rendering

  const fetchData = async (category) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${category}`);
      //console.log(response.data.meals)
      setItem(prevData => {
        if (prevData === undefined) {
          return [...response.data.meals];
        } else {
          return [...prevData, ...response.data.meals];
        }
      });
      setIsLoading(false)

    } catch (error) {
       console.log("check intrnet connection");
    }
  };





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


  //sorting function
  function sortData(event) {
    const value = event.target.value
    if (value == 'HightoLow') {
      
      const sortedData = [...item].sort((a, b) => getPrice(b.idMeal) - getPrice(a.idMeal));
      setItem(sortedData)
     
    }
    else if (value == 'Lowtohigh') {
      
      const sortedData = [...item].sort((a, b) => getPrice(a.idMeal) - getPrice(b.idMeal));
      setItem(sortedData)
      
    }
    else {

    }

  }

  //Filter Function
  async function filterData(event) {
    const value = event.target.value
    setFilterOption(value)
    try {
      if (value == 'Default') {
       
      }
      else {
        setIsLoading(true)
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`);
        setItem(response.data.meals)
        setIsLoading(false)
      }

    } catch (error) {
      console.log(error);
    }
  }




  return (
    
      

<div style={{backgroundColor:'white',height:'1750px'}}>
      {isLoading ? (
        <div style={{marginBottom:'1000px'}}>
          <UserNavbar />
          <div class="loader">
            <div class="justify-content-center jimu-primary-loading"></div>
          </div>
          {/* <Footer/> */}
   </div>
      ) : (
   <div style={{ backgroundColor: 'white', height: '1000px'}}>
          <div className='card-contanier' style={{ marginLeft: '-700px' }} >
            <UserNavbar />
            <div className="small-container" >
              <div className="row row-2" style={{ backgroundColor: 'white' }}>
                <h2 className='allprod'></h2>
                <div style={{ marginBottom: '50px', marginTop: '10px', marginRight: '30px', backgroundColor: 'white' }}>

                  <select onChange={sortData} name='sort'>
                    <option value="" selected disabled >Sort</option>
                    <option value="HightoLow">PRICE: High to Low</option>
                    <option value="Lowtohigh">PRICE: Low  to high</option>
                    <option value="Popularity">Popularity</option>
                  </select>
                  <select onChange={filterData} name='filter'>
                    <option value="" selected disabled >{filterOption}</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Beef">Beef</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Default">Default</option>

                  </select>
                </div>

              </div>


              <div className="container" style={{ backgroundColor: 'white' }}>
                <div className="art-board" style={{ backgroundColor: 'white' }}>
                  <div className="art-board__container" style={{ backgroundColor: 'white' }}>
                    {item && item.slice(page * 12 - 12, page * 12).map((data, index) => (

                      <div className="card" onClick={() => {
                        navigate(`/productview/${data.idMeal}`)
                        dispatch(singleProduct(
                          {
                            id: data?.idMeal,
                            name: data?.strMeal,
                            img: data?.strMealThumb,
                            details: data?.strInstructions,
                            price: getPrice(data.idMeal)
                          }))

                      }} key={index}>
                        <div className="card__image">
                          <img src={data.strMealThumb} alt="Meal" />
                        </div>
                        <div className="card__info">
                          <div className="car__info--title">
                            <h3>{data.strMeal.substring(0,20)}</h3>
                            <p style={{ color: 'black' }}>Fresh & sweet</p>
                          </div>
                          <div className="card__info--price">

                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                          </div>
                        </div>

                        <button ref={cartBtn} className="CartBtn" onClick={(e) => {
                          e.stopPropagation();
                          if(user?.email){
                            if (cartData.find(item => item.id == data.idMeal)) {
                              navigate('/cart')
                              cartBtn.style.backgroundColor = 'red'
                            } else {
                              dispatch(addToCart({
                                id: data?.idMeal,
                                name: data?.strMeal,
                                img: data?.strMealThumb,
                                price: getPrice(data.idMeal),
                              }))
                            }
  
                          }
                          else{
                            navigate('/')
                          }

                        }}>
                          <span className="IconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                          </span>
                          <p className="text">Add to Cart</p>
                        </button>




                        <p className='price' style={{ color: 'black' }}>${getPrice(data.idMeal)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            

          </div>



        </div>
        

         )}
      <div style={{ width: '100%', height: '100px', backgroundColor: "white" }}>


        <div style={{ marginTop: '220px', marginLeft: '10px', alignItems: 'center', display: 'flex', justifyContent: 'center', width: "100%" }}>
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
      </div>
         <div style={{marginTop:'30px'}} className='footerbody'>
              <Footer/>
         </div>

    </div>
   

  )
}

export default ProductPage;
