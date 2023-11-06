
// objectLiteral
const objectLiteral={};
// object constructor
const objectContructor=new Object();
const student={
    name:"evondev",
    age:27,
    male:true,
    "last-name":"tuan",
    hi:function(){
        console.log("HELLO evondev");
    }
    // properties
    //method
}
// 2 cách truy xuất giá trị của object
// 2.1 Dot notation.key
console.log(student.name);
// 2.2 Bracket notaion ["key"];
console.log(student['age']);
console.log(student['last-name']);
// thêm
student.isDeveloper=true;
student['is_developer']=false;
// cách xoá
delete student["last-name"];
student.hello=function(){
    console.log("hello");
}
console.log(student);
// duyệt qua từng phần tử
for(let key in student){
    if(key==='name'){
        console.log('Hello name');
    }
    const value=student[key];
console.log(`${key}:${value}`);
}
// object.keys(object)->trả vè 1 mảng chứa phần tử key của object
const keys=Object.keys(student);
console.log(keys);
// object.values(object)-> trả về 1 mảng chứa tất cả các giá trị của object
const values=Object.values(student);
console.log(values);
//Object.entries(object)-> trả về 1 mảng nested[["name","evondev"],["age",18]]gồm có key và value
const entries=Object.entries(student);
console.log(entries);
//Object.assign:gộp nhỉu obejct
const a={
    firstName:"duy",
}
const b={
    lastName:"tran",
}
const c=Object.assign(a,b);
console.log(c);
const d= {...a,...b};
console.log(d);
// Object.freeze(object)-> không cho chỉnh sửa key vs value của object
const car = {
    brand:"BMW",
}
const newCar=Object.freeze(car);
newCar.brand="Audi";
console.log(newCar);
//Object.seal(object)-> cho phép chỉnh sửa value nhưng không dc thêm key value mới
const user={
    userName:"evondev",
    school:{
        name:"Cao Thang",
        room:{
            name:"IT",
        }
    }
}
// const newUser=Object.seal(user);
// newUser.userName="Tran anh tuan";
// newUser.lastName="john";
// console.log(newUser);

//sao chép một object
// const newUser=user; // nếu sài thì nó sẽ nguy hiểm vì 2 cái nó là Duy vậy nên là
const newUser={...user};
newUser.userName="Duy";
console.log(user);
console.log(newUser);
//object phức tạp
const newUse2r=Object.assign({},user);

console.log(newUse2r);
// dành cho cấu trúc phuc tap
const newUser3=JSON.parse(JSON.stringify(user));
newUser3.school.name="Des";
console.log(newUser3);
// this : nó sẽ đề cập tới object gần nhất
const student2={
    name:"evondev", 
    age:27,
    male:true,
    "last-name":"tuan",
    hi:function(){
        console.log(`my name is ${this.name}`);
   
    },
    // properties
   fullname: {
        name:"Duy",
    },  //method
}
student2.hi();
//Optional chaining
console.log(student2.fullname); // undefined
if(student2.fullname){
    if(student2.fullname.name){
        console.log(student2.fullname.name);
    }
}
// student2.fullname?.name=> ? điều kiện có hay không
console.log(student2.fullname?.name);
//Destructuring object
// const name=student2.name //<=>
// const age=student2.age //<=>
// const male=student2.male //<=>
const{name,age,male,...rest}=student2;
console.log(rest);
// nomal function
// function whatYourInfo(name,age,school){
//     console.log(name,age,school);
// }
// function with obejct paremeter
function whatYourInfo(obj){
    console.log(obj.name,obj.age,obj.school);
}
const newObj={
    school:"Cao Thang",
    age:27,
    name:"evondev",
}
// whatYourInfo(name,age,male);
// nếu không nhớ giá trị ?
whatYourInfo(newObj);
function whatYourInfo2({name,age,school}){
    console.log(name,age,school);
}
whatYourInfo2({
    name:"tuan",
    school:"Cao thang",
    age:18,
})


