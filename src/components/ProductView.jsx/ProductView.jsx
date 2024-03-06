import React, { useState } from 'react'
import UserNavbar from '../UserNavBar/UserNavbar'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductView = () => {


  const id  = useParams() 
  const productData  = useSelector(state => state.selectedProduct.productData)

  return (
    <div>
      <UserNavbar/>

      
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <img src={productData.img} alt="" width="100%" id="ProductImg" />

            <div className="small-img-row">
              <div className="small-img-col">
                <img src="" alt="" width="100%" className="small-img" onClick={() => changeImage('https://i.ibb.co/1MydDzN/gallery-1.jpg')} />
              </div>
              <div className="small-img-col">
                <img src="" alt="" width="100%" className="small-img" onClick={() => changeImage('https://i.ibb.co/4j34KdX/gallery-2.jpg')} />
              </div>
              <div className="small-img-col">
                <img src="" alt="" width="100%" className="small-img" onClick={() => changeImage('https://i.ibb.co/kGhWJ84/gallery-3.jpg')} />
              </div>
              <div className="small-img-col">
                <img src="" alt="" width="100%" className="small-img" onClick={() => changeImage('https://i.ibb.co/4j34KdX/gallery-2.jpg')} />
              </div>
            </div>
          </div>
          <div className="col-2">
            <p>Home / T-Shirt</p>
            <h1>{productData.name}</h1>
            <h4>${productData.price}</h4>
            
            <input type="number"  />
            <a href="" className="btn">Add To Cart</a>

            <h3>Product Details <i className="fas fa-indent"></i></h3>
            <br />
            <p>
             {productData.details}
            </p>
          </div>
        </div>
      </div>



      <div className="small-container">
        <div className="row row-2">
          <h2>Related Products</h2>
          <p>View more</p>
        </div>
      </div>

      <div className="small-container">
        <div className="row">
          <div className="col-4">
            <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p>₹500.00</p>
          </div>

          <div className="col-4">
            <img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>₹500.00</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default ProductView
