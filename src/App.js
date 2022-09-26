
import { useState } from 'react';
import './App.css';
import Cardlist from './components/home/Cardlist';
import Footer from './components/UI/Footer';
import Generics from './components/UI/Generics';
import Nav from './components/UI/Nav';


import Aboutcnt from './components/about/Aboutcnt';
import Tours from './components/store/Tours';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import View from './components/store/View';
import Context from './components/UI/Context';
import Login from './components/Logincomp/Login';
import { Fragment } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';

function App() {
 
 const auth = useContext(Context)

 async   function fetcholdz(){
  const resp =   await   fetch(`${auth.url}/${auth.usermail}`)
  const  data = await resp.json()
   
   auth.clear(data)

   }
  //  fetcholdz()

  return (
  
    <Fragment>
<Nav/> 
        <Generics /> 
        <Routes>
          <Route path='/store' element={auth.isLoggedIn ?<Cardlist/>:<Login/>}/>
          <Route path='/' element={<Tours/>}/>
          <Route path='/login' element={ auth.isLoggedIn ?<Tours/>:<Login/>}/>
          <Route path='/about' element={<Aboutcnt/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/view/:id' element={<View/>}/>
        </Routes>
      
      <Footer/>
      </Fragment>
      
 
  );
}

export default App;
