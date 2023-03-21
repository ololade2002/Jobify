
import React from 'react';
import './Trust.css';
import img1 from '../../../Asset/Img/HeroLogo.png';
import img2 from '../../../Asset/Img/MicrosoftLogo.png';
import img3 from '../../../Asset/Img/UIPathLogo.png';
import img4 from '../../../Asset/Img/GoogleLogo.png';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Trust = () => {
 
 const mainRef = useRef();
 const logoRef = useRef();

 useLayoutEffect(()=> {

  const mainEl = mainRef.current;
 const logoEl = logoRef.current;


  gsap.registerPlugin(ScrollTrigger)
 const tl = gsap.timeline({
   scrollTrigger: {
     trigger:mainEl,
      scrub:true,
     pin:true,
     markers:true,
     
    }
  })   

  tl
  .addLabel('my-label')
  .fromTo(mainEl.querySelector(".trust-text"),{opacity:0}, {opacity:1}, 'my-label')
  .fromTo(logoEl.querySelector('.logo-1'),{opacity:0, y:50},{opacity:1,y:0},'my-label')
  .fromTo(logoEl.querySelector('.logo-2'),{opacity:0, y:-50},{opacity:1,y:0},'my-label')
  .fromTo(logoEl.querySelector('.logo-3'),{opacity:0, y:50},{opacity:1,y:0},'my-label')
  .fromTo(logoEl.querySelector('.logo-4'),{opacity:0, y:-50},{opacity:1,y:0},'my-label')
 
  return () => tl.kill();
  },[])


  return (

   <div className="trust"  ref={mainRef} >
    <h2 className='trust-text'>Trusted by 500+ agencies and companies</h2>
     <div className="trust-body" ref={logoRef}>
        <img className='logo-1' src={img1} alt="" />
        <img className='logo-2' src={img2} alt="" />
        <img className='logo-3' src={img3} alt="" />
        <img className='logo-4' src={img4} alt="" />
       
     </div>
    
   </div>
  )
}

export default Trust;

