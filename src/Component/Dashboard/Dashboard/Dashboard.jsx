

import React from 'react';
import { UserAuth } from '../../../Context/AuthContext';
import './Dashboard.css';
import { appliedData, dashboardData } from '../../../Data/Data';
import { useState } from 'react';
import wave from '../../../Asset/Img/jobssection/wave-removebg-preview.png';

const Dashboard = () => {

  const {user} = UserAuth();
  const [selected,setSelected] = useState(1)

  return (
   <div className="dashboard">
    
    <h2> Welcome {user?.displayName} <img src={wave} alt="" /> </h2>
    <div className="dashboard-cards">
      {dashboardData.map((dash,index)=> (
        <div className="dashboard-preview" key={index}>
       <h3>{dash.title}</h3>
       <h1>{dash.sign}</h1>
       <p>{dash.text}</p>
        </div>
      ))}
    </div>
    <div className="applied">
    {appliedData.map((app,index)=> (
      <div className={selected === index ? 'app-active' : 'app-preview'} 
      onClick={()=> setSelected(index)} key={index}>
   <button>{app.text}</button>
      </div>
    ))}
    </div>
    <p className='load'>Loading....</p>
   </div>
  )
}

export default Dashboard