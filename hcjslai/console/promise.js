// status:pending
// status:success
// status:reject

let buyIphone=true;
let willBuyIphone=new Promise(function(resolve,reject){
setTimeout(()=>{
    if(buyIphone){
        resolve("Oh year");
        console.log("OK");
    }else{
        reject('No');
        console.log("not ok");
    }  
},5000)
  

})
console.log(willBuyIphone);
//.then(onfullfiled,onrejected)
function makePromise(buyIphone){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(buyIphone){
                resolve("Oh year");
                console.log("OK");
            }else{
                reject('No');
                console.log("Not ok");
            }
            },5000)
    })
}
// onFullfilled->resolve
// onrejected->reject
let haveIphone=makePromise(true);
haveIphone.then(
    //undefined,
    (success)=>console.log(success),
    (reason)=>console.log(reason)
).catch(error=>{
    console.log(error);
}).finally(()=>{
    // thất bại hay thành công đi nũa7 vẫn chạy vào finally
    console.log("Tôi vui vl");
})
// catch , finally