import { NavLink } from 'react-router-dom';
import Cartitm from '../CART/Cartitm';
import './Nav.css'
import Context from './Context';
import { useContext } from 'react';
function Nav() {
    const auth = useContext(Context)
    function updalb(e){
        if(e.target.id=='true'){
            auth.updtalb(true)
        }
        else{
           auth.updtalb(false)
        }
   
    }
    return ( 
        <nav className='ecom_nav'>
            <div className='ecom_nav_maincnt'>
              <NavLink to='/' style={{textDecoration:'none'}}><span onClick={updalb} id='true' className='nav_mncnt_text'>HOME</span></NavLink>
              {!auth.isLoggedIn && <NavLink to='/login' style={{textDecoration:'none'}}><span onClick={updalb}  className='nav_mncnt_text'>LOGIN</span></NavLink>}
{      auth.isLoggedIn &&        <NavLink to='/store'style={{textDecoration:'none'}}><span  onClick={updalb} className='nav_mncnt_text'>STORE</span></NavLink>}
              <NavLink to='/about'style={{textDecoration:'none'}}><span  onClick={updalb} className='nav_mncnt_text'>ABOUT</span></NavLink>
              <NavLink to='/contact'style={{textDecoration:'none'}}><span  onClick={updalb} className='nav_mncnt_text'>Contact US</span></NavLink>
            </div>
            <div className='ecom_nav_crtcnt'>
                <Cartitm/> 
            </div>
        </nav>
     );
}
export default Nav;