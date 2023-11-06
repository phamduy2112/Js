// let d;
// // nam thang ngay gio phut giay
// d=new Date(2022,0,10,10,30,0);
// d=Date.now();
// d=new Date('07-10-2022')
let x;
let d=new Date();
x=d.toString();

x=d.getTime();
x=d.valueOf();
x=d.getFullYear();
x=d.getMonth()+1;
x=d.getDay();
x=d.getHours();
x=d.getMinutes();
x=d.getSeconds();
x=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
x=Intl.DateTimeFormat('vi-VN').format(d);
x=Intl.DateTimeFormat('default',{month:'long'}).format(d);
x=d.toLocaleString('default',{
    month:'short',
    // dung o dang so
    day:'numeric'


})
console.log(x);