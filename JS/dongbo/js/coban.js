// let x=10;
// function timesTen(a){
//     return a*10;

// }
// let y=timesTen(x);
// console.log(y); // 100
// // cách hoạt động
// //==Global execution context==
// // the creation phase:tạo
// // window:Global object
// // this:window lưu vào bộ nhớ 
// //  x:undefined  
// // timesTen:function(){}
// // y:undefiend
// // the execution phase : thực thi
// // Global object :window
// // this:window
// // x:10;
// // timesTen:function(){}
// // y:undefiend

// //function execution context
// // global object: arguments
// // this:window
// // a: undefined



// // execution phase
// // 

// //Callstack
// function add(a,b){
//     return a+b;
// }
// function average(a,b){
//     return add(a,b)/2;
// }
// let result=average(10,20);
// // add() => sao khi chạy xong là 30
// // average()
// // global() chạy đầu
// // result
// // average()=> chay xong là 15
// // global()
// //
// // global()

// //event loop
// function task(message){
//     let number=100000;
//     while(number>0){
//         number--;

//     }
//     console.log(message);
// }
// console.log("Start");
// task("loading")
// console.log('end');
// // main
// // callbacks: 1 function nam82 trong 1 function khac
// console.log('start');
// setTimeout(()=>{
//     task("loading");
// },2000);
// console.log("end");
// // web API: setTimeout,fetch request

// //Callback hell
// setTimeout(()=>{
//     console.log("run the first time");
//     setTimeout(()=>{
//         console.log("run the second time");
//         setTimeout(()=>{
//             console.log("run the third time");
//         })
//     },3000)
// },5000)
// //Promise 
// //status:pending
// // status:success
// // status:reject
// // new Promise (function(resolve,reject))
// // let buyIphone=true;
// // let willBuyIphone= new Promise(function(resolve,reject){
// //    setTimeout(()=>{
// //       if(buyIphone){
// //         resolve("oh yearh i have new Iphone")
// //         console.log("OK");
// //     }else{
// //         reject("Oh no ,I dont have new iphone");
// //        console.log("not ok");
// //  } 
// //    },5000)
 

// // })
// // console.log(willBuyIphone);
// // willBuyIphone;
// //.then(fullfilled,rejected)
// function makePromise(buyIphone){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             if(buyIphone){
//                 resolve("oh yearh i have new Iphone")
//                 console.log("OK");
//             }else{
//                 reject("Oh no ,I dont have new iphone");
//                console.log("not ok");
//             }
//         },5000)
//     })
// }
// // onfullfiled=> resolve
// // on rejected=>reject
// let haveIphone=makePromise(false);
// haveIphone.then(
//     // (success)=>{
//     //     console.log(success);
//     //     console.log("Im still happy");
//     // },
//     // success=>console.log(success),
//     // reason=>console.log(reason),
//     // hoặc  là mình để undefined
// )
// .catch(error=>{
//     // console.log(error);
// }).finally(()=>{
//     console.log("ASD");
// })
// //finnally: dù thành công hay thất bại
// // catch : bắt lỗi

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("run the first time");
//     },3000)
// })
// .then((data)=>{
//     console.log(data);
//     return new Promise(function(resolve,reject){
//         resolve('2.run the sencond time')
//     })
// })
// .then((data)=>{
//     console.log(data);
// })
function makeTimer(timer,str){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(str);
        },timer)
    })
}
const timer1=makeTimer(1000,"firsttime");
const timer2=makeTimer(1000,"seccond");
// chay ra tat ca
const timerTotal=Promise.all([timer1,timer2]).then((data)=>{
   console.log(data); 
});
// promise.race: chay nhanh nhất
const timerTotal2=Promise.race([timer1,timer2]).then((data)=>{
    console.log(data);
})
//  Promise.allSettled:=> 
function isFrontendDev(language){
    return new Promise(function(resolve,reject){
        if(!language.includes("html")){
            reject("You are not frontend developer");

        }
        setTimeout(()=>{
            resolve("You are frontend developer");

        },1000);
    })

}
const dev1=isFrontendDev(["html"],["css"]);
const dev2=isFrontendDev(["css"]);
// tat ca phai thanh cong neu that bai se xuat ra that bai
// const devAll=Promise.all([dev1,dev2]).then((data)=>{
//     console.log(data);
// })
// const devAll=Promise.race([dev1,dev2]).then((data)=>{
//     console.log(data);
// })
// cho du2 thanh cong hay di nua van chay
const devAll=Promise.allSettled([dev1,dev2]).then((data)=>{
    console.log(data);
})
// dung2 nhieu try catch
function isFrontendDev2(language){
       if(!language.includes("html")){
            // tra ve loi
            throw new Error("You are not frontend developer");

        } 
        return new Promise(function(resolve,reject){
    
        setTimeout(()=>{
            resolve("You are frontend developer");

        },1000);
    })

}


try{
isFrontendDev(['css']).then(data=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
}catch(error){
    // ben6 ngoai promise
console.log("ohhh nooooo");
}

function wait(timer=0){
    return new Promise(function(resolve,reject){
        setTimeout(resolve, timer)
    })
}
// async await
async function run(){
    console.log("starting");
    await wait(2000);
    console.log("ending");
}
run()
// arrow function
const fn=async ()=>{}
const student={
    fullname:async function(){},
    async calcAge(){

    },
    yearly:async()=>{},
}
async function allTimer(){
    // const timer1= await makeTimer(1000,"frist");
    // console.log(timer1);
    const timer1=makeTimer(1000,"frist");
    const timers=await Promise.all([timer1]);
}
allTimer();
async function go(){
    // try{

    
    // const dev1= await isFrontendDev(["ads"]);
    // console.log(dev1);
    // }catch(error){
    //     console.log(error);
    // };
       const dev1= await isFrontendDev(["ads"]);
    console.log(dev1);
    return dev1;
}
console.log(go());
go().then().catch((err)=>console.log(err))