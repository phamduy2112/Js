const numbers=[12,45,33,29,39];
const mixed=[12,'Hello',true,null]
// Arrau constructor
// const fruits=new Array('apple','grape','orange');
// console.log(fruits);
// x=numbers[0];
// x=numbers[0]+numbers[3];
// x=`My favorite fruit is ${fruits[2]}`; 
// x=numbers.length;
// fruits[2]='Pear';
// fruits.length=2;
// fruits[3]='strawberry';
// fruits[fruits.length]='blueberry';
// x=fruits;
// console.log(x);

let y;
const arr=[34,55,95,20,15];
// them phan tu cuoi
arr.push(1);
// xoa phan tu cuoi
arr.pop();
// them phan tu dau
arr.unshift(1);
//xoa phan tu dau
arr.shift();
// sap xep tu 15->34
// arr.reverse();
// kt trong chuoi co ton tai so khong
y=arr.includes(20);

y=arr.indexOf(15);
//splice(start, deleteCount, item1, item2, ...)
// start là chỉ số của phần tử bắt đầu thực hiện thay đổi.
// deleteCount là số lượng phần tử sẽ bị xoá, bắt đầu từ chỉ số start.
// item1, item2, ... là các phần tử mới sẽ được chèn vào mảng, nếu có.
y=arr.slice(1,4);
// xoa 
// x=arr.splice(1,2);
// x=arr.splice(1,4).reverse().toString();
// console.log(x,arr);
let x;

const fruits=['apple','pear','orange'];
const berries=['strawberry','blueberry','rasberry'];

// fruits.push(berries);
// x=fruits[3][1];
const allFruits=[fruits,berries];
// x=allFruits[1][2];

x=fruits.concat(berries);
//  Spread operator
x=[...fruits,...berries]
const arr1=[1,2,[3,4],5,[6,7],8];
// Hàm flat() được sử dụng để "làm phẳng" các mảng lồng nhau, 
//tức là biến chúng thành một mảng duy nhất bằng cách gộp tất cả các phần tử lại với nhau.

x=arr1.flat();
// Static Methods on Array Object
x=Array.isArray(fruits);
//  từ chuỗi sang từng phẩn tử mảng =>chuỗi
x=Array.from('12345');
const a=1;
const b=2
const c=3;
x=Array.of(a,b,c); // =>tạo 1 mảng mới đối số truyền vào nó

console.log(x);

// BT
const arr2=[1,2,3,4,5];
// [1,2,3,4,5,0];
arr2.push(0);
console.log(arr2);
let arr4;
// [1,2,3,4,5] [6,7,8,9,10]=>[1,2,3,4,5,6,7,8,9,10]
const arr3=[6,7,8,9,10];
arr4=[...arr2,...arr3];
arr4=Array.of(arr2,arr3).flat();
console.log(arr4);
