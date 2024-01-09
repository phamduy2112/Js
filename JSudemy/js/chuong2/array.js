// const friend1="Duyh";
// const friend2="Quangh";
// const friend3="Maih";
// const friends=['duy','quang','mai'];
// console.log(friends);
// // khởi tạo
// const years=new Array(1991,1924,2008);
// // 
// const ages=[];
// console.log(friends[0]);
// // lấy phần tử cuối
// console.log(friends[friends.length-1]);
// friends[2]='jay';
// console.log(friends);
// const firstName='Jonas'
// const jonas=[firstName,'Jonas','Schmedtmann'];
// console.log(jonas);
// const calcAge=function(birthYeah){
//     return 2037-birthYeah;
// }
// const year=[1990,1965];
// console.log(calcAge(year[0]));
// // xử lí trong luôn
// const age1=[calcAge(year[year.length-1])]
// console.log(age1);
const friends=['duy','mai','quang'];
// thêm cuối phần tử mảng
const newLength=friends.push('jay');
console.log(friends);
console.log(newLength);
// thêm phần tử đầu
friends.unshift('john');
console.log(friends);
friends.pop()// xoá phẩn tử cuối
const popped=friends.pop()// xoá phẩn tử cuối
console.log(popped);
console.log(friends);
// kt xem phần tử có torng mảng k
console.log(friends.indexOf('duy'));
console.log(friends.includes('duy'));
if(friends.includes('duy')){
    console.log("chào duy");
}
const jonasArray=[
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter']
]
const jonas={
    firstName:'Duy',
    lastName:'Pham',
    // age:2035-2003,
    birthYear:2003,
    job:'teacher',
    friends:['hoa','thang','nieu'],
    hasDriversLicense:true,

    calcAge:function(){
        // this là toàn bộ đối tượng của jonas
        this.age=2037-this.birthYear;
        return this.age;
    },
    getSummary:function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? "a":"no"} driver's license`
    }
}

console.log(jonas.firstName)
console.log(jonas['lastName']);

const nameKey='Name';
// Nối chuỗi
console.log(jonas['first'+nameKey]); 
console.log(jonas['last'+nameKey]); 
// const interstedIn=prompt("Bạn đang quan tâm đều gì ? tên, hô,age,job,friend");
// if(jonas[interstedIn]){
//     console.log(jonas[interstedIn]);

// }else{
//     console.log("Câu trả lời sai");
// }
// Duy có 3 người bạn và ng iu cậu ấy la hoà

console.log(`${jonas.firstName} có ${jonas.friends.length} người bạn và người cậu ấy thích là : ${jonas.friends[0]}`);
console.log(jonas.calcAge());
console.log(jonas.getSummary());