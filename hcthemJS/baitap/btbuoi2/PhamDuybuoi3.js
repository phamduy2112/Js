/ 6. Viết chương trình JavaScript để kiểm tra xem một số nguyên có là số chẵn hay số lẻ không, sau đó in ra kết quả
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
