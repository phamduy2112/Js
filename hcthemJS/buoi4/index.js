


// => khởi tạo biến lưu vào 1 bộ nhớ có địa chỉ

var a = 1 // địa chỉ a102;
var b=2 // địa chỉ b102;
var c=[1,2,3] // địa chỉ c102
// tham trị và tham chiếu trong js
// kiểu dữ liệu tham trị=> là các kiểu dữ liệu nguyên thuỷ
// 7 kiểu dữ liệu
// 5 kiểu dự liệu tham trị number,string,null,undefined,boolean
// tính chất của tham trị
var a=2; // ô nhớ có địa chỉ dc a202
var b=a; // ô nhớ có địa chỉ dc b202

a=3; // trỏ tới a202 gán giá trị 3

console.log(a);
console.log(b);

// array,object,function = tham chiệu
// tính chất tham chiếu
var c=[1,2,3]; // địa chỉ c302
var e=c; // tham chiếu tới cả địa chỉ c302 => c302
c[0]=15; // 
console.log(c);
console.log(e);