
import React from 'react';
import './Header.css';
import logo from '../../../Asset/Img/jobify.png';
import {BiMessageDetail} from 'react-icons/bi';
import {IoNotificationsSharp} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../../Context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
//import { HiOutlineMenu,  HiOutlineX } from 'react-icons/hi';

const Header = () => {

const [mobile,setMobile] = useState(false)   
const {logOut,user} = UserAuth();
const navi = useNavigate();

useEffect(()=> {
if (user == null) {
  navi('/')
}
},[user])

const handleSignOut = async () => {
        try {
           await logOut()
        } catch (error) {
           console.log(error)
        }
     }

  return (
   <div className="header">

    <div className='header-l'>
        <img src={logo} alt="" />
    </div>

    <div className={mobile ? 'header-mobile': 'header-r'} onClick={()=> setMobile(false)}>
    <ul className={mobile ? 'link-mobile' :'link'} onClick={()=> setMobile(false)} >
        <li><Link to='/about'>Dashboard</Link></li>
        <li><Link to='/findjobs'> Find Jobs</Link></li>
        <li><Link >Career Advice</Link></li>
     </ul>
     <div >
     <div><BiMessageDetail/></div>
    <div><IoNotificationsSharp/></div>
     </div>
     <button onClick={handleSignOut} className={mobile ? 'login-btn': 'signin log-btn'}>Logout</button>
    </div>

  {/*MENU*/}

  <button className="profile-menu" onClick={()=> setMobile(!mobile) } >
{mobile ? <HiOutlineX/> : <HiOutlineMenu/>}
</button>


   </div>
  )
}

export default Header;