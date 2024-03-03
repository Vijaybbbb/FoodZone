import React, { useContext, useState } from 'react';
import '../Signup/Signup.css'
import { FirebaseContext } from '../../context/FIrebaseContext';


const SignInPage = () => {
  
  const [email,setEmail] = useState() 
  const [username,setUsername] = useState()
  const [password,setPassword] = useState() 

  const {Firebase} = useContext(FirebaseContext)

  const handleSubmit = (event) =>{
    event.preventDefault();
    Firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log(result);
    })
   
  }

  return (
  
    <div className="main">
          <p className="sign" align="center">Sign Up</p>
          <form className="form1">
            <input className="un" type="text" align="center" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
            <input className="un" type="text" align="center" placeholder="Username"  onChange={(e)=>{setUsername(e.target.value)}}/>
            <input className="pass" type="password" align="center" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
            <a className="submit" align="center" onClick={handleSubmit}>Sign Up</a>
            <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
          </form>
        </div>
  );
};

export default SignInPage;
