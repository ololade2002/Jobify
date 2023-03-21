
import React from 'react';
import Signin from './Signin/Signin.jsx'
import Signup from './Signup/Signup.jsx';

const Auth = () => {
  return (
   <div className="auth">
   <Signin/>
   <Signup/>
   </div>
  )
}

export default Auth