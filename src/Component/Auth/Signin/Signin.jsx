
import React from 'react';
import './Signin.css';
import img1 from '../../../Asset/Img/auth/dots.png';
import img2 from '../../../Asset/Img/auth/login1.png';
import img3 from '../../../Asset/Img/auth/login2.png';
import google from '../../../Asset/Img/jobssection/google.svg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../Context/AuthContext';
import { useEffect } from 'react';


const Signin = () => {

const {googleSignIn,user} = UserAuth();
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const navigate = useNavigate();

const handleGoogleSignIn = async () => {
  try {
 await googleSignIn();

  } catch (error) {
    console.log(error)
  }
}

useEffect(()=> {
if(user != null) {
  navigate('/about')
  
}
},[user]);

  return (
   <div className="signin-auth">
 <div className='left-signin' >
<img src={img1} alt="" />
<img src={img2} alt="" />
<img src={img3} alt="" />
 </div>
 
 <div className='right-signin'>
<h2>Welcome Back</h2>
<div className="goggle-auth" onClick={handleGoogleSignIn}>
 <img src={google} alt={google}/>
  <p>Sign In With Google</p>
</div>
<p className='divide'>or sign in With</p>
<form className='signin-form'>
  <input type='email' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} />
  <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
  <button>Sign In</button>
</form>
<p className='last'>Don't have an account yet? <Link to="/signup">Create an account</Link></p>
 </div>
   </div>
  )
}

export default Signin;