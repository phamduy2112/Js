// String(chuỗi)
"Hello word";
"My name is Eveondev";
`I am frontend developer`;
const name="Evondev";
const job="Frondend developer"
console.log(name);
console.log(typeof name);
const newStr='My name is Evondev and I am developer'
const newStr2="My name is"+name+"and I am "+job;
const newStr3=`My name is ${name} and I am ${job}`;
console.log(newStr3);
//.length là độ dài
console.log(newStr3.length);
//index là vị trí của từng kí tự trong chuỗi,bao gồm cả khoảng trắng
const myStr="Frontend developer ";
// split là tạo 1 mảng
console.log(myStr.split(" "));
// viết thường
console.log(myStr.toLocaleLowerCase());
//Viết hoa 
console.log(myStr.toLocaleUpperCase());
// startsWith:bắt tìm xem chữ bắt đầu trả về true false
console.log(myStr.startsWith("Frontend"));
// incldes tìm kí tự có trong chuỗi trả về true ,false
console.log(myStr.includes("end"));
// vị trí bao nhiu
console.log(myStr.indexOf("d"));
console.log(myStr.lastIndexOf('d'));
// đổi chữ đã có thành chữ khác
console.log(myStr.replace('developer',""));
// lap75 đi lặp lại nhìu
console.log(myStr.repeat(5));
// slice(start,end); lấy dữ liệu từ start đến end-1
console.log(myStr.slice(0,8));
// -1 nó sẽ bắt đầu từ vị trí cuối của chuỗi 
console.log(myStr.slice(-5));
//trim:xoá bỏ khoảng trống 2 bên
console.log(myStr.trim());
console.log(myStr.trimStart());// loại bỏ khoảng cách đầu
console.log(myStr.trimEnd());// loại bỏ khoảng cách cuối
// lấy vị trí index
console.log(myStr.charAt(0));
// substr và substring
// substr(index,length): lấy ra 1 phần tử của chưỡi
console.log(myStr.substr(1,5));
// substring(start index,end index)-> lấy ra các kí tự của chuỗi
console.log(myStr.substring(1,5));
const myStr3="       Frontend Developer D      ";
// Loại bỏ khoảng trống 2 bên, đưa tất cả về In hoa,Thay chữ Developer D thành chữ devloper and design, sau đó repeat 2 lần
var thuchanh=myStr3.trim().replace('Developer D','devloper and design').toLocaleUpperCase().repeat(2);
console.log(`${thuchanh}`);
