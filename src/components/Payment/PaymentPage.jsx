import React, { useEffect, useState } from 'react'
import './Payment.css' 
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToOrders} from '../../Redux/UserOrderDetailsSlice'
import { useSelector } from 'react-redux'
import {clearCart} from '../../Redux/cartSlice'

const PaymentPage = () => {

    const cartData = useSelector(state => state.cart.cart);
    const {total} = useParams()
    const navigate = useNavigate()
    const [fullname,setFullname] = useState()
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState()
    const [address1,setAddress1] = useState()
    const [address2,setAddress2] = useState()
    const [paymentType,setPaymentType]  = useState()
    const [loading,setLoading]  = useState(false)

    const  dispatch = useDispatch()

    function handlePaymentType(e){
            setPaymentType(e.target.value)
    }
    useEffect(()=>{

    },[loading])

  return (
    <div >
        {loading&& (
                <div className='paymentLoader'>
                      <section class="dots-container">
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                      </section>

                </div>
                )}


<div className={loading ? 'blured' : ''}>
      <div style={{ display: 'flex', width: '500px',display:'flex' ,alignItems:'center',marginLeft:'500px',marginTop:'-70px' } }>
            <form style={{ width: '35rem', boxShadow: '0px 4px 4px rgba(102, 102, 102, 0.25)', borderRadius: '3px' }}>
                {/* Header */}
                <section style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--brand_blue)', padding: '1rem', height: '7rem', borderRadius: '3px 3px 0 0' }}>
                    <p style={{fontSize:'30px'}}>Payment</p>
                    <p id="description" style={{marginTop:'10px'}}>Checkout with Ease</p>
                    <p id="description" style={{fontSize:'10px',marginTop:'-15px',marginLeft:'300px',position:'relative'}}>Payable Amount : ${total}</p>
                </section>

                {/* Content */}
                <section style={{ backgroundColor: 'var(--grey_lighter)' }}>
                    {/* Name */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-60px" }}>
                        <label id="name-label" htmlFor="name"> Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Type your Full Name" required onChange={(e)=>{setFullname(e.target.value)}} />
                    </div>

                    {/* Email */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-30px" }}>
                        <label id="email-label" htmlFor="email" >Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your Email ID" required onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>

                    {/*  Number */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-30px" }}>
                        <label id="number-label" htmlFor="number" >Mob Number</label>
                        <input type="number" id="number" name="number" placeholder="xxxxxxxxxx" required  onChange={(e)=>{setPhone(e.target.value)}} />
                    </div>
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-30px" }}>
                        <label id="name-label" htmlFor="name">Address 1</label>
                        <input type="text" id="name" name="name" placeholder="Address" required  onChange={(e)=>{setAddress1(e.target.value)}}/>
                    </div>
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-30px" }}>
                        <label id="name-label" htmlFor="name" >Address 2</label>
                        <input type="text" id="name" name="name" placeholder="Address" required  onChange={(e)=>{setAddress2(e.target.value)}} />
                    </div>
                   

                    {/* Card Type */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-40px" }}>
                        <label id="cardType-label" htmlFor="cardType">Payment Type </label>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexBasis: '10%' }}>
                                <input type="radio" id="male" name="gender" value="COD" onChange={handlePaymentType} checked={paymentType === "COD"}  />
                                <label htmlFor="male" style={{ textTransform: 'capitalize' }}>COD</label>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexBasis: '10%' }} >
                                <input type="radio" id="female" name="gender"value="UPI" onChange={handlePaymentType} checked={paymentType === "UPI"}  />
                                <label htmlFor="female" style={{ textTransform: 'capitalize' }}>UPI</label><br />
                            </div>
                        </div>
                    </div>
                  
                    
                </section>
                </form> 
              
                <section style={{ width:'100%', padding: '1rem', display: 'flex', backgroundColor: 'var(--grey_lighter)',marginTop: "700px",
            marginLeft: "-500px" }}>
              
                    <button style={{marginTop:'-1px'}} id="" onClick={()=>{
                       dispatch(addToOrders({fullname,email,phone,address1,address2,paymentType,cartData}))
                       setLoading(true)
                       setTimeout(()=>{
                        navigate('/success')
                        dispatch(clearCart())
                        setLoading(false)
                       },3000)
                       
                    }}>Payment Checkout</button>
                </section>

                {/* textarea */}
                <div style={{ display: 'none' }}>
                    <textarea id="textarea" placeholder="some dummy text"></textarea>
                </div>
                
        </div>
        </div>
    </div>
  )
}

export default PaymentPage
