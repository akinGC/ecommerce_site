import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Cartitm.css'
import Context from '../UI/Context';
import { useContext, useEffect, useState } from 'react';
function Cartcnt() {
    const cont = useContext(Context)
   
    function close(){
        cont.updateshwcrt(false)
    }
    function purcsed(){
        cont.clear([])
        cont.updateshwcrt(false)
        setTimeout(() => {
            alert('Purchase sucessfull!!!') 
        }, 500);
        let newarr = cont.getArry
        for(let i=0;i<newarr.length;i++){
            fetch(`https://crudcrud.com/api/6e00a4e79a914d64ac39c873ab990876/${cont.usermail}/${newarr[i].id}`,{
                method:'DELETE'
            })
        }
        
        
    }
    function deletez(e){
        let newarr = cont.getArry
       for(let i=0;i<newarr.length;i++){
        if(newarr[i].title==e.target.id){
            fetch(`https://crudcrud.com/api/6e00a4e79a914d64ac39c873ab990876/${cont.usermail}/${newarr[i].id}`,{
                method:'DELETE'
            })

            newarr.splice(i,1)
        }
       }
    //    console.log(newarr)
       cont.clear(newarr)
       cont.updateshwcrt(false)
       setTimeout(() => {
        cont.updateshwcrt(true)
       }, 0.1);
     
    //    console.log(cont.getArry)

    }
const [sum,setSum]=useState(0)
    useEffect(()=>{
        let sums=0
        cont.getArry.map((itms)=>{
            sums+=itms.price
        })
        setSum(sums)
    })
    return ( 
        <>
        {
            (cont.showcrt && <div className='cnt_cvr'>
           
            <button className='cnt_close_btn' onClick={close}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
            <span className='cnt_title'>CART</span>

            {(cont.getArry.length==0)?
        <div className='n_itms'>Please Add Items</div>:
        <div><div className='tblecvr'>
                <div className='tblecvr_hdgline frstline'>
                    <span className='tblecvr_hdgline_txt scndline'>ITEM</span>
                    <span className='tblecvr_hdgline_txt scndline'>PRICE</span>
                    <span className='tblecvr_hdgline_txt scndline'>QUANTITY</span>
                </div>

                    {
                        cont.getArry.map((itms) => (
                            <div className='tblecvr_items frstline'>
                                <span className='tblecvr_items_txt scndline prt2'>
                                    <span className='tblecvr_items_txt_img' style={{ background: `url(${itms.imageUrl})` }}></span>
                                    <span className='tblecvr_items_txt_name'>{itms.title}</span>
                                </span>
                                <span className='tblecvr_items_price scndline prt2'>${itms.price}</span>
                                <span className='tblecvr_items_qty scndline prt2'>
                                    <span className='tblecvr_items_qty_num'>1</span>
                                    <span className='tblecvr_items_qty_btn' id={itms.title} onClick={deletez}>REMOVE</span>
                                </span>
                            </div>
                        ))
                    }  
            </div>

            <div className='cnt_tot'>
                <span className='cnt_tot_txt'>Total</span>
                <span className='cnt_tot_num'>${sum}</span>
            </div>
            <button className='cnt_purcse_btn' onClick={purcsed}>PURCHASE</button>
            </div>    
        }
         
        </div>)
        }
        </>
     );
}

export default Cartcnt;