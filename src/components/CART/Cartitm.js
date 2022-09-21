import { Fragment, useContext, useEffect, useState } from 'react';
import './Cartitm.css'
import Context from '../UI/Context';
function Cartitm() {
    const auth = useContext(Context)

function showcrt(){
    auth.updateshwcrt(true)
}


    return ( 
        <Fragment>
        
        <div className='eco_nav_crt' onClick={showcrt}>
        <span className='eco_nav_crt_txt'>Cart</span>
        <span className='eco_nav_count'>{auth.getArry.length}</span>
        </div>
        </Fragment>
     );
}

export default Cartitm;