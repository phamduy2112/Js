// function (hàm)
// khai báo function
// cú pháp (syntax):function functionName(parameters){
// Your code here
// }
// Đề bài là viết hàm tính tổng 2 số a và b
function sum(a,b=0){
    const total=a+b;
    return total;
    //Không có return thì kết quả của hàm trả về undefined
}
//function sum(parameter=defaultValu){}
//sum():
console.log(sum(5,10));
function add(a=0,b=0){
return a+b;

}
const sum2=add; // gán function add cho biến sum2 nhưng chưa dc gọi 
// sum2(300,400);
// tham số là function
// Tính tb của a và b-> (a+b)/2;
// fn:function
function average(a,b,fn){
const total=fn(a,b);
return total/2;
}
let result=average(200,300,sum2);
console.log(result);
//Anonymous function(function expression)
//Function declaration
const logName =function(){
    console.log("Your name");
}
logName();
//IIFE -> immmediately... chạy ngay lập tực
(function(){
    console.log("This is IIFE function");
})();
//  Global scope và function scope
let myName="Duy"// global scope
function logYourName(){
    let myName2=myName// function scope
    console.log(myName2);
}
console.log(myName);
logYourName();
// Block scope và từ khoá var
// hoặc
let message;
if(2>1){
    //block scope=> khi chạy ra ngoài không dc
    // let message="Hello evondev";
    // const let message="Hello evondev";
    // var message2="Hello Duy";    
    message="Dy";
}
//Closure 
function sayhello(){ // cha function
    let message="Hi";
    function sayHi(){ // con function
        console.log(message); 
    }
    return sayHi;
}
let hello=sayhello();
hello();
// th2 
function sayhello2(message){
    return function hiYourName(name){
        console.log(`${message} ${name}`);
    };
};
let hello2=sayhello2("Welcome to javariceasd");
hello2('Duy');

function anotherFunction(){
    let otherMessage="Hello";
    function sayHi(){
        console.log(otherMessage);
    }
    return sayHi;
}
let callFunc=anotherFunction();
callFunc(); // hello
//Arrow function:anonymous function
//ECMAScript
const square=function(x){
    return x*x;
}
square(5);
// arrow function
const square1 = ()=>{
    return 1000;
}
square1();
// rút gọn khi return
const square2=(x)=>x*x;
// Arrow function khi xử lí nhìu dòng
// const square=()=>{
    // code here
    //return
//}
