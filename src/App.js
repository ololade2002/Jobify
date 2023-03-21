
import './App.css';
import HomePage from './Component/HomePage/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from './Component/Auth/Signin/Signin';
import Signup from './Component/Auth/Signup/Signup';
import { AuthContextProvider } from './Context/AuthContext';
//import About from './Component/Dashboard/Dashboard';
import Protect from './Component/Protect';
import Account from './Component/Dashboard/Account/Account';
import FindJobs from './Component/Dashboard/FindJobs/FindJobs';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <AuthContextProvider>
      <Routes>
    <Route path='/' element={ <HomePage/> }/>
    <Route path='/signin' element={ <Signin/> } />
    <Route path='/signup' element={ <Signup/> } />
    <Route path='/about' element={ <Protect><Account/></Protect> } />
    <Route path='/about' element={ <Dashboard/> } />
    <Route path='/findjobs' element={ <FindJobs/> }  />
   </Routes>
      </AuthContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
