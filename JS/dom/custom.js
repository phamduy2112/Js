
//target: nó sẽ chọn chính xác element mình click tới và currentTarget: nó sẽ chọn phần tử thằng click 
const link=document.querySelector('.link');
link.addEventListener('click',function(event){
    event.preventDefault();
    // lấy custom attribute data-name-abc=>dataset.nameABC 
    // nên sài 2 kí tự 
    // event.target.dataset.name
    const name=event.target.dataset.name
    // console.log(name);
    console.log(event.target);
    console.log(event.currentTarget);
})