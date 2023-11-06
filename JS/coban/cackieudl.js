//undefined-> khai báo nhưng chưa gán giá trị
let a;
console.log(a); //undefined
// Null->nothing
let d = null;
//boolean-> true or false
//falsy value: "",false,0,undefined,null

// toán tử 3 ngôi 
//condition?true:false;
const yourAge = 9;
let message = "";
let message2 = yourAge >= 18 ? "You are adult" : "You are still a child";
console.log(message2);
let message3 = yourAge >= 18 
? "You are adult"
 : yourAge <= 10 
? "You are still a child" 
: "You are a goung boy";
console.log(message3);

