// 
let x = 10;
function timesTen(x) {
    return x * 10;
}
let y = timesTen(x)
console.log(y);
// Giải thích
// Global execution context
// window:Global object
// this:window
// x:underfined
// timesTen:function(){}
// y:undefined

// Global object:window
// this:window
// x:10
// timeTens:function(){}
// y:timeTens(x)=>100
// execution phase

// Global object:arguments
// this:window
// a:undefined

// execution phase
// Global object:arguments
// this:window
// a:10
function add(a, b) {
    return a + b;
}
function average(a, b) {
    return add(a, b) / 2;
}
let result = average(10, 20);
console.log(result);
// 
// add();
// average();
// global();
//
// result
// chạy
// average()
// global();
// chạy
// global();
// event loop
function task(message) {
    let number = 1000000;
    while (number > 0) {
        number--;
    }
    console.log(message);
}
// console.log("Start");
// task("loading");
// console.log('end');
// main
// call stack
// Start->task->end

// callback;
// Viet lại
console.log("Start");
setTimeout(() => {
    task("loading");
}, 2000)
// Rời khỏi callstack và chạy qua Web APIs sau 2s->Callback queue
// -> khi callstack empty->chạy xong-> rời khỏi call stack
console.log('end'); // chạy xong rời khỏi call stack
// Web APIs:setTimeout,fetch request,Dom Event;
// Callback hell
// setTimeout(()=>{

//     console.log("Run the first time");
//     setTimeout(()=>{
//         console.log('run the secondtime');
//     setTimeout(()=>{
//         console.log('run the thirttime');
//     })
//     },1000);

// },2000);
// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("run the first time");
//     }, 3000)
// })
//     .then((data) => {
//         console.log(data);
//         return new Promise(function (resolve, reject) {
//             setTimeout(() => {
//                 resolve("run the second time");
//             }, 3000)
//         })
//     })
//     .then(data => {
//         console.log(data);
//     })
// clean
function makeTimer(timer=1000,str){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
        
                resolve(str);
            },timer);
        })
    
}
const timer1=makeTimer(1000,"first time");
const timer2=makeTimer(2000,"second time");
const timer3=makeTimer(3000,"third time");
// chạy cùng lúc
const timerTotal=Promise.all([timer1,timer2,timer3]).then(data=>{
    console.log(data);
});
// Promise.race: cái chạy nhanh nhất 
const timerTotal2=Promise.race([timer1,timer2,timer3]).then(data=>{
    console.log(data);
})
// Promise.allSettled
function isFrontendDev(languages){
    return new Promise(function(resolve,reject){
        if(!languages.includes('html')){
            reject("You are not frontend developver");
        }
        setTimeout(() => {
            resolve("You are frontend developver");
        }, 1000);


    });

    
}
// const dev1=isFrontendDev(['html',"css"]);
// const dev2=isFrontendDev(["css"]);
// const devAll=Promise.all([dev1,dev2]).then(data=>{
//     console.log(data);
// })
// const devAllse=Promise.allSettled([dev1,dev2]).then(data=>{
//     console.log(data);
// })
// try catch bắt lỗi
function isFrontendDev2(languages){
    return new Promise(function(resolve,reject){
        if(!languages.includes('html')){
            // xuất lỗi
            throw new Error("You are not frontend developver");
        }
        setTimeout(() => {
            resolve("You are frontend developver");
        }, 1000);


    });

    
}
try{
isFrontendDev2(["css"]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

}catch(error)
{
    console.log("Có lỗi rồi");
}finally{
    console.log("demo");
}
