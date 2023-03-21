
import React from 'react';
import { useState } from 'react';
import {motion,AnimateSharedLayout} from 'framer-motion';
import Briefcase from '../../../Asset/svg/Briefcase';
import './FIndCard.css';
import { HiOutlineX } from 'react-icons/hi';

//Parent Card
const FindCard = (props) => {

 const [expanded,setExpanded] = useState(false)   

  return (
 <AnimateSharedLayout>
    {expanded ?
     <ExpandedCard param={props} setExpanded={()=> setExpanded(false)} /> : 
    <CompactCard param={props} setExpanded={()=> setExpanded(true)} />  }
 </AnimateSharedLayout>
  )
};

//Compact Card
function CompactCard({param,setExpanded}) {
    return (
        <motion.div className='compactCard' layoutId='expandableCard' >
<div className="find1">
        <img src={param.img} alt="" />
        <div className="find-text">
            <h3>{param.job}</h3>
            <p>{param.location}</p>
        </div>
    </div>
    <div className="find2">
        <h3>{param.position}</h3>
        <p><span><Briefcase/></span>{param.time}</p>
    </div>
    <div className='find3'>
        <p>{param.text}</p>
    </div>
    <button onClick={setExpanded} className="findbtn">Expand</button>
        </motion.div>
    )
}


//Expandable Card

function ExpandedCard({param,setExpanded}) {
    return (
        <motion.div className="ExpandedCard">

<div>
    <div className="find1">
        <img src={param.img} alt="" />
        <div className="find-text">
            <h3>{param.job}</h3>
            <p>{param.location}</p>
        </div>
            <div><HiOutlineX onClick={setExpanded}/></div>
    </div>

          <div className="find2">
          <h3>{param.position}</h3>
        <p><span><Briefcase/></span>{param.time}</p>
            </div>  

          <div className="find4">
            <h3>About The Job</h3>
            <p>{param.aboutj}</p>
          </div>

          <div className="find5">
            <h3>About {param.job}</h3>
            <p>{param.aboutt}</p>
          </div>
</div>

        </motion.div>
    )
}

export default FindCard;