var now=new Date();
console.log(now);
//Mon Oct 09 2023 23:47:55 GMT+0700 (Giờ Đông Dương)
//Timezone:GMT+0700(múi giờ)
// Second:34
//Minute:43
//Hour:23
//Year:2021
//Month:May
//Day:13
// Day of the week:Thu
//Timestamp và epochtime
//Timestamp : unix time=>dựa múi giờ tính kết quả ra miliseconds
console.log(now.getTime());
// vd:1696870225421

console.log(new Date());
// 4 cách sự dụng new Date
//new Date()=> lay ra tat cả
// new Date(timestamp)-> dựa vào timestamp để in ra ngày giở
//new Date(date string)->
// new Date(year,month,day,hours,minutes,seconds,miliseconds);
console.log(new Date(1696870225421));
console.log(new Date(2021,5,1,23,23,23,23));
//Các hàm get trong Date
const birthday=new Date(1994,8,5);
// in ra năm
console.log(birthday.getFullYear()); //1994
// in ra tháng:0-11 -> 0 là tháng 1(Jan),11 là tháng 12(dec);
console.log(birthday.getMonth());
// in ra ngày của tháng từ 1 ->31
console.log(birthday.getDate());
// in ra thứ trong tuần 0-6: 0 là chủ nhật, 6 là thứ 7
console.log(birthday.getDay());
//in ra giờ 
console.log(birthday.getHours());
// in ra phút
console.log(birthday.getMinutes());
// in ra giây
console.log(birthday.getSeconds());
//in ra miligiày
console.log(birthday.getMilliseconds());
//set trong Date sửa lại giá trị
console.log(`My birthday:${birthday}`);
birthday.setFullYear(1993)

birthday.setDate(3)
// không có setDay
console.log(`My birthday:${birthday}`);
console.log(now.toDateString()); //Tue Oct 10 2023
console.log(now.toTimeString()); //00:43:25 GMT+0700 (Giờ Đông Dương)
console.log(now.toLocaleDateString("vi-VI"));
console.log("ASD");
const myTime=new Date("Tue Oct 5 2023 00:48:38 GMT+0700 (Giờ Đông Dương)");  // 5/10/2023
const myYear=myTime.getFullYear();//2023
const myMonth=myTime.getMonth()+1;//10
const myDate=myTime.getDate();//5
const prefixMonth=myMonth <10 ? "0":""
console.log(`${myYear}/${myMonth}/${myDate}`);
//setTimeout=> thuc hien chuc nang nao do và setInterval=> thuc hien gio chay
setTimeout(function(){
    alert('call me after 3 second')
},3000);
const timer=setInterval(function(){
    console.log("Call me");
    },1000)
clearInterval(
  timer
)
