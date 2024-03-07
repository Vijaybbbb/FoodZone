import React from 'react'
import './Payment.css'
const PaymentPage = () => {
  return (
    <div className='container'>
              <div className='card' style={{ display: 'flex', width: '481px', margin: '20px auto',height:'680px'}}>
            <form id="survey-form" style={{ width: '30rem', boxShadow: '0px 4px 4px rgba(102, 102, 102, 0.25)', borderRadius: '3px' }}>
                {/* Header */}
                <section style={{marginBottom:'-10px', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--brand_blue)', padding: '1rem', height: '6rem', borderRadius: '3px 3px 0 0' }}>
                    <h1 id="title">Payment Checkout</h1>
                    <p id="description">Checkout with Ease</p>
                </section>
                
                {/* Content */}
                <section style={{ backgroundColor: 'var(--grey_lighter)' }}>
                    {/* Name */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginBottom:'-33px' }}>
                        <label id="name-label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Type your Full Name" required />
                    </div>
                    
                    {/* Email */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column' ,marginBottom:'-33px'}}>
                        <label id="email-label" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your Email ID" required />
                    </div>
                    
                    {/* Card Number */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column' ,marginBottom:'-33px' }}>
                        <label id="number-label" htmlFor="number">Mob Number</label>
                        <input type="number" id="number" name="number" placeholder="xxxxxxxxxx" max="10" min="0" required />
                    </div>
                    
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginBottom:'-33px' }}>
                        <label id="name-label" htmlFor="name">Address 1 </label>
                        <input type="text" id="name" name="name" placeholder="Type your Full Name" required />
                    </div>
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginBottom:'-33px' }}>
                        <label id="name-label" htmlFor="name">Address 2</label>
                        <input type="text" id="name" name="name" placeholder="Type your Full Name" required />
                    </div>
                    
                    
                    {/* Card Type */}
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column',marginBottom:'-33px' }}>
                        <label id="cardType-label" htmlFor="cardType">Payment Method</label>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexBasis: '10%' }}>
                                <input type="radio" id="male" name="gender" value="male" />
                                <label htmlFor="male" style={{ textTransform: 'capitalize' }}>COD</label>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexBasis: '10%' }}>
                                <input type="radio" id="female" name="gender" value="female" />
                                <label htmlFor="female" style={{ textTransform: 'capitalize' }}>UPI</label><br />
                            </div>
                        </div>
                    </div>
                
                </section>
                
                {/* Footer */}
                <section style={{ padding: '1rem', display: 'flex', backgroundColor: 'var(--grey_lighter)' }}>
                    {/* Checkout Button */}
                    <button id="submit" type="submit" value="Process Payment">Payment Checkout</button>
                </section>
                
                {/* Textarea */}
                <div style={{ display: 'none' }}>
                    <textarea id="textarea" placeholder="some dummy text"></textarea>
                </div>
            </form>
        </div>

    </div>
  )
}

export default PaymentPage
