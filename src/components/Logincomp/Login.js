import { useState } from 'react';
import { useRef } from 'react';
import './Login.css'
import Context from '../UI/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const nav = useNavigate()
    const auth = useContext(Context)
    const mailref = useRef()
    const passref = useRef()
    const [load,setLoad]=useState(false)
    function sendreq(e){
        setLoad(true)
        e.preventDefault()
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlpCleMXXgnN35xDSjEfIsKsfLOS6wNVM',{
            method:'POST',
            body:JSON.stringify({
                email:mailref.current.value,
                password:passref.current.value,
                returnSecureToken:true
            }), 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((resp)=>{
            setLoad(false)
            if(resp.ok){
                return resp.json().then((data)=>{
                    // console.log(data.idToken)
                    localStorage.setItem('idToken',data.idToken)
                    auth.updtoken(data.idToken)
                    auth.setIsLoggedIn(true)
                    nav('/store')

                })
            }
            else{
                return resp.json().then((data)=>{
                   alert(data.error.message)
                })
            }
        })

    }
    return ( 
        <div className='log_out'>
            <form className='log_frm'>
            <span className='lof_title'>LOGIN</span>
            <div className='log_mail'>
                <span className='log_name'>Email</span>
                <input type='email' ref={mailref}></input>
            </div>
            <div className='log_pass'>
                <span className='log_name'>Password</span>
                <input type='text'ref={passref}></input>
            </div>
            {
                (!load)?<button className='log_btn' onClick={sendreq}>Login</button>:
                <p className='log_load'>Please wait...</p>
            }
            
           
        </form>
        </div>
     );
}

export default Login;