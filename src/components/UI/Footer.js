import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube,faSpotify,faFacebook} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
function Footer() {
    return (  
        <div className='foot_cvr'>
            <span className='foot_txt'>The Generics</span>
            <div className='foot_icons_cvr'>
                <a href='https://www.youtube.com/'target='_blank'><FontAwesomeIcon style={{color:'red'}} className='foot_icon' icon={faYoutube}></FontAwesomeIcon></a>
               <a href='https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F__noul__%3Fl2l%3D1%26nd%3D1&_locale=en-IN'target='_blank'>
               <FontAwesomeIcon className='foot_icon'style={{color:'green'}} icon={faSpotify}></FontAwesomeIcon>
               </a>
                <a href='https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804944%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804944&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9299111%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw7KqZBhCBARIsAI-fTKKSNH8jJYppOiXbgTL5pfdVnJmpamduiDoPx2_H4dRdsUYMCLooPZAaAquoEALw_wcB'target='_blank'>
                <FontAwesomeIcon className='foot_icon'style={{color:'blue'}} icon={faFacebook}></FontAwesomeIcon>  </a>
            </div>
        </div>
    );
}

export default Footer
