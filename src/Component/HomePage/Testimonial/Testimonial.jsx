

import React from 'react'
import './Testimonial.css';
import {AiFillStar} from 'react-icons/ai';
import img1 from '../../../Asset/Img/whytrustedsection/smallimage6.png';
import img2 from '../../../Asset/Img/whytrustedsection/smallimage5.png';
import img4 from '../../../Asset/Img/whytrustedsection/smallimage4.png';
import img5 from '../../../Asset/Img/whytrustedsection/smallimage3.png';
import img6 from '../../../Asset/Img/whytrustedsection/smallimage2.png';
import img3 from '../../../Asset/Img/whytrustedsection/smallimage1.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';

const Testimonial = () => {

const mainRef = useRef();
const textRef = useRef();
const boxRef = useRef();

useLayoutEffect(()=> {

const mainEl = mainRef.current;
const textEl =textRef.current;
const boxEl = boxRef.current;

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger:mainEl,
        pin:true,
        scrub:true,
    }
})

tl
.addLabel('testimonial')
.fromTo(textEl.querySelector('.text-t1'),{x:-50,opacity:0},{x:0,opacity:1},'testimonial')
.fromTo(textEl.querySelector('.text-t2'),{x:50,opacity:0},{x:0,opacity:1},'testimonial')
.fromTo(boxEl.querySelector('.testimonial-body1'),{scale:.9},{scale:1,ease:'ease-in'},'testimonial')
.fromTo(boxEl.querySelector('.testimonial-body2'),{scale:.9},{scale:1,ease:'ease-in'},'testimonial')
.fromTo(boxEl.querySelector('.testimonial-body3'),{scale:.9},{scale:1,ease:'ease-in'},'testimonial')
.fromTo(boxEl.querySelector('.testimonial-body4'),{scale:.9},{scale:1,ease:'ease-in'},'testimonial')
.fromTo(boxEl.querySelector('.testimonial-body5'),{scale:.9},{scale:1,ease:'ease-in'},'testimonial')
.fromTo(boxEl.querySelector('.testimonial-body6'),{scale:.9},{scale:1,ease:'ease-in'},'testimonial')

return () => tl.kill();

},[])


  return (
   <div className="testimonial" ref={mainRef} >
  <div className="text-t" ref={textRef} >
    <h2 className='text-t1'>Responses From Our Job Holders</h2>
    <p className='text-t2'>Various responses we get that reflect 
        the products and services we provide to job seekers.</p>
  </div>
  <div className="testimonial-body" ref={boxRef} >
    
  <div className="testimonial-body1">
<div className='tb1'>
    <img src={img1} alt="" />
    <div className="subheading">
        <h2>Mariam Yusuf</h2>
        <p>Student</p>
    </div></div>

    <div className="tb2">
        <h3>Job Holder</h3>
        <div className="rate">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
    </div>

<div className="tb3">
    <p>“ This is the best job searching site 
        i’ve ever seen i found my drea job through this site. ”</p>
</div>
</div>

<div className="testimonial-body2">
<div className='tb1'>
    <img src={img2} alt="" />
    <div className="subheading">
        <h2>Mariam Yusuf</h2>
        <p>Student</p>
    </div></div>

    <div className="tb2">
        <h3>Job Holder</h3>
        <div className="rate">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
    </div>

<div className="tb3">
    <p>“ This is the best job searching site 
        i’ve ever seen i found my drea job through this site. ”</p>
</div>
</div>

<div className="testimonial-body3">
<div className='tb1'>
    <img src={img3} alt="" />
    <div className="subheading">
        <h2>Mariam Yusuf</h2>
        <p>Student</p>
    </div></div>

    <div className="tb2">
        <h3>Job Holder</h3>
        <div className="rate">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
    </div>

<div className="tb3">
    <p>“ This is the best job searching site 
        i’ve ever seen i found my drea job through this site. ”</p>
</div>
</div>


<div className="testimonial-body4">
<div className='tb1'>
    <img src={img4} alt="" />
    <div className="subheading">
        <h2>Mariam Yusuf</h2>
        <p>Student</p>
    </div></div>

    <div className="tb2">
        <h3>Job Holder</h3>
        <div className="rate">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
    </div>

<div className="tb3">
    <p>“ This is the best job searching site 
        i’ve ever seen i found my drea job through this site. ”</p>
</div>

</div>

<div className="testimonial-body5">
<div className='tb1'>
    <img src={img5} alt="" />
    <div className="subheading">
        <h2>Mariam Yusuf</h2>
        <p>Student</p>
    </div></div>

    <div className="tb2">
        <h3>Job Holder</h3>
        <div className="rate">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
    </div>

<div className="tb3">
    <p>“ This is the best job searching site 
        i’ve ever seen i found my drea job through this site. ”</p>
</div>
</div>

<div className="testimonial-body6">
<div className='tb1'>
    <img src={img6} alt="" />
    <div className="subheading">
        <h2>Mariam Yusuf</h2>
        <p>Student</p>
    </div></div>


    <div className="tb2">
        <h3>Job Holder</h3>
        <div className="rate">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
    </div>

<div className="tb3">
    <p>“ This is the best job searching site 
        i’ve ever seen i found my drea job through this site. ”</p>
</div>
</div>


  </div>
   </div>
  )
}

export default Testimonial;