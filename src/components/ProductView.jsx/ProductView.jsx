import React from 'react'
import './ProductView.css'


const ProductView = () => {
  return (
    <div className='singleProduct'>
        <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img src="https://i.ibb.co/1MydDzN/gallery-1.jpg" alt="" width="100%" id="ProductImg" />
          <div className="small-img-row">
            <div className="small-img-col">
              <img src="https://i.ibb.co/1MydDzN/gallery-1.jpg" alt="" width="100%" className="small-img" />
            </div>
            <div className="small-img-col">
              <img src="https://i.ibb.co/4j34KdX/gallery-2.jpg" alt="" width="100%" className="small-img" />
            </div>
            <div className="small-img-col">
              <img src="https://i.ibb.co/kGhWJ84/gallery-3.jpg" alt="" width="100%" className="small-img" />
            </div>
            <div className="small-img-col">
              <img src="https://i.ibb.co/4j34KdX/gallery-2.jpg" alt="" width="100%" className="small-img" />
            </div>
          </div>
        </div>
        <div className="col-2">
          <p style={{color:'black'}}>Home / Foods</p>
          <h1  style={{color:'black'}}>Red Printed T-Shirt by HRX</h1>
          <h4>₹500</h4>
         
          
          <a href="" className="btn">Add To Cart</a>
          <h3>Product Details <i className="fas fa-indent"></i></h3>
          <br />
          <p  style={{color:'black'}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
            accusamus soluta quasi illum, deserunt ut iste rem obcaecati
            inventore, est harum repellendus fuga velit odio sint officia
            corrupti eum perspiciatis.
          </p>
        </div>
      </div>
    </div>
    <div className="small-container">
      <div className="row row-2">
        <h2>Related Products</h2>
        <p>View more</p>
      </div>
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
    </div>
  )
}

export default ProductView
