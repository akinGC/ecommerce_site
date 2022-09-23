import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './View.css'

function View() {
  // const para = useParams()
  // console.log(para.id)

  let imageContainer = document.getElementById("image-container");
  let productImage = document.getElementById("product-image");
  let overlay = document.getElementById("overlay");
  let mouseOverlay = document.getElementById("mouse-overlay");
  //events object(stores events for touch,mouse)

  //initially blank

  //Checks for device type

  //hides overlay
  const hideElement = () => {
    overlay.style.display = "none";
    mouseOverlay.style.display = "none";
  };

  // window.addEventListener('DOMContentLoaded', (event) => {
  //   // moved(422,402)
  //   moved()
  // });

  // function callt(e){
  //   var q = e.pageX 
  //   var w =  e.pageY 
  //   console.log(q+' '+w)
  //   moved(q,w)
  // }
  
  function moved(e) {
    // console.log(e)
   
      try {
        //pageX and pageY return the position of client's cursor from top left pf screen
        var x = e.pageX
        var y = e.pageY
        // var x=a
        // var y=b
      } catch (e) { }
      //get image height and width
      let imageWidth = imageContainer.offsetWidth;
      let imageHeight = imageContainer.offsetHeight;
      //check if mouse goes out of image container
      if (
        imageWidth - (x - imageContainer.offsetLeft) < 15 ||
        x - imageContainer.offsetLeft < 15 ||
        imageHeight - (y - imageContainer.offsetTop) < 15 ||
        y - imageContainer.offsetTop < 15
      ) {
        hideElement();
      } else {
        overlay.style.display = "block";
        mouseOverlay.style.display = "inline-block";
      }
      var posX = ((x - imageContainer.offsetLeft) / imageWidth).toFixed(4) * 100;
      var posY = ((y - imageContainer.offsetTop) / imageHeight).toFixed(4) * 100;
      //set background position to above obtained values
      overlay.style.backgroundPosition = posX + "%" + posY + "%";
      //move the overlay with cursor
      mouseOverlay.style.top = y + "px";
      mouseOverlay.style.left = x + "px";
   
    
  }
  return (
    <div className='viwhole'>
      <div class="image-container" id="image-container" onMouseMove={moved} >
        <img src="https://www.color-meanings.com/wp-content/uploads/colored-rainbow-over-forest-mountains-1024x682.jpeg" id="product-image" alt="shoe" />
      </div>
      <div id="mouse-overlay"></div>
      <div id="overlay"></div>
    </div>
  );
}

export default View;