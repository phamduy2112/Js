let x;
const name='John';
const age=30;
x='Hello, my name is '+name+' and I am '+age+' years old';
// Template Literals
x=`Hello,my name is ${name} and I am ${age} years old`
const s= 'Hello World';
x=s.length;
x=typeof s;
// Access value by key
x=s[1];
// tìm kiếm tên hàm
x=s.__proto__;
x=s.toLowerCase();
x=s.charAt(0);
// tìm ra index
x=s.indexOf('H');
x=s.substring(0,4);
x=s.slice(1,2);
// đổi
x=s.replace('World','John');
// tìm 
x=s.includes("Hello")
// tạo ra 1 mảng mới
x=s.split('');

// console.log(x);
// bt
const myName="duy";
// c1
capitalize=myName.charAt(0).toLocaleUpperCase()+myName.substring(1);
// c2
capitalize=myName[0].toLocaleUpperCase()+myName.substring(1);
capitalize=`${myName[0].toLocaleUpperCase()}${myName.substring(1)}`;

console.log(capitalize);
// Bt2
let a;
const num=new Number(5.678);
a=num.toString();
a=num.toString().length;
// lấy tròn 2 số như double
a=num.toFixed(2);
// lấy tròn như 5.6->6
a=num.toPrecision(1);
// có e 
a=num.toExponential(2);
// đồng tiền
a=num.toLocaleString('usa');

a=num.valueOf();
console.log(a);
