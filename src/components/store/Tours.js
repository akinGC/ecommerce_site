import './Tour.css'
import tour from '../resource/Tour'
function Tours() {
    return ( 
      <div className='tourcvr'>
        <span className='tourcvr_title'>TOURS</span>
{
    tour.map((itms)=>(
<div className='tourcvr_itm'>
            <span className='tourcvr_itm_dte tourcvr_itms'>{itms.date}</span>
            <span className='tourcvr_itm_plc tourcvr_itms'>{itms.place}</span>
            <span className='tourcvr_itm_descq tourcvr_itms'>{itms.desc}</span>
            <div className='tourcvr_itm_btn tourcvr_itms'>Buy Tickets</div>
        </div>
    ))
}
        
        
      </div>
     );
}

export default Tours;