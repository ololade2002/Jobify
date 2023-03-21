
import React from 'react';
import './Signup.css';
import img1 from '../../../Asset/Img/auth/dots.png';
import img2 from '../../../Asset/Img/auth/register1.png';
import img3 from '../../../Asset/Img/auth/register2.png';
import google from '../../../Asset/Img/jobssection/google.svg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../Context/AuthContext';
import { useEffect } from 'react';


const Signup = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const {googleSignIn,user} = UserAuth();

  const handleGoogleSignUp = async () => {
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
    <div id='signup' className="signup-auth">
     <div className='left-signup' >
<img src={img1} alt="" />
<img src={img2} alt="" />
<img src={img3} alt="" />
 </div>
 
 <div className='right-signup'>
<h2>Sign Up</h2>
<p>Let's get you onboard</p>
<div className="goggle-auth" onClick={handleGoogleSignUp}>
  <img src={google} alt="" />
  <p>Sign In With Google</p>
</div>
<p className='divide'>or sign up With</p>
<form className='signup-form'>
  <input  type="text" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} />
  <input  type='email' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} />
  <input  type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
  <div>
    <input type="checkbox"  />
    <p>I've read and I agree with the <span>Terms of Service </span> 
    and  <span> our Privacy Policy</span> </p>
  </div>
  <button disabled>Sign Up</button>
</form>
<p className='lastt'>Don't have an account yet? <Link to="/signin">Sign in</Link></p>
 </div>
    </div>
  )
}

export default Signup;