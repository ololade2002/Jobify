
import React from 'react';
import './Why.css';
import CheckCircle from '../../../Asset/svg/CheckCircle';
import img1 from '../../../Asset/Img/whytrustedsection/largeimage.png';
import img2 from '../../../Asset/Img/whytrustedsection/smallimage3.png';
import img3 from '../../../Asset/Img/whytrustedsection/smallimage1.png';
import img4 from '../../../Asset/Img/whytrustedsection/smallimage2.png';
import img5 from '../../../Asset/Img/whytrustedsection/smallimage5.png';
import img6 from '../../../Asset/Img/whytrustedsection/smallimage4.png';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Why = () => {

const mainRef = useRef();
const textRef = useRef();
const imgRef = useRef()
useLayoutEffect(()=> {
   const mainEl = mainRef.current;
   const textEl = textRef.current;
   const imgEl = imgRef.current;

   gsap.registerPlugin(ScrollTrigger);

   const tl = gsap.timeline({
      scrollTrigger : {
         trigger: mainEl,
         scrub:true,
         pin:true,
        markers:true,
      }
   });

tl 
.addLabel('why-section')
.fromTo(textEl.querySelector('.why1'),{x:-50},{x:0,opacity:1},'why-section')
.fromTo(textEl.querySelector('.why2'),{x:50},{x:0,opacity:1},'why-section')
.fromTo(textEl.querySelector('.why3'),{x:-50},{x:0,opacity:1},'why-section')
.fromTo(textEl.querySelector('.why4'),{x:50},{x:0,opacity:1},'why-section')
.fromTo(textEl.querySelector('.li'),{y:-50},{y:0,opacity:1},'why-section')
.fromTo(imgEl.querySelector('.images1'),{scale:0.5},{scale:1,opacity:1},'why-section')
.fromTo(imgEl.querySelector('.images2'),{rotate:180},{rotate:0,opacity:1},'why-section')
.fromTo(imgEl.querySelector('.images3'),{rotate:180},{rotate:0,opacity:1},'why-section')
.fromTo(imgEl.querySelector('.images4'),{rotate:180},{rotate:0,opacity:1},'why-section')
.fromTo(imgEl.querySelector('.images5'),{rotate:180},{rotate:0,opacity:1},'why-section')
.fromTo(imgEl.querySelector('.images6'),{rotate:180},{rotate:0,opacity:1},'why-section')


return () => tl.kill();

},[])

  return (
   <div className="why" ref={mainRef}>

       <div className="why-body">
       <div className="why-l" ref={imgRef}>

<img className='images1' src={img1} alt="" />
<img className='images2' src={img3} alt="" />
<img className='images3' src={img2} alt="" />
<img className='images4' src={img4} alt="" />
<img className='images5' src={img5} alt="" />
<img className='images6' src={img6} alt="" />

   </div>

   <div className="why-r" ref={textRef}>
       <h3 className='li'>Why we are trusted ?</h3>
       <h5>100k+ job seekers trust us for the following reasons .</h5>
<div className="why-text">
<div className='why1'>
 <CheckCircle className='ico'/>
 <p className=''>Trusted & Quality Job</p>
</div>
<div className="why2">
   <CheckCircle className='ico'/>
   <p className='li-2'>International Job</p>
</div>
<div className="why3">
   <CheckCircle className='ico'/>
   <p className='li-3'>Top Companies</p>
</div>
<div className="why4">
   <CheckCircle className='ico'/>
   <p className='li-4'>No Extra Charge</p>
</div>

</div>
<button className="whyBtn">Get Started</button>
   </div>
       </div>
    </div>
  )
}

export default Why