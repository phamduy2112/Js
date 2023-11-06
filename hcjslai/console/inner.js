
// kích thước màn hình chiều rộng
// console.log(window.innerWidth);

// kích thước màn hình chiều dài
const x=100;
function run(){
    console.log(window.innerHeight);
    console.log(x,'in function')
}

// globan : vd x ở ngoài function thì nó vẫn hiện thực
// nhưng khi ở trong function thì nó sẽ k thực hiện ở ngoài
// Block:
if(true){
    // 1 ví dụ về globan
    const y=200;
    

}
// console.log(x+y);
for(let i=0;i<=10;i++){

}
// 1 ví dụ về  block scope
if(true){
    const a=500; // Chỉ có thể truy cập trong khối mã này
    let b=600;  // Chỉ có thể truy cập trong khối mã này
    var c=700; // Có thể truy cập bất kỳ đâu trong phạm vi bao gồm khối mã này

}

function run(){
    var d=100; // Chỉ có thể truy cập trong hàm run()
    console.log(d);
}


function first(){
    const x=100;
    function second(){
        const y=200;
        console.log(x+y);
    }
    second();
}
first();
if(true){
    const x=100;
    if(x===100){
        const y=200;
        console.log(x+y);
    }

}
// Declaration and Expression
// function Declaration
console.log(addDollarSign(30));
function addDollarSign(Value){
    return '$'+Value;
}

// function Expression

const addPlusSign=function(value){
    return '+'+value;
}
console.log(addPlusSign(200));
// arrow
// function add(a,b){
//     return a+b;
// } 
const add=(a,b)=>{return a+b}
// Implicit Return

const subtract=(a,b)=>a-b;
// Can leave off() with a single parametar
const double=a=>a*2;
//Returning an object
const createObj=()=>({
    name:'Duy'
})
// const numberss=[1,2,3,4,5,6];
// numberss.forEach(function(n){
//     console.log(n);

// })
// Arrow function in a callback
// numberss.forEach(n =>
//     console.log(n));
// console.log(double(2));
// console.log(createObj());



