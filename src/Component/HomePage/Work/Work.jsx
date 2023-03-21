
import React, { useLayoutEffect } from 'react';
import './Work.css';
import User from '../../../Asset/svg/User.jsx';
import CloudUpload from '../../../Asset/svg/CloudUpload.jsx';
import Search from '../../../Asset/svg/Search.jsx';
import CheckCircle from '../../../Asset/svg/CheckCircle.jsx';
import { useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Work = () => {

const textRef = useRef();
const boxesRef = useRef();
const mainnRef = useRef();
useLayoutEffect(()=> {
const textEl = textRef.current;
const boxesEl = boxesRef.current;
const mainEl = mainnRef.current;

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger : {
        trigger:mainEl,
        scrub:1,
        pin:true,
        pinSpacing:true,
        start: "40% center",
        end :`=+${mainEl.offsetHeight }`,
     markers:true,
    }
})
tl
.addLabel('work-body')
.fromTo(textEl.querySelector('.text1'),{y:-30},{opacity:1, y:0}, 'work-body')
.fromTo(textEl.querySelector('.text2'),{x:50},{opacity:1, x:0}, 'work-body')
.fromTo(textEl.querySelector('.text3'),{x:-50},{opacity:1, x:0}, 'work-body')
.fromTo(boxesEl.querySelector('.card-1'),{y:-70},{opacity:1,y:-20},'work-body')
.fromTo(boxesEl.querySelector('.card-2'),{x:50},{opacity:1,x:0},'work-body')
.fromTo(boxesEl.querySelector('.card-3'),{x:-50, y:-50},{opacity:1,x:0,y:-20},'work-body')
.fromTo(boxesEl.querySelector('.card-4'),{y:50},{opacity:1,y:0},'work-body')

return () => tl.kill();

},[])

  return (
  <div className="work" ref={mainnRef} >
   <div className="work-body">
   <div className="work-l" ref={textRef} >
    <h1 className='text1'>How it works?</h1>
    <h2 className='text2'>Follow <span>4</span> easy steps</h2>
    <p className='text3'>Follow this few step to get started and get your dream job .</p>
   </div>

   <div className="work-r" ref={boxesRef}  >
   <div className="first">
    <div className='card-1'>
        <User className='usericon'/>
        <h3>Create Account.</h3>
        <p>First you have to create account .</p>
    </div>
    <div className='card-2'>
        <CloudUpload className='cloudicon'/>
        <h3>Upload CV/Resume</h3>
        <p>For a job you have to upload your best cv or resume.</p>
    </div>
   </div>

   <div className="second">
    <div className='card-3'>
        <Search className='searchicon' />
    <h3>Search Job</h3>
    <p>Find your next big job using search.</p>
    </div>

    <div className='card-4'>
        <CheckCircle className='checkicon' />
    <h3>Apply</h3>
    <p>Finally you apply for your dream job</p>
    </div>
   </div>
   </div>

   </div>
  </div>
  )
}

export default Work;



