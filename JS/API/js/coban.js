// Json.parse(data)
const endpoint="https://api.github.com/users/octocat";
const promise=fetch(endpoint);
promise
// .then(data=>{
//     console.log(data);
// })
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    console.log(data.login);
})
.catch(err=>{
    console.log(err);
})
const userEl=document.querySelector(".username");

async function displayUser(username){
    userEl.textContent=`Loading`
    const promise= await fetch(`${endpoint}/${username}`);

    const data=await promise.json();
    userEl.textContent=`${data.Login}`
    console.log("ASD",data);
    // promise
    // .then(data=>{
    //     console.log(data);
    // })
    // .then((response)=>{
    //     return response.json();
    // }).then((data)=>{
    //     console.log(data);
    //     console.log(data.login);
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
}
function handErr(){
    console.log("lỗi rồi");
    userEl.textContent="K có gì hết"
}
displayUser().catch(handErr);