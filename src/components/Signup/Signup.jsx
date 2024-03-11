import React, { useContext, useState } from 'react';
import '../Signup/Signup.css'
import { FirebaseContext } from '../../context/FIrebaseContext';
import { auth } from '../../Firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../../Firebase/config';
import { collection,getFirestore,addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const SignInPage = () => {
  
  const [email,setEmail] = useState() 
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate() 
  
  const db  = getFirestore()
 // const {Firebase} = useContext(FirebaseContext)
  

  const handleSubmit = async(event) =>{
    event.preventDefault();
    await createUserWithEmailAndPassword(auth,email,password).then((result)=>{
    result.user.displayName = username
    addDoc(collection(db, 'users'), {
      id:result.user.uid,  // <-- Object representing document data
      name:username,
      cart:[]
    });
    
    })
    navigate('/')
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
