import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import { useState } from 'react';
import { PrivateRoute } from './Components/PrivateRoute';

function App() {
  
const[isLoggedIn,setISLoggedIn]=useState(false);

  return (
    <div className="App ">
   <div className='w-screen h-screen bg-black flex flex-col'>
    <NavBar isLoggedIn={isLoggedIn} setISLoggedIn={setISLoggedIn} />

    <Routes>
      <Route path="/" element={<Home setISLoggedIn={setISLoggedIn}/>}/>
      <Route path="/login" element={<Login setISLoggedIn={setISLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setISLoggedIn={setISLoggedIn}/>}/>
     <Route path="/products" element={<Products setISLoggedIn={setISLoggedIn}/>}/>
     <Route path="/contact" element={<Contact setISLoggedIn={setISLoggedIn}/>}/>
      <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
     }/>
      
    </Routes>
   
   </div>
    </div>
  );
}

export default App;
