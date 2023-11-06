//2.1 document.querySekector
//.header,p,body
const singleNode=document.querySelector("h1");
const singleNode2=document.querySelector(".container");
const singleNode3=document.querySelector("#spinner");
const singleNode4=document.querySelector(".container .heading");



console.log(singleNode4);
// 2.2 document.querySeletectorAll("selector")-> tra3 ve62 1 nodelist chứ dabg sacg1 các node,nếu không có thì trả về empty
// 
// có thể sử dụng filter,map,forEach,...
// nó giống array là có thể sự dụng loop nhưng k sử dụng dc phương thức push,pop,...
const multiNodes=document.querySelectorAll(".item");
console.log(multiNodes);
//getAttribute-> thuoc tinh href,id,class,src,style
//selector.getAttribute("attribute")-> lấy ra giá trị của attribute của selector
const link=document.querySelector(".link");
console.log(link.getAttribute("href"));
multiNodes.forEach(item=>{
    console.log(item.getAttribute("class"));
    item.setAttribute("target","_blank")
})
//attribute
// if(link){

// }
// 2 selector.setAttribute("attrbute",value)-> set giá trị cho 
link.setAttribute("target","_blank");
//3 .selector.removeAttribute()-> xoa attribute;
singleNode4.removeAttribute("style");
// hasAttribute("attribute")-> kt xem selector có attribute không,nế có -> true ngược không có thì trả về false
console.log(link.hasAttribute("class"));//true

