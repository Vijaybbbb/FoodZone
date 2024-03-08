import React from 'react'
import './Payment.css' 
import { useNavigate, useParams } from 'react-router-dom'


const PaymentPage = () => {

    const {total} = useParams()
    console.log(total);
    const navigate = useNavigate()

  return (
    <div>
      <div style={{ display: 'flex', width: '500px',display:'flex' ,alignItems:'center',marginLeft:'500px',marginTop:'20px' }}>
            <form id="survey-form" style={{ width: '35rem', boxShadow: '0px 4px 4px rgba(102, 102, 102, 0.25)', borderRadius: '3px' }}>
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
                        <input type="text" id="name" name="name" placeholder="Type your Full Name" required />
                    </div>

                    {/* Email */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-30px" }}>
                        <label id="email-label" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your Email ID" required />
                    </div>

                    {/*  Number */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-30px" }}>
                        <label id="number-label" htmlFor="number">Mob Number</label>
                        <input type="number" id="number" name="number" placeholder="xxxxxxxxxx" required />
                    </div>
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-30px" }}>
                        <label id="name-label" htmlFor="name">Address 1</label>
                        <input type="text" id="name" name="name" placeholder="Address" required />
                    </div>
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-30px" }}>
                        <label id="name-label" htmlFor="name">Address 2</label>
                        <input type="text" id="name" name="name" placeholder="Address" required />
                    </div>
                   

                    {/* Card Type */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginTop:"-30px" }}>
                        <label id="cardType-label" htmlFor="cardType">Payment Type </label>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexBasis: '10%' }}>
                                <input type="radio" id="male" name="gender" value="male" />
                                <label htmlFor="male" style={{ textTransform: 'capitalize' }}>COD</label>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexBasis: '10%' }} >
                                <input type="radio" id="female" name="gender" value="female" />
                                <label htmlFor="female" style={{ textTransform: 'capitalize' }}>UPI</label><br />
                            </div>
                        </div>
                    </div>

                    {/* Save Card + Terms and Conditions */}
                    {/* <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" id="nationality" name="nationality" value="Indian" />
                            <label htmlFor="nationality" style={{ textTransform: 'capitalize' }}>Save Card Details to My Account</label>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" id="nationality" name="nationality" value="Indian" />
                            <label htmlFor="nationality" style={{ textTransform: 'capitalize' }}>I Agree with Terms and Conditions</label>
                        </div>
                    </div> */}

                    {/* empty spacing */}
                    
                </section>

                {/* Footer */}
                <section style={{ padding: '1rem', display: 'flex', backgroundColor: 'var(--grey_lighter)',marginTop:"-50px" }}>
                    {/* Checkout Button */}
                    <button id="submit" onClick={()=>{
                        navigate('/success')
                    }}>Payment Checkout</button>
                </section>

                {/* textarea */}
                <div style={{ display: 'none' }}>
                    <textarea id="textarea" placeholder="some dummy text"></textarea>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PaymentPage
