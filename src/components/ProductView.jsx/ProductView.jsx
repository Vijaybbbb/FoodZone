import React, { useEffect, useState } from 'react'
import './ProductView.css'
import UserNavBar from '../UserNavBar/UserNavbar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cartSlice'
import axios from 'axios'
import { singleProduct } from '../../Redux/selecteditemSlice'

const ProductView = () => {
 
  const productData  = useSelector(state => state.selectedProduct.productData)
  const user = useSelector(state=> state.userData)
  const para =productData.details
  const cartData = useSelector(state => state.cart.cart)
  const [relatedData,setRelatedData]  = useState()
  const [otherFoods,setOtherFoods]  = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    (async()=>{
       const data  = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${productData.category}`)
       setRelatedData(data.data.meals)
       
      
    })()
  },[productData.category])
  
  useEffect(()=>{
    (async()=>{
      const data  = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      console.log(data);
      setOtherFoods(data.data.categories)
     
   })()
  },[productData.category])

  function getPrice(id) {
    const str = String(id);
    return str[0] + str[2] + str[str.length - 1]

  }
 
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
          <h1  style={{color:'black',marginLeft:"10px"}}>{productData.name}</h1>
          <h4 style={{marginLeft:"20px"}}>${productData.price}</h4>
         
          
          <a href="" className="btn" style={{marginLeft:"20px"}}  onClick={()=>{

               if(user?.email){
                if (cartData.find(item => item.id == productData.id)) {
                  navigate('/cart')
                  
                } else {
                  dispatch(addToCart({
                    id: productData?.id,
                    name: productData?.name,
                    img: productData?.img,
                    price: productData?.price,
                  }))
                }
               }
               else{
                navigate('/')
               }
               

          }}>Add To Cart</a>
         

          <h3 style={{marginLeft:"20px"}}>Product Details <i className="fas fa-indent"></i></h3>
          <br />
          <p  style={{color:'black',marginLeft:"20px"}} >
           {para?.substring(0,500) || 
           'The process of making tempeh murni (pure soybean cakes) begins with the whole beans being soaked overnight. They are then skinned before being cooked. Afterward they are packed into a plastic bag (or otherwise covered in plastic) and left to ferment for two to three days in a hot, humid place. All forms of tempeh are widely produced in Southeast Asia and are available in blocks, both fresh and frozen. Home cooks in Indonesia also prepare their own tempeh, the tropical climate being ideally suited to the fermentation process.'
           
           
           }.
          </p>
        </div>
      </div>
    </div>
    <div className="dsmall-container"  style={{margin:0,padding:0,boxSizing:'border-box'}}>
      <div className="row row-2">
        <h2>Related Foods</h2>
        
      </div>
    </div>
    </div>
    <div   style={{ overflowX: 'auto' ,marginLeft:"50px",marginRight:"50px"}}>
      
     <div className="row"  style={{margin:0,padding:0,boxSizing:'border-box',marginBottom:'10px',display:'flex',marginRight:'10px'}}>
       {relatedData?.map((item)=>(
        <div className="col-4" style={{gap:0}}>
          
        <img src={item?.strMealThumb} alt=""style={{borderRadius:'10px',cursor:'pointer'}} onClick={()=>{
           navigate(`/productview/${item.idMeal}`)
           dispatch(singleProduct(
            {
              id: item?.idMeal,
              name: item?.strMeal,
              img: item?.strMealThumb,
              details: item?.strInstructions,
              price: getPrice(item.idMeal),
              category:productData.category
            }))
           }} />
        <label htmlFor="">{item?.strMeal}</label>
          
        </div>
      )) }
      </div>
   </div>
   <h2 style={{marginLeft:'80px',marginTop:'-70px'}}>Other Foods</h2>
   <div  style={{ overflowX: 'auto' ,marginLeft:"50px",marginRight:"50px"}}>
   <div className="row"  style={{margin:0,padding:0,boxSizing:'border-box',marginBottom:'30px',display:'flex'}}>
       {otherFoods?.map((item)=>(
        <div className="col-4" style={{gap:20}}>
          
        <img src={item?.strCategoryThumb} alt=""style={{borderRadius:'10px',cursor:'pointer'}} onClick={()=>{
          navigate(`/products?${item?.strCategory}`
          )
        }} />
        <label htmlFor="">{item?.strCategory}</label>
          
        </div>
      )) }
      </div>
   </div>
     
    <Footer/>
    </div>
  )
}

export default ProductView
