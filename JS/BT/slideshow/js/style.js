
const sliderNext=document.querySelector('.slider-next');
const sliderPrev=document.querySelector('.slider-prev');
const sliderItem=document.querySelectorAll('.slider-item');

const nextslider=sliderNext.addEventListener('click',function(){
    handleChangeslide(1);
})
const sliderLength=sliderItem.length;
var index=4;
var giaTri=0;

sliderPrev.addEventListener('click',function(){
    handleChangeslide(-1)
});
function handleChangeslide(direction){
    if(direction===1){
        index++;
        giaTri+=-1*165;
        console.log(index);
        if(index>sliderLength){
            giaTri=0;
            index=4;
           
        }
        sliderItem.forEach(item=>{
            
            item.style=`transform:translateX(${giaTri}px)`;

        })
    }else if (direction===-1){
         index--;
        giaTri+=165;
        console.log(index);
      if(index<=3){
        giaTri=0;
        index=4;
      
      }
     
        sliderItem.forEach(item=>{
            
            item.style=`transform:translateX(${giaTri}px)`;

        })
       
}
}

setInterval(()=>{
    handleChangeslide(1);

},2000)