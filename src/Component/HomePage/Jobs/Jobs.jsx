
import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.jsx';
import './Jobs.css';
import Briefcase from '../../../Asset/svg/Briefcase.jsx';
import google from '../../../Asset/Img/jobssection/google.svg';
import airbnb from '../../../Asset/Img/jobssection/airbnb.svg';
import dribble   from '../../../Asset/Img/jobssection/dribble.svg'
import  behance  from '../../../Asset/Img/jobssection/behance.svg';
import ig  from '../../../Asset/Img/jobssection/instagram.svg';
import fb  from '../../../Asset/Img/jobssection/facebook.svg';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Jobs = () => {

const mainRef = useRef();
const jobCardRef = useRef();


useLayoutEffect(()=> {

const mainEl = mainRef.current;
const jobCardEl = jobCardRef.current;


gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger:mainEl,
    scrub:true,
    pin:true,
    pinSpacer:true,
    start:'20% top',
    end: `=+${mainEl.offsetHeight * 2}`,
    markers:true,
    delay:2,
  }
})

tl
.addLabel('job-section')
.fromTo(jobCardEl.querySelector('.jp1'),{rotate:30,y:30,x:200},{scale:1,opacity:1,rotate:0,y:0,x:0,},'job-section')
.fromTo(jobCardEl.querySelector('.jp2'),{rotate:60,y:150,x:-30},{scale:1,opacity:1,rotate:0,y:0,x:0,},'job-section')
.fromTo(jobCardEl.querySelector('.jp3'),{rotate:-60,y:70,x:-200},{scale:1,opacity:1,rotate:0,y:0,x:0,},'job-section')
.fromTo(jobCardEl.querySelector('.jp4'),{rotate:60,y:-30,x:200},{scale:1,opacity:1,rotate:0,y:0,x:0,},'job-section')
.fromTo(jobCardEl.querySelector('.jp5'),{rotate:-30,y:-30,x:-200},{scale:1,opacity:1,rotate:0,y:0,x:0,},'job-section')
.fromTo(jobCardEl.querySelector('.jp6'),{rotate:-30,y:-30,x:-200},{scale:1,opacity:1,rotate:0,y:0,x:0,},'job-section')
.fromTo(mainEl.querySelector('.jobBtn2'),{y:-60},{y:0,ease:'bounce'},'job-section')


return () => tl.kill();


},[])

  return (
  <div className="jobs" ref={mainRef} >
    <h2>Latest Popular <span>Jobs</span></h2>
   <ToggleSwitch className='text1' />
 
 <div className="job-body"  ref={jobCardRef}>
    
        <div className="job-preview jp1" >
        <div className='job1'>
            <img src={google} alt="" />
            <div className="job-text">
                <h3>Google</h3>
                <p>Lagos,Nigeria</p>
            </div>
        </div>
        <div className='job2'>
            <h3>Software Engineer</h3>
            <p><span><Briefcase/></span> Full Time </p>
        </div>
        <button className='jobBtn'>Apply</button>
        </div>

        <div className="job-preview jp2" >
        <div className='job1'>
            <img src={airbnb} alt="" />
            <div className="job-text">
                <h3>AirBnb</h3>
                <p>Lagos,Nigeria</p>
            </div>
        </div>
        <div className='job2'>
            <h3>Graphics Designer</h3>
            <p><span><Briefcase/></span> Full Time </p>
        </div>
        <button className='jobBtn'>Apply</button>
        </div>

        <div className="job-preview jp3" >
        <div className='job1'>
            <img src={dribble} alt="" />
            <div className="job-text">
                <h3>Dribble</h3>
                <p>Lagos,Nigeria</p>
            </div>
        </div>
        <div className='job2'>
            <h3>Senior Developer</h3>
            <p><span><Briefcase/></span> Full Time </p>
        </div>
        <button className='jobBtn'>Apply</button>
        </div>

        <div className="job-preview jp4" >
        <div className='job1'>
            <img src={behance} alt="" />
            <div className="job-text">
                <h3>Behance</h3>
                <p>Lagos,Nigeria</p>
            </div>
        </div>
        <div className='job2'>
            <h3>Frontend developer</h3>
            <p><span><Briefcase/></span> Full Time </p>
        </div>
        <button className='jobBtn'>Apply</button>
        </div>

        <div className="job-preview jp5" >
        <div className='job1'>
            <img src={ig} alt="" />
            <div className="job-text">
                <h3>Instagram</h3>
                <p>Lagos,Nigeria</p>
            </div>
        </div>
        <div className='job2'>
            <h3>Backend Developer</h3>
            <p><span><Briefcase/></span> Full Time </p>
        </div>
        <button className='jobBtn'>Apply</button>
        </div>

        <div className="job-preview jp6" >
        <div className='job1'>
            <img src={fb} alt="" />
            <div className="job-text">
                <h3>Facebook</h3>
                <p>Lagos,Nigeria</p>
            </div>
        </div>
        <div className='job2'>
            <h3>UI/UX Designer</h3>
            <p><span><Briefcase/></span> Full Time </p>
        </div>
        <button className='jobBtn'>Apply</button>
        </div>
   
<button  className='jobBtn2'>Find More Jobs </button>
 </div>


  </div>
  )
}

export default Jobs;