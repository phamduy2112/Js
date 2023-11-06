// 1. Viết một chương trình JavaScript để tính diện tích và chu vi của một hình chữ nhật. Sử dụng toán tử nhân (*) và toán tử cộng (+)


var P=(3+2)*2;
var S=(3*2);
console.log("Chu vi hình chữ nhật là: "+P);
console.log("Diện tích hình chữ nhật là: "+S);
// 2. Viết chương trình JavaScript để tính chu vi của một hình tròn dựa vào bán kính được nhập từ bàn phím. Sử dụng toán tử nhân (*) và toán tử Pi (Math.PI)

banKinh=prompt("Mời bạn nhập bán kính");
var P=(2*banKinh)*Math.PI;
console.log("Chu vi của hình tròn là: "+P);
// 3. Viết chương trình JavaScript để tính giá trị của một biểu thức toán học phức tạp, chẳng hạn như (5 + 6) * 2 / 3. In kết quả ra màn hình
var math=((10-5)*2/5)+(3*2-(2+4));
console.log(math);
// 4. Viết chương trình JavaScript để tính tổng của các số từ 1 đến n bằng cách sử dụng toán tử gán (+=) để tích lũy kết quả
n=5;
var result=0;
for(var i=1;i<n;i++){
     result+=i;
    
}
console.log(result);
// 5. Viết chương trình JavaScript để đảo ngược một chuỗi sử dụng toán tử gán (+=) để tích lũy kết quả
// var reversed ='';
// var strA="Duy";
// for(var i=strA.length-1;i>=0;i--){
//      reversed+=strA[i];
// }
// console.log(reversed);
// sửa bài.

var string="abn";
var reverseString="";
//0_10
//Điểm bắt đầu:10
//điểm b
for(var a=string.length-1;a>=0;a--){
     console.log('=aaaaaa',string[a]);
}
// Note :  Các bài tập dưới đây áp dụng thêm kiến thức về câu lệnh rẽ nhánh nên có thể tự đọc document để làm 

// 6. Viết chương trình JavaScript để kiểm tra xem một số nguyên có là số chẵn hay số lẻ không, sau đó in ra kết quả
n=4;
if(n%=2){
     console.log('Số chẵn');
}else{
     console.log('Số lẻ');
}
// 7. Viết chương trình JavaScript để kiểm tra xem một chuỗi có độ dài lớn hơn 10 ký tự không và in ra kết quả
strB=4;
if(strB>10){
     console.log('Chuỗi có độ dài lớn hơn 10');
}else{
     console.log("Chuỗi có độ dài bé hơn 10");
}

// 8. Viết chương trình JavaScript để kiểm tra xem một số nguyên có nằm trong khoảng từ 1 đến 100 và chia hết cho cả 3 và 5 không. In ra kết quả
var number=2;
if(number<100 &&number>1){
if (number%3==0 && number%5==0){
console.log("Chia hết cho 3 và 5 trong trong khoảng từ 1 đến 100");
}else{
     console.log("Không chia hết cho 3 vs 5");
}
}else{
     console.log("Không nằm trong khoản từ 1 đến 100");
}
// 9. Viết chương trình JavaScript để kiểm tra xem một năm là năm nhuận hay không, dựa vào các quy tắc sau: 

// Một năm chia hết cho 4 là năm nhuận

// Nhưng nếu năm đó chia hết cho 100 thì phải chia hết cho 400 để là năm nhuận. In ra kết quả
var year=2024;
if(year%4==0){
     console.log("Năm thuận");
}else if(year%100==0&&year%400){
     console.log("Năm thuận");
}else{
     console.log("Không phải năm thuận");
}
