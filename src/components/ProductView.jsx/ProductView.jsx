import React from 'react'
import './ProductView.css'
import UserNavBar from '../UserNavBar/UserNavbar'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductView = () => {

  const id  = useParams() 
  const productData  = useSelector(state => state.selectedProduct.productData)
  console.log(productData);
  const para =productData.details

  return (
    <div>
      <UserNavBar/>
    <div className='singleProduct' style={{marginLeft:'100px',marginTop:"50px"}}>
        <div className="dsmall-container dsingle-product" style={{margin:0,padding:0,boxSizing:'border-box'}}>
      <div className="drow" style={{margin:0,padding:0,boxSizing:'border-box'}} >
        <div className="col-2"  style={{margin:0,padding:0,boxSizing:'border-box'}}>
          <img style={{borderRadius:'10px'}} src={productData.img} alt="" width="100%" id="ProductImg" />
          <div className="small-img-row">
            
          </div>
        </div>
        <div className="col-2"  style={{margin:0,padding:0,boxSizing:'border-box'}}>
          <p style={{color:'black',marginLeft:"20px"}}>Home / Foods</p>
          <h1  style={{color:'black',marginLeft:"20px"}}>{productData.name}</h1>
          <h4 style={{marginLeft:"20px"}}>${productData.price}</h4>
         
          
          <a href="" className="btn" style={{marginLeft:"20px"}}>Add To Cart</a>
         

          <h3 style={{marginLeft:"20px"}}>Product Details <i className="fas fa-indent"></i></h3>
          <br />
          <p  style={{color:'black',marginLeft:"20px"}} >
           {para.substring(0,500)}.
          </p>
        </div>
      </div>
    </div>
    <div className="dsmall-container"  style={{margin:0,padding:0,boxSizing:'border-box'}}>
      <div className="row row-2">
        <h2>Related Products</h2>
        <p>View more</p>
      </div>
      <div className="row"  style={{margin:0,padding:0,boxSizing:'border-box'}}>
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
   
     
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ProductView
