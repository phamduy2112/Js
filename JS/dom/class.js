// 1. selector.classList.add("asd");
const container=document.querySelector('.container');
container.classList.add("is-active");
// 2.selector.classList.remove("name");
container.classList.remove("is-active");
//3.selector.classList.contains("name")

console.log(container.classList.contains('container'));
//4.selector.classList.toggle("is-active");
//toggle là có rồi thì xoá còn k thì thêm
//<=>
// if(container.classList.contains('is-active')){
//     container.classList.remove("is-activ")
// }else{
//     container.classList.add("is-activ")
// }
// như
container.classList.toggle("is-active")
//4. selector.name=> trả về chuỗi các class selector
const title=document.querySelector('.title');
// nếu muốn xoá thì nên dùng mẹo như này
title.className='title';
console.log(title.className);
// tạo ra element trong js
const div=document.createElement('div');
// 2 selector.appendChild : hiện thị
const body=document.body;
// body.appendChild(div)
// div.classList.add('container');
// div.className='container wrapper';
// div.textContent="lorem asdsad";
// thêm html
// div.innerHTML='<div class="content"><h3>ASD</h3></div>'
// div.setAttribute('data-name',"Duy")
// bài tập
const cart=document.createElement('div');
cart.className="card";

const cartImg=document.createElement('img');
cartImg.setAttribute('src','https://i.ytimg.com/vi/F1yZONgVB5I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC2DL-c24tnxdYvLKVWenckS7dx7g')
cartImg.classList.add('card-img');

console.log(cartImg);
cart.appendChild(cartImg);
body.appendChild(cart);
//document.createTextNode truyền vào 1 chuỗi
const text=document.createTextNode('ASDASDASd');
const h1=document.createElement('h1');
h1.appendChild(text);
body.appendChild(h1);
// 4.element.cloneNode:sao chép 
const h1Clone=h1.cloneNode(true);
body.appendChild(h1Clone);
//hasChildNodes-> kt xem có tồn tại không có thì true không thì false
const h1has=h1.hasChildNodes();
console.log(h1has); // true
//6 insertAdjacentText: chèn vào 4 vị trí
const h4=document.querySelector('h4');
//h3.inserstAdjacentText['position',"text"];;
// position:beforebegin,afterbegin,beforeend,afterend
h4.insertAdjacentText('afterend','asdsa');
//insertAdjacentElement: thêm phần tử
const strong=document.createElement('strong');
strong.classList.add('bold');
h4.insertAdjacentElement('beforebegin',strong)
//insertAdjacentHTML
// vd <ul>
// <li>1</li>
// <li>2</li>
// <li>3</li>
// </ul>
const template=`
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>;
`
document.body.insertAdjacentHTML('beforeend',template)
