import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './View.css'
import {MagnifierContainer,MagnifierPreview,MagnifierZoom} from 'react-image-magnifiers'
import Context from '../UI/Context';
function View() {
  const para = useParams()
  const getx=useContext(Context)
 
  let fan = []
  getx.mainArray.map((itms)=>{
    if(itms.title==para.id){
       fan=itms
    }
})
console.log(fan )
  // console.log(getx.magnus[0].comment)
  
  const [img,setimg]=useState(fan.imageUrl)
 function flank(e){
  console.log(e.target.src)
  setimg(e.target.src)
 }
  return (
   
    <div className='vi_whole'>
      <div className='vi_allimg_list'>
      {/* {
          getx.magnus.map((inp)=>( */}

        <div className='imgholder'>
          <img className='sid_img' src={fan.im1} onClick={flank}></img>
        <img className='sid_img' src={fan.im2} onClick={flank}></img>
        <img className='sid_img' src={fan.im3} onClick={flank}></img>
  
        </div>
          {/* ))
      } */}
      </div>
      
     
    <div className='magc'>
    <MagnifierContainer style={{display:'flex',gap:'2vw'}}>
    <div className="example-class">
      <MagnifierPreview style={{width:'300px'}} imageSrc={img} />
      <span  className='amin_title'>{fan.title}</span>
    </div>
      <MagnifierZoom style={{ height: "500px",width:'600px' }} imageSrc={img}/>
  </MagnifierContainer>
    </div>
     <div className='vi_comnt'>

   {
    (fan.comment.length!=0)?fan.comment.map((opy)=>(
          <div className='vi_inr'>
          <span className='cmt_name'>name: <span className='name_ext'>{opy.name}</span> </span>
            <span className='cmt_cmt'>comment: <span className='cmt_ext'>{opy.txt}</span></span>
      
            </div>
    )):<p style={{color:'red'}}>No comments yet !</p>
   }
          
       
   
     
      
     </div>
  </div>
    
  );
}

export default View;