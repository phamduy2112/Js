const scroolers=document.querySelectorAll('.scroller');
addAnimation();
function addAnimation(){
    scroolers.forEach(scroler=>{
        scroler.setAttribute('data-animated',true)
    })
}