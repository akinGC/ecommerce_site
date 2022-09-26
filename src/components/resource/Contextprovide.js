import { useEffect } from "react";
import { useState } from "react";
import Context from "../UI/Context";
import mainArray from './Array'
function Contextprovide(props) {
  // ecom@gmail.com / com1234
  const[showcrt,setcart]= useState(false)
  const [getArry,setArry]=useState([])
  const[showalb,setalb]= useState(false)
  const[isLoggedIn,setIsLoggedIn]= useState(false)
  const [token,setoken]=useState(localStorage.getItem('idToken'))
  const [usermail,setUsermail]=useState('ecomgmailcom')
  const [url,seturl]=useState('https://crudcrud.com/api/9ec04a5910604235ba655e7613a8c60e')

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
    
    if(token=='' || token==null){
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
        setIsLoggedIn:setIsLoggedIn,
        usermail:usermail,
        setUsermail:setUsermail,
        url:url


     
      
      }
    return ( 
      
        <Context.Provider value={value}>{props.children}
        </Context.Provider>
     );
}

export default Contextprovide;