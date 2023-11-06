// var a=20;
// var b=4;
// var c=a%b;
// // số chia nhỏ hơn số bị chia-> %-> trả về số chia
// // console.log(c);


// // toán tử ++
// var a=10;
// // ++a Việc công sẽ thực thi trước rồi biến a sử dụng...
// // ++a là tăng lập tức 1 đơn vị
// console.log(a++);
// console.log(++a);
// toán tự gán
// +=
var a=10;
var b=20;
b+=a; // Tường minh : b=b+a;
console.log(a);
console.log(b);

// nhập pass tài khoản ngân hàng hay pass điện


// var pass=prompt("Vui lòng nhập pass:");
// while(pass!=123){
//     var pass=prompt("Vui lòng nhập pass:");
// }// được lắp ít nhất 0 lần kt dk trước 
do{
var pass=prompt("Vui long nhap pass")
}while(pass!=123) // duoc lặp ít nhất 1 lần

console.log('a'+a); //giá trị
console.log('=aaaaaaa',a); // , là mô tả đoạn text
// toán tử nullish
var result=a&&b;
console.log(result);
var user={
    name:'Chinhs',
    address:undefined
}
var newAddress=user.address ?? "No data" // ý nghĩa 