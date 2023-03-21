
import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
  <div className="news">
   <div className="news-body">
   <h3>Subscribe to get latest job alerts .</h3>
    <div>
        <input type="email" placeholder='Enter Email' />
        <button className="newsBtn">Subscribe</button>
    </div>
   </div>
  </div>
  )
}

export default Newsletter;