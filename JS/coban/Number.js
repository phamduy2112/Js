//Số nguyên: 1 2 3 999 33 444
// Số thập phân : 3,4 5,8-> 3.4 , 5.8
console.log(5+9);
console.log(typeof 10);
const number1="5";
const number2="4.8";
// chuyển dữ liệu chuỗi => number
console.log(parseInt(number1));
console.log(parseFloat(number2));
const number3=-10;
//Math.abs(value);
// console.log(Math.ads(number3))//10
// floor(value)->làm tròn xuống vd 4.8=4
console.log(Math.floor(4.8));
//ceil(value)->làm tròn lên vd 4.3=5
console.log(Math.ceil(4.1));
//Math.round(value)-> làm tròn gần nhất
console.log(Math.round(4.3));
// toFixed(number) vd 0.333->0.33
console.log(Number((1/3).toFixed(2)));
console.log(Math.ceil(Math.random()*10));
// Math.max(value)=> trả ra con số lớn nhất
console.log(`Max: ${Math.max(1,2,3)}`);
// Math.min(value)=> trả về con số nhỏ nhất
console.log(`Min: ${Math.min(1,2,3)}`);
// Math.pow(number1,number2) // number 1 là sớ number 2 là số mũ vd Math.pow(3,2)=> 3*2=>9
console.log(Math.pow(3,2));
// isNAN vs Number.isNaN
// isNaN("number")=> Number("number")=>number là false!
console.log(isNaN("this is a string")); // kt xem có phải số không 
console.log(isNaN("123"));
// Number.isNaN
console.log(Number.isNaN("This is a string")); // false
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(NaN)); // false