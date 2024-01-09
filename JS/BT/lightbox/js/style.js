/* <div class="lightbox">
     <div class="lightbox-content">
       <i class="fa fa-angle-left lightbox-prev"></i>
       <img
         src="${image}"
         alt=""
         class="lightbox-image"
       />
       <i class="fa fa-angle-right lightbox-next"></i>
     </div>
   </div> */
   
   const images=document.querySelectorAll(".container img");
   images.forEach(item=>item.addEventListener("click",handleZoomImage));
   function handleZoomImage(event){
    console.log(event.target);
    const image=event.target.getAttribute("src");
    const template=`<div class="lightbox">
    <div class="lightbox-content">
      <i class="fa fa-angle-left lightbox-prev"></i>
      <img
        src="${image}"
        alt=""
        class="lightbox-image"
      />
      <i class="fa fa-angle-right lightbox-next"></i>
    </div>
  </div> `;
  document.body.insertAdjacentHTML("beforeend",template);
   }
   let index=0;


   document.addEventListener('click',(e)=>{
    console.log(e.target);
    const lightImage=document.querySelector(".lightbox-image")
    if(!lightImage) return;
 
//    let lightSrc="";
   let lightSrc = lightImage.getAttribute("src");
   // tìm ra index của image khi mình trỏ tới và gắn src bằng light src
   index = [...images].findIndex(
     (item) => item.getAttribute("src") === lightSrc
   );
    if(e.target.matches(".lightbox")){
    // remove
    e.target.parentNode.removeChild(e.target)
   }else if(e.target.matches(".lightbox-next")){
    // lightSrc=lightImage.getAttribute('src');

    // index=[...images].findIndex(item=>item.getAttribute("src")===lightSrc);
    index=index+1;
    if(index>images.length-1) index=0;
    // const newSrc=[...images][index].getAttribute('src');
    // lightImage.setAttribute('src',newSrc);
    displayLightImage(index,lightImage);

   }else if(e.target.matches(".lightbox-prev")){
    // handle pre 
    // lightSrc=lightImage.getAttribute('src');

    // index=[...images].findIndex(item=>item.getAttribute("src")===lightSrc);
    index=index-1;
    if(index<0) index=images.length-1;
    // const newSrc=[...images][index].getAttribute('src');
    // lightImage.setAttribute('src',newSrc);
    displayLightImage(index,lightImage);
   }

})
function displayLightImage(index,lightImage){
    const newSrc=[...images][index].getAttribute('src');
    lightImage.setAttribute('src',newSrc);
}