window.addEventListener("load",function(){
    const slider=this.document.querySelector('.slider');
    const sliderMain=this.document.querySelector('.slider-main');
    const sliderItem=this.document.querySelectorAll('.slider-item');
    const nextBtn=this.document.querySelector('.slider-next');
    const preBtn=this.document.querySelector('.slider-prev');
    const dotItem=this.document.querySelectorAll('.slider-dot-item');
    const sliderItemWidth = sliderItem[0].offsetWidth;
    console.log(sliderItemWidth);
    const sliderLength=sliderItem.length;
    let postionX=0
    var index=0;
    // sliderMain.style.width=`${sliderLength+sliderItemWidth}px`
    nextBtn.addEventListener('click',function(){
        handleChangeslide(1);
    })
    preBtn.addEventListener('click',function(){
        handleChangeslide(-1)
    });
[...dotItem].forEach((item)=>item.addEventListener("click",function(e){
    const slideIndex=parseInt(e.target.dataset.index);
    [...dotItem].forEach((ie)=>ie.classList.remove('active'))
    console.log(slideIndex);
    e.target.classList.add("active");
    index=slideIndex;
    postionX=-1*index*sliderItemWidth
    sliderMain.style=`transform:translateX(${postionX}px)`

    
}))

    function handleChangeslide(direction){
        if(direction===1){
            index++;
           if(index>=sliderLength) {
            index=sliderLength-1;
            return;
           };
             postionX=postionX-sliderItemWidth;
            sliderMain.style=`transform:translateX(${postionX}px)`
    
        }else if (direction===-1){
            index--;
            if(index<0) {
                index=0
                return
            };
            postionX=postionX+sliderItemWidth;
           sliderMain.style=`transform:translateX(${postionX}px)`
        }
        [...dotItem].forEach((ie)=>ie.classList.remove('active'))

        dotItem[index].classList.add('acitve')
    }

})