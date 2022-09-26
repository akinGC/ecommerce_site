import './Generics.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import Context from './Context';
import { useContext } from 'react';
function Generics(props) {
  const auth = useContext(Context)
  console.log(auth.showcrt)
const dispstate = auth.showalb;


useEffect(()=>{

    let targetele=document.getElementById('eco_gen_cvr');
    (dispstate)?targetele.style.height='55vh':
    targetele.style.height='22vh'

},[dispstate])
    return ( 
      <div className='eco_gen_cvr'id='eco_gen_cvr'>
        <span className='gen_cvr_hdg'>The Generics</span>
       <div className='gen_cvr_albm'id='gen_cvr_albm'>
            <span className='cvr_albm_txt'>Get our Latest Album</span>
            <span><FontAwesomeIcon className='cvr_albm_icon' style={{height:'15vh',width:'5vw'}}  icon={faCirclePlay}></FontAwesomeIcon></span>
        </div>
      </div>
     );
}

export default Generics;