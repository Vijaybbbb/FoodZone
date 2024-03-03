import React from 'react'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {

       const navigate = useNavigate()

       return (
       
              <div className="main">
              <p className="sign" align="center">Login</p>
              <form className="form1">
                  <input className="un" type="text" align="center" placeholder="Email" />
                  <input className="pass" type="password" align="center" placeholder="Password" />
                  <a className="submit" align="center">Login</a>
                  <a className="submitsign" align="center" onClick={() => navigate('/signup')}>Sign Up</a>
                  <br /><br />
                  <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
              </form>
          </div>
       )
}

export default Login
