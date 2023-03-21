
import React from 'react';
import Main from '../HomePage/Main/Main.jsx';
import Trust from '../HomePage/Trust/Trust.jsx'
import Work from '../HomePage/Work/Work.jsx';
import Jobs from '../HomePage/Jobs/Jobs.jsx';
import Why from '../HomePage/Why/Why.jsx';
import Jobcategory from '../HomePage/Jobcategory/Jobctegory.jsx';
import Testimonial from '../HomePage/Testimonial/Testimonial.jsx';
import Newsletter from '../HomePage/Newsletter/Newsletter.jsx';
import Footer from '../HomePage/Footer/Footer.jsx';

function HomePage() {
  return (
   <div className="homepage">
    <Main/>
    <Trust/>
    <Work/>
    <Jobs/>
    <Why/>
     <Jobcategory/>
     <Testimonial/>
     <Newsletter/>
     <Footer/>
   </div>
  )
}

export default HomePage