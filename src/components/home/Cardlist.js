import Carditm from './Carditm';
import arry from '../resource/Array'
import './Carditm.css'
import { useContext, useState } from 'react';
import Cartcnt from '../CART/Cartcnt';
import Context from '../UI/Context';
function Cardlist() {
    const auth = useContext(Context)
    const [popup,setpopup]=useState(false)
    const [gettitle,setitle]=useState('')
    function shwcrt(){
auth.updateshwcrt(true)
    }
    function updatepopup(e){
       setitle(e)
        setpopup(true)
        setTimeout(() => {
            setpopup(false)
        }, 2000);
    }
    return ( 
      <div>
            <div className='crd_cvr_music'>
            <span className='crdlst_hdg'>Music</span>
                <div className='crdhold'>
                {
        arry.map((itm)=>(
            <Carditm itm={itm} updatepopup={updatepopup}/>
        ))
       }
                </div>
             <div className='viewcart' onClick={shwcrt}>See Cart</div>
             {(popup && <div className='succss_msg'>Added 1 <span style={{color:'red'}}>{gettitle}</span> to your cart</div>)}
            </div>
            <div className='cartshow'>
                <Cartcnt/>
            </div>
            </div>
     );
}

export default Cardlist;