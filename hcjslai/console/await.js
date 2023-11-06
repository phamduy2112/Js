function wait(timer=0){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,timer);

    });
}
// function expression
async function run(){
    console.log("starting");
    await wait(2000);
    console.log("running");
    await wait(1000);
    console.log("ending");
}
run();
// arrow function 
const fn=async ()=>{};
const student={fullname: async function(){},
                async calcAge(){},
                yearly:async()=>{},
}
function makeTimer(timer=1000,str){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
        
                resolve(str);
            },timer);
        })
    
}
async function allTimer(){
    const timer1= makeTimer(1000,"first time");
const timer2=  makeTimer(2000,"second time");
const [a,b]=await Promise.all([timer1,timer2]);

console.log(a,b);

// const timer3= await makeTimer(3000,"third time");
// console.log(timer3);
}
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
function handleError(err){
    console.log(err);
}
async function go(){
  
//     try{
//   const dev1=await isFrontendDev(["css"]);
//     console.log(dev1);
// }catch (error){
//     console.log(error);
// }
  const dev1=await isFrontendDev(["css"]);
    console.log(dev1);
    return dev1;
}
// pending

go()
// .then()
.catch(handleError);