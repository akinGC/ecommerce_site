import './Carditm.css'
import Context from '../UI/Context';
import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom'
function Carditm(props) {
    const valx = useContext(Context)
    const nav=useNavigate()
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
                fetch(`https://crudcrud.com/api/6e00a4e79a914d64ac39c873ab990876/${valx.usermail}`,{
        method:'POST',
        body:JSON.stringify({
            title:itm.title,
            price:itm.price,
            imageUrl:itm.imageUrl
        }),
        headers:{
            'Content-Type':'application/json'
        }
     }).then((resp)=>{
        if(resp.ok){
            return resp.json().then((data)=>{
                let newObj={
                    title:itm.title,
                    price:itm.price,
                    imageUrl:itm.imageUrl,
                    id:data._id
                }
                valx.updateArry(newObj)
            })
        }
     })
                
               

            }
        })
       }
       else{
        alert('Item already present in your cart!')
       }
                
            
     
       

    }


function imgclk(e){
    console.log(e.target.id)
    
    nav(`/view/${e.target.id}`)


}
    return ( 
        <div className='card_cvr'>
            <span className='card_cvr_title'>{props.itm.title}</span>
            {/* <div className='card_cvr_img' style={{backgroundImage:`url(${props.itm.imageUrl})`}}></div> */}
            <div class="wrapper">
          <div class="portfolio-item card_cvr_img"id={props.itm.title} onClick={imgclk} style={{backgroundImage:`url(${props.itm.imageUrl})`}}>
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