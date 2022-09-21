import Cartitm from '../CART/Cartitm';
import './Nav.css'
function Nav() {
    return ( 
        <nav className='ecom_nav'>
            <div className='ecom_nav_maincnt'>
                <span className='nav_mncnt_text'>HOME</span>
                <span className='nav_mncnt_text'>STORE</span>
                <span className='nav_mncnt_text'>ABOUT</span>
            </div>
            <div className='ecom_nav_crtcnt'>
                <Cartitm/>
            </div>
        </nav>
     );
}

export default Nav;