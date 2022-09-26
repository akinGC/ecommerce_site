import { useEffect } from "react";
import { useState } from "react";
import Context from "../UI/Context";
import mainArray from './Array'
function Contextprovide(props) {
 
  const[showcrt,setcart]= useState(false)
  const [getArry,setArry]=useState([])
  const[showalb,setalb]= useState(false)
  const[isLoggedIn,setIsLoggedIn]= useState(false)
  const [token,setoken]=useState(localStorage.getItem('idToken'))
  function updtoken(e){
    setoken(e)
  }
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
  
  useEffect(()=>{
    if(token==''){
      setIsLoggedIn(false)
    }
    else{
      setIsLoggedIn(true)
    }
  },[])
   const value =  {getArry:getArry,
        updateArry:updateArry,
        mainArray:mainArray,
        updateshwcrt:updateshwcrt,
        showcrt:showcrt,
        clear:clear,
        updtalb:updtalb,
        showalb:showalb,
        updtoken:updtoken,
        isLoggedIn:isLoggedIn,
        setIsLoggedIn:setIsLoggedIn

     
      
      }
    return ( 
      
        <Context.Provider value={value}>{props.children}
        </Context.Provider>
     );
}

export default Contextprovide;