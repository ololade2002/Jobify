
import React from 'react';
import './Footer.css';
import logo from '../../../Asset/Img/jobify.png';
import {FaFacebookF} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">

<div className="footer-body">
<div className='footer1'>
    <img src={logo} alt="" />
    <p>Our job search app will guide you through the processs
         of finding a job. Personalize your job search and apply online.</p>
</div>

<div className='footer2'>
  <div>
  <h2>Useful Links</h2>
    <ul>
        <li>Terms & Conditions</li>
        <li>User Guide</li>
        <li>Support Center</li>
        <li>Press Info</li>
    </ul>
  </div>

  <div>
  <h2>Company</h2>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact Us</li>
    </ul>
  </div>
</div>



<div className='footer4'>
    <h2>Get In Touch</h2>
    <p>Stay connected with us and know the latest updates about our services through various social media.</p>
    <div>
       <FaFacebookF/>
       <BsTwitter/>
       <AiFillInstagram/>
       <FaTelegramPlane/>
    </div>
</div>
</div>

<hr />

<p className='copy'>2023 All Rights Reserved.
Vesta by <span>Y.B. UBAH</span>
</p>

    </div>
  )
}

export default Footer