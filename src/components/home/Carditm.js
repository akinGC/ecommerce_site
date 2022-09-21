import './Carditm.css'
import Context from '../UI/Context';
import { useContext, useState } from 'react';
function Carditm(props) {
    const valx = useContext(Context)
 
    function newItmAdded(e){
        // console.log(e.target.value)

       let i=0
       for (let y = 0; y < valx.getArry.length; y++) {
      if( valx.getArry[y].title==e.target.id){
        i=i+1
      }

        
       }
       if(i==0){
        props.updatepopup(e.target.id)
        valx.mainArray.map((itm)=>{
            if(itm.title==e.target.id){
                let newObj={
                    title:itm.title,
                    price:itm.price,
                    imageUrl:itm.imageUrl
                }
                valx.updateArry(newObj)
            }
        })
       }
       else{
        alert('Item already present in your cart!')
       }
                
            
     
       

    }

    return ( 
        <div className='card_cvr'>
            <span className='card_cvr_title'>{props.itm.title}</span>
            {/* <div className='card_cvr_img' style={{backgroundImage:`url(${props.itm.imageUrl})`}}></div> */}
            <div class="wrapper">
          <div class="portfolio-item card_cvr_img"style={{backgroundImage:`url(${props.itm.imageUrl})`}}>
          </div>
          </div>

            <div className='card_cvr_clicks'>
                <span>${props.itm.price}</span>
                <div className='card_cvr_btn'id={props.itm.title}  onClick={newItmAdded}>ADD TO CART</div>
            </div>
          
        </div>
     );
}

export default Carditm;