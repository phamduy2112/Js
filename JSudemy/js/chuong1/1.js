
let js ="amazing";
console.log(40+8+23-10);
console.log("ADS");
console.log(23);
// Thay vì vậy thì mình  nên lưu trữu biến

// let firstName="Duy";
let first='Pham';
let firstNamePerson="Pham Duy"

// console.log(firstName);
let myFirstJob='Programmer';
let myCurrentJob='teacher';
let job1='programmer';
let job2='teacher';
console.log(myFirstJob);

// Các kiểu dữ liệu

// Number
let age=15;
// String
let fristName="Pham";
// Boolean => true , false
let fullAge=true;
// Underfined: là khai báo như k c1o giá trị vd:
let children;
//Null là không tồn tại
console.log(fullAge);
// muốn kt kiểu dữ liệu nào
console.log(typeof fullAge);
// muốn thay đổi 
fullAge=23;
console.log(typeof fullAge);
let year;
console.log(year); // undefined
year =20003;
console.log(year);

// let var const
let age1=30;
age1=31;
var job3='programer'
job3='teacher';
// const là 1 hằng số không thể đổi giá trị cho nó
const birthYear=1991;
// birthYear=1990;
// toán tử
const now=2037
const ageJonas=now - 1991;
const ageSarah=now-2018;
console.log(ageJonas);
console.log(ageJonas*2,2**4);
const firstName1='Duy';
const lastName='Pham'
console.log(firstName1+lastName);
let x=10+5;
x++;// x=x+1
x--;// x=x-1;
x+=10; // x=x+10=25
console.log(x);
console.log(ageJonas>ageSarah);
console.log(ageSarah>=18);
const isFullAge=ageSarah>=18;
console.log(isFullAge);
console.log(now - 1991==now-2018);
// Tính toán từ trái sảng phải
console.log(25-10-5);
let a,b;
a=b=20-15+5;
console.log(a,b);
const averageAge=(ageJonas+ageSarah)/2;
console.log(ageJonas,ageSarah,averageAge);
// chuyển dữ liệu
// đang string
const inputYear='1991';
// ép chuỗi thành number
// type conversion
console.log(Number(inputYear));
console.log(inputYear+18);
console.log(Number('Jons')); // NaN là không phải số
console.log(typeof NaN);
console.log(String(23),23);
// type coercion
// chỉ có dấu + ms có thể + chuỗi còn lại thì bình thường
console.log('I am '+23 +' years old');
console.log('I am '+String('23')+' years old');
console.log('23'-'10'-3);
console.log('23'*'2');
console.log('23'/'2');
let n= '1'+1;
n=n-1;
console.log(n);
// falsy value:0,'',undefined,null,NaN: điều kiện sai
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('undefined'));
console.log(Boolean({}));
const money=0;
if(money){
    console.log(`don't spend it all`);
}else{
    console.log(`You should get a job`);
}
let height;
if(height){
    console.log('YAY! height is dfefined');
}else{
    console.log("Height is undefined");
}
const age_person=18;
if(age_person===18){

}