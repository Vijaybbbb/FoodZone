import React, { useState } from 'react'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { findUser } from '../../Redux/loginSlice';
import { useDispatch } from 'react-redux';
import bg from '../../assets/veg.jpg'

const Login = () => {

       const navigate = useNavigate()
       const [email,setEmail] = useState()
       const [password,setPassword] = useState()
       const[error,setError] = useState(false)
       const dispatch = useDispatch()

       function handleLogin(event){
        event.preventDefault();
            signInWithEmailAndPassword(auth,email,password).then(()=>{
                dispatch(findUser({email,password}))
               
                    navigate('/products')
                
            }).catch(()=>{
                setError(true)
            })
       }

       return (
            <div className='lbg'style={{ backgroundImage: `url(${bg})`,marginTop:'-800'}}>
              <div className="lmain"  style={{marginTop:"100px"}}>
              <p className="lsign" align="center">Login</p>
              {error ? (
              <p style={{color:'red',fontSize:'10px',position:'relative',top:'300px',left:'138px'}}>Invalid Credentials</p>
              ):('')
               }
              <form className="lform1">
                  <input className="lun" required type="text" align="center" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
                  <input className="lpass" required type="password" align="center" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                  <a className="lsubmit" align="center" onClick={handleLogin}>Login</a>
                  <a className="lsubmitsign" align="center" onClick={() => navigate('/signup')}>Sign Up</a>
                  <br /><br />
                  <p className="lforgot" align="center"><a href="#">Forgot Password?</a></p>
              </form>
            </div>
            </div>
       )
}

export default Login
