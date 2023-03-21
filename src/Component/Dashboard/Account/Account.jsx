
import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
//import FindJobs from '../FindJobs/FindJobs';
import Header from '../Header/Header';
import './Account.css';



const Account = () => {

  return (
   
   <div className="account">
  <Header/>
 <Dashboard/>
 
   </div>
   
  )
}

export default Account;






//import { UserAuth } from '../../../Context/AuthContext';
//   const {logOut,user} = UserAuth();
//    const handleSignOut = async () => {
//       try {
//          await logOut()
//       } catch (error) {
//          console.log(error)
//       }
//    }
{ /* <h2>Welcome {user?.displayName}</h2>
<button onClick={handleSignOut}>Log Out</button>*/  }