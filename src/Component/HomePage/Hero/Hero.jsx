
import React from 'react';
import './Hero.css';
import '../../../Asset/svg/Briefcase.jsx';
import { HiBriefcase } from "react-icons/hi";
import {GoLocation} from 'react-icons/go'
import { GoSearch} from 'react-icons/go';
import woman from '../../../Asset/Img/woman.png';
import microsoft from '../../../Asset/Img/microsoft.svg';
import Envelope from '../../../Asset/svg/Envelope.jsx';
import Briefcase from '../../../Asset/svg/Briefcase.jsx';
import BadgeCheck from '../../../Asset/svg/BadgeCheck.jsx';

const Hero = () => {
  return (
   <div className="hero">

 <div className='hero-l' >
    <h2>Find Your Dream Job With Us</h2>
    <p>With us the job search app, you’re always one click away from your dream job, search for 
        your new job from the comfort of your home.</p>
        <div className='input-icons' >
          <div>  <i><HiBriefcase/></i>
      <input type="text"  placeholder="Job Title" /></div>

           <div> <i><GoLocation/></i>
        <input type="text"  placeholder="Location" /></div>

        <button className="search" >
            <i><GoSearch/></i>
            <span> Search</span>
        </button>
        </div>
 </div>


 <div className='hero-r' >

  <div className=''>
    <div className="circle"></div>
    <div className='box1'>
    <img src={microsoft} alt="" />
    <div>
        <h3>UI/UX Designer</h3>
       <div className="bottom">
        <p>Microsoft</p>
        <button className='apply'>Apply</button>
       </div>
    </div>
</div>
  </div>

  <div className=''>
    <div className="circle2"></div>
    <div className='box2'>
  <Envelope className='svg1'/>
    <div>
        <h3>Congratulations <span><BadgeCheck/></span></h3>
        <p>You just got the job</p>
    </div>
</div>
  </div>

  <div className=''>
    <div className="circle3"></div>
    <div className='box3'>
   <Briefcase className='svg2'/>
    <h3>180k+</h3>
    <p>Job Vacancies</p>
</div>

  </div>

<img src={woman}  className=' woman-img' alt="" />

 </div>


   </div>
  )
}

export default Hero;

