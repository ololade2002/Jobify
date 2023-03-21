

import React from 'react';
import './Jobcategory.css';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Jobctegory = () => {

const mainRef = useRef();
const headerRef = useRef();

useLayoutEffect(()=> {

const mainEl = mainRef.current;
const headerEl = headerRef.current;

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger:mainEl,
    scrub:true,
    pin:true,
    pinSpacing:true,
    markers:true,
  }
})

tl
.addLabel('categories')
.fromTo(mainEl.querySelector('.category-text'),{y:-50},{opacity:1,y:0},'categories')
.fromTo(mainEl.querySelector('.category-p'),{x:-50},{opacity:1,x:0},'categories')
.fromTo(headerEl.querySelector('.jc1'),{x:-70},{opacity:1,x:0},'categories')
.fromTo(headerEl.querySelector('.jc2'),{y:-70},{opacity:1,y:0},'categories')
.fromTo(headerEl.querySelector('.jc3'),{y:70},{opacity:1,y:0},'categories')
.fromTo(headerEl.querySelector('.jc4'),{x:-70},{opacity:1,x:0},'categories')
.fromTo(headerEl.querySelector('.jc5'),{x:70},{opacity:1,x:0},'categories')
.fromTo(headerEl.querySelector('.jc6'),{y:70},{opacity:1,y:0},'categories')
.fromTo(headerEl.querySelector('.jc7'),{y:-70},{opacity:1,y:0},'categories')
.fromTo(headerEl.querySelector('.jc-preview1'),{x:70},{opacity:1,x:0},'categories')

return () => tl.kill();

},[])

  return (
    <div className="category" ref={mainRef} >
        <h2 className='category-text'>browse jobs category</h2>
        <p className='category-p'>Browse through different job category and get your dream job</p>

<div className="category-body" ref={headerRef} >

   <div className="jc-preview jc1">
    <h3>UI/UX Design</h3>
    <p>50+ new jobs posted</p>
   </div>

   <div className="jc-preview jc2">
    <h3>Web Design</h3>
    <p>150+ new jobs posted</p>
   </div>

   <div className="jc-preview jc3">
    <h3>Sales Representative</h3>
    <p>50+ new jobs posted</p>
   </div>

   <div className="jc-preview jc4">
    <h3>General manager</h3>
    <p>120+ new jobs posted</p>
   </div>

   <div className="jc-preview jc5">
    <h3>Engineering</h3>
    <p>170+ new jobs posted</p>
   </div>

   <div className="jc-preview jc6">
    <h3>Administration</h3>
    <p>170+ new jobs posted</p>
   </div>

   <div className="jc-preview jc7">
    <h3>Manufacturing</h3>
    <p>30+ new jobs posted</p>
   </div>

   <div className="jc-preview jc-preview1">
    <h2>50+ more categories</h2>
   </div>
   
</div>

    </div>
  )
}

export default Jobctegory;