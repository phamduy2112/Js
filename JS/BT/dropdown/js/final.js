const dropdownSelect=document.querySelector('.dropdown__select');
const dropdownItems=document.querySelectorAll(".dropdown__item");
const dropdownSelector=document.querySelector(".dropdown__selected");
const dropdownList=document.querySelector(".dropdown__list");
const dropdown=document.querySelector(".dropdown");
const dropdownCaret=document.querySelector('.dropdown__caret');

dropdownSelect.addEventListener('click',function(event){
    console.log(event.target);
    
    if(dropdownList){
        dropdownList.classList.toggle('show')
        dropdownCaret.classList.toggle('fa-caret-up')
    }
})
dropdownItems.forEach((item)=>{
    item.addEventListener("click",function(event){
        const text=event.target.querySelector(".dropdown__text").textContent;
       
        dropdownSelector.textContent=text;
        dropdownList.classList.remove("show");
    })
} )
document.addEventListener('click',function(e){
if(!dropdown.contains(e.target)){
    dropdownList.classList.remove("show");
}
})