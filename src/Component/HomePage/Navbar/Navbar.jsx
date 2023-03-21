
import React from 'react';
import './Navbar.css';
import logo from '../../../Asset/Img/jobify.png';
import {RiMenu4Fill} from 'react-icons/ri';
import {RxCross2} from 'react-icons/rx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { UserAuth } from '../../../Context/AuthContext';

const Navbar = () => {



const [mobile,setMobile] = useState(false);
//const {user,logOut} = UserAuth();

//const handleSignOut = async () => {
//   try {
//      await logOut()
//   } catch (error) {
//      console.log(error)
//   }
//}

  return (
   <nav>
    <div className="navbar">

     <div className='navbar-img'>
        <img src={logo} alt="" />
     </div>


     <div  className={mobile ? 'navLink-mobile':'navLink'} onClick={()=>setMobile(false)}>
        <ul className={mobile ? 'ul-mobile' : 'ul'} onClick={()=>setMobile(false)} >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#jobs">Find Jobs</a></li>
            <li><a href="#career">Career Advice</a></li>
        </ul>

        <div className={mobile ? 'btn-mobile' : 'btn'} onClick={()=>setMobile(false)}>
 {/* {user?.displayName ? <button className='signin' onClick={handleSignOut}>LogOut</button> 
  : <Link className='signin' to='/signin'>Sign In</Link>}  */}
       <Link className='signin' to='/signin'>Sign In</Link>
       <Link className='signup'  to='/signup'>Sign Up</Link>
        </div>
     </div>

      {/*MENU*/}
    <button className="menu" onClick={()=> setMobile(!mobile)}>
   {mobile ? <RxCross2/> : <RiMenu4Fill/>}
    </button>


    </div>
   </nav>
  )
}

export default Navbar