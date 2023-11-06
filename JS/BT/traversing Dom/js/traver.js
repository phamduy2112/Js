// 1 .parentNode, parenElement,removeChild
// parentNode vs parentElement
const span=document.querySelector("span");
console.log(span.parentNode); // phần tử cha gần nhất
console.log(span.parentElement);
// selector.parentNode hoặc selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);
//2 nextElementSibling vs previousElementSibling => chọn phần tử trc nó và sau nó;
const nextSpan=span.nextElementSibling.nextElementSibling;
console.log(nextSpan);
const preSpan=span.previousElementSibling;
console.log(preSpan);
//3 childNode:trả về 1mang3 các node bên trong bao gồm textNodes,children:trả về các node không bao gồm textNodes;
console.log(span.childNodes); // text : kiểu xuống dòng
console.log(span.children[0]);
// 4.firstChild
console.log(span.firstChild); // lấy cả textnode
console.log(span.firstElementChild); // chỉ lấy element
//5 last
console.log(span.lastChild); // lấy cả textnode
console.log(span.lastElementChild); // chỉ lấy element
//6 nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);

