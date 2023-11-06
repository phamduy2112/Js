 const items=['book','table','chair','kite'];
 const users=[
    {
        name:'Duy'
    },
    {
        name:'Duy1'
      
    }
 ]
//  for(let i=0;i<items.length;i++){
//     console.log(items[i]);
//  }
// dùng cho mảng
// for (const item of items){
//     console.log(item);
// }
// for(const user of users){
//     console.log(user);
// }
// Loop over strings
const str='hello word';
// for(const letter of str){
//     console.log(letter);
// }
// loop over maps
const map=new Map();
map.set('name','Duy');
map.set('age',30);
// for (const [key,value] of map){
//     console.log(key,value);
// }
// for in
// 1 chuỗi 
const colorObj={
    color1:'red',
    color2:'blue',
    color3:'orange',
    color4:'green'
}
// for(const key in colorObj){
//     console.log(key,colorObj[key]);
// }

const colorArr=['red','green','blue','yellow'];
// for( const color in colorArr){
//     console.log(colorArr[color]);
// }
// For each:duyệt từng phần tử
const socials=['twitter','Duy','Facebook'];
// Tìm ra
// console.log(socials.__proto__);
// socials.forEach((item,index,arr)=>{
// console.log(`${index}-${arr}-${item}`);
// });
function logSocials(social){
    console.log(social);
}
// socials.forEach(logSocials);
const socialObjs=[
    {name:'facebook',url:'https://www.facebook.com/'},
    {name:'Twitter',url:'https://www.facebook.com/'},
    {name:'Instagram',url:'https://www.facebook.com/'},
    {name:'Twitter',url:'https://www.facebook.com/'}
];
// socialObjs.forEach((item)=>{
//     console.log(item.url);
// })
// filter
const numbers=[1,2,3,4,5,6,7,8,9,10];
// const evenNumbers=numbers.filter(function(number){
//     return number % 2===0;
// })
// short
// const evenNumbers=numbers.filter(number=>number%2===0)
// same with foreach
// let evenNumbers=[];
// numbers.forEach((number)=>{
//     if(number%2===0){
//         evenNumbers.push(number);
//     }
// })
console.log(evenNumbers);
//reduce
const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 15
