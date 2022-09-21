
import { useState } from 'react';
import './App.css';
import Cardlist from './components/home/Cardlist';
import Footer from './components/UI/Footer';
import Generics from './components/UI/Generics';
import Nav from './components/UI/Nav';
import Context from './components/UI/Context';
import mainArray from './components/resource/Array'
function App() {
  
  const[showalb,setalb]= useState(false)
  const[showcrt,setcart]= useState(false)
  const [getArry,setArry]=useState([])

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
        clear:clear
      
      }
    }>
      <Nav/>
        <Generics val={showalb}/>
      <Cardlist/>
      <Footer/>
      </Context.Provider>
 
  );
}

export default App;
