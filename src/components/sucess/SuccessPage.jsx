import React, { useEffect } from 'react'
import './Success.css'
import { useNavigate } from 'react-router-dom'

const SuccessPage = () => {

  const navigate = useNavigate()

  useEffect(()=>{
      setTimeout(()=>{
          navigate('/myorders')
      },5000)
  })
  return (
    <div>
    <section id="ccontent03" class="ccontainer">
    <div className="circle animation">
      <span className="cover1"></span>
      <span className="cover2"></span>
      <span className="check">&#x02713;</span>
      
    </div><br />
    <label className='orderPlaced' htmlFor="">Order Placed</label>
  </section>  
  
  </div>
  )
}

export default SuccessPage
