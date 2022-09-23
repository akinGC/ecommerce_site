import { useState } from 'react';
import './Contact.css'
function Contact() {

    const [frm,setFrm]=useState({
        name:'',
        email:'',
        number:null
    })
    
    function stchngd(e){
        switch (e.target.name) {
            case 'name':
                setFrm({...frm,name:e.target.value})
                break;
            case 'email':
                setFrm({...frm,email:e.target.value})
                break;
            case 'number':
                setFrm({...frm,number:parseInt(e.target.value)})
                break;
                    
            default:
                break
                ;
        }
       
    }

    async function sbmtfrm(){
        
        const data = await fetch('https://react-2fea7-default-rtdb.asia-southeast1.firebasedatabasse.app/CustomerDB.json',{
            method:'POST',
            body:JSON.stringify(frm),
            headers: {
                'Content-Type': 'application/json',
              }
        })
        setFrm({
            name:'',
            email:'',
            number:''
        })
    }

    return ( 
       <div className='contact_whole'>
        <div className='contact_name cnttg'>
            <label for='name'>Name</label>
            <input type='text'name='name'onChange={stchngd}value={frm.name}></input>
        </div>
        <div className='contact_mail cnttg'>
            <label for='email'>Email ID</label>
            <input type='email'name='email'onChange={stchngd}value={frm.email}></input>
        </div>
        <div className='contact_NUMB cnttg'>
            <label for='number'>Phone Number</label>
            <input type='number'name='number'onChange={stchngd}value={frm.number}></input>
        </div>
        <button className='contact_btn' onClick={sbmtfrm}>Submit</button>
       </div>
     );
}

export default Contact;