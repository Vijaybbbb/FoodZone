import React, { useContext, useState } from 'react';
import '../Signup/Signup.css'
import { auth } from '../../Firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../../Firebase/config';
import { collection,getFirestore,addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/veg.jpg'

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
    <div className='slbg'style={{ backgroundImage: `url(${bg})`,marginTop:'-800'}}>
    <div className="smain" style={{marginTop:"100px"}}>
          <p className="ssign" align="center">Sign Up</p>
          <form className="sform1">
            <input className="sun" type="text" align="center" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
            <input className="sun" type="text" align="center" placeholder="Username"  onChange={(e)=>{setUsername(e.target.value)}}/>
            <input className="spass" type="password" align="center" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
            <a className="ssubmit" align="center" onClick={handleSubmit}>Sign Up</a>
            <p className="sforgot" align="center"><a href="#">Forgot Password?</a></p>
          </form>
        </div>
        </div>
  );
};

export default SignInPage;
