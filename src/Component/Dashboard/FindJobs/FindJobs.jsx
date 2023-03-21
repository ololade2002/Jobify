
import React from 'react';
import Header from '../Header/Header';
import { BsFilter } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import './FindJobs.css';
import { findjobData } from '../../../Data/Data';
//import Briefcase from '../../../Asset/svg/Briefcase';
import FindCard from './FindCard';

const FindJobs = () => {
  return (
    <div className="find">
        <Header/>
       <div className="find-body">

<form >
    <input type="text" placeholder='e.g. Software Engineer' />
    <input type="text" placeholder='e.g. Lagos' />
    <button className='s-btn'><BsSearch/> Search</button>
    <button className='f-btn'><BsFilter/> Filter</button>
</form>

<div className="find-cards">
    {findjobData.map((find,index)=> {
       return (
        <div className="find-preview" key={index}>
    <FindCard  
    img={find.img}
    location={find.location}
    position={find.position} 
    job={find.job}
    time={find.time}
    text={find.text}
    aboutj={find.aboutj}
    aboutt={find.aboutt}
    />
        </div>
       )
})}
</div>

       </div>
    </div>
  )
}

export default FindJobs;