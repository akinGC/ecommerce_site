
import { useState } from 'react';
import './App.css';
import Cardlist from './components/home/Cardlist';
import Footer from './components/UI/Footer';
import Generics from './components/UI/Generics';
import Nav from './components/UI/Nav';
import Context from './components/UI/Context';
import mainArray from './components/resource/Array'
import Aboutcnt from './components/about/Aboutcnt';
import Tours from './components/store/Tours';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import View from './components/store/View';
function App() {
  
  const[showalb,setalb]= useState(false)
  const[showcrt,setcart]= useState(false)
  const [getArry,setArry]=useState([])

  function updtalb(e){
setalb(e)
  }
  function updateshwcrt(e){
    setcart(e)
  }
  function clear(e){
    setArry(e)
  }
  function updateArry(e){
      setArry([...getArry,e])
  }
  return (
  
    <Context.Provider value={
      {getArry:getArry,
        updateArry:updateArry,
        mainArray:mainArray,
        updateshwcrt:updateshwcrt,
        showcrt:showcrt,
        clear:clear,
        updtalb:updtalb
      
      }
    }>
<Nav/> 
        <Generics val={showalb}/> 
        <Routes>
          <Route path='/' element={<Cardlist/>}/>
          <Route path='/home' element={<Tours/>}/>
          <Route path='/about' element={<Aboutcnt/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/view/:id' element={<View/>}/>
        </Routes>
      
      <Footer/>
      </Context.Provider>
 
  );
}

export default App;
