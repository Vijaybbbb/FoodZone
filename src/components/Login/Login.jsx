import React, { useState } from 'react'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { findUser } from '../../Redux/loginSlice';
import { useDispatch } from 'react-redux';

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
                setTimeout(()=>{
                    navigate('/products')
                })
            }).catch(()=>{
                setError(true)
            })
       }

       return (
       
              <div className="main">
              <p className="sign" align="center">Login</p>
              {error ? (
              <p style={{color:'red',fontSize:'10px',position:'relative',top:'300px',left:'138px'}}>Invalid Credentials</p>
              ):('')
               }
              <form className="form1">
                  <input className="un" required type="text" align="center" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
                  <input className="pass" required type="password" align="center" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                  <a className="submit" align="center" onClick={handleLogin}>Login</a>
                  <a className="submitsign" align="center" onClick={() => navigate('/signup')}>Sign Up</a>
                  <br /><br />
                  <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
              </form>
          </div>
       )
}

export default Login
