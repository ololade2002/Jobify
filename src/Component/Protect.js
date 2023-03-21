
import React, { children } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Protect = ({children}) => {
const {user} = UserAuth()

if (!user) {
  return <Navigate to='/' />
}

  return children;
}

export default Protect;