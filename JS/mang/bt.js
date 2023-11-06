// 1.Bt đảo ngược 1 chuỗi. Vd My name is duy => duy is name my
// function daoNguoc(str){
//     if(!str){
//         return null;
//     }
    // const newStr=str.split(" ");
    // console.log(newStr);
    // // chuyển thành mảng : split("");
    // // xong reverse()
    // const reverseStr=newStr.reverse();
    // console.log(reverseStr);
    // // chuyển thành chuỗi : join("");
    // const revStr=reverseStr.join(" ");
    // console.log(revStr);
    // return revStr.split(" ").reverse().join(" ");
// }
// console.log(daoNguoc("My nam is Duy"));
//2. Đảo ngược 1 chuỗi bao gồm các kí tự. Vd: "i love"-> "evol i"

function reverseWord(str){
    if(!str) return null;
    const arrStr=str.split(" ").map((value)=>
        value.split("").reverse().join("")
        // [l,o,v,e,i] 
)
const result=arrStr.reverse().join(" ");
     console.log(result);
    // console.log(str);
}
reverseWord("i love");
// cho 1 mảng gồm nhìu giá trị Viết chương trình loại bỏ các giá trị falsy giữ lại trusy
const array=[1,1000,false,null,"Duy",undefined,"ASD",[1,2,3],NaN];
const fitlerFalse=array.filter((item)=>Boolean(item));
console.log(fitlerFalse);
// cho 1 mảng phức tạp [[1,2,3],[false,null],[1,5,6,['Java']],[988,666,[90]]].
//=> [1,2,3,false,null,1,5,6,"java",999,666,90];
const complexArray=[[1,2,3],[false,null],[1,5,6,['Java']],[988,666,[90]]];
// flat(number); gộp vào 
const result=complexArray.flat(2);
console.log(result);
// đảo ngược số nguyên : 345=>543;
//Math.sign(123)-> 1;
//Math.sign(-123)-> -1;
function reverseNumber(numbers){
    // convert to String;
    //split("")-> [value]
    // reverse();
    //join("");
    //Number
    const value=parseInt(numbers.toString().split("").reverse().join(""))*Math.sign(numbers);
    console.log(value);
}
reverseNumber(-1234);
