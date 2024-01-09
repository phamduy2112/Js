const tabItem=document.querySelectorAll('.tab-item');
const tabContent=document.querySelectorAll('.tab-content');
[...tabItem].forEach(item=>item.addEventListener('click',handleTabClick));
function handleTabClick(event){
    // console.log(event.target);
    // xoá hết class active hiện tại
    [...tabItem].forEach(item=>item.classList.remove('active'))
    event.target.classList.add("active");
    const tabNumber=parseInt(event.target.dataset.tab);
    // console.log(tabNumber);
    [...tabContent].forEach(item => {item.classList.remove('active')
    console.log(item.getAttribute('data-tab'));
    if(item.getAttribute('data-tab')==tabNumber){
        item.classList.add('active');
    }
});
    // logic: chuyển thành mảng và index

    // [...tabContent][tabNumber-1].classList.add('active');

}   
// custom 
