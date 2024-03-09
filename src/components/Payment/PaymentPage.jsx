import React, { useState } from 'react'
import './Payment.css' 
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToOrders} from '../../Redux/UserOrderDetailsSlice'
import { useSelector } from 'react-redux'

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

    const  dispatch = useDispatch()

    function handlePaymentType(e){
            setPaymentType(e.target.value)
    }

  return (
    <div>
      <div style={{ display: 'flex', width: '500px',display:'flex' ,alignItems:'center',marginLeft:'500px',marginTop:'20px' }}>
            <form style={{ width: '35rem', boxShadow: '0px 4px 4px rgba(102, 102, 102, 0.25)', borderRadius: '3px' }}>
                {/* Header */}
                <section style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--brand_blue)', padding: '1rem', height: '7rem', borderRadius: '3px 3px 0 0' }}>
                    <h1 id="title">Payment Checkout</h1>
                    <p id="description">Checkout with Ease</p>
                    <p id="description" style={{fontSize:'13px',marginTop:'10px'}}>Payable Amount : ${total}</p>
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
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-30px" }}>
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
              
                <section style={{ width:'100%', padding: '1rem', display: 'flex', backgroundColor: 'var(--grey_lighter)',marginTop: "721px",
    marginLeft: "-500px" }}>
              
                    <button id="" onClick={()=>{
                       dispatch(addToOrders({email,phone,address1,address2,paymentType,cartData}))     
                    }}>Payment Checkout</button>
                </section>

                {/* textarea */}
                <div style={{ display: 'none' }}>
                    <textarea id="textarea" placeholder="some dummy text"></textarea>
                </div>
           
        </div>
    </div>
  )
}

export default PaymentPage
