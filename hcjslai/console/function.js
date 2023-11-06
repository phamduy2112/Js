function sayHello(){
    console.log('Hello World');
}
sayHello();
function add(num1,num2){
    console.log(num1+num2);

}
add(5,10);

function subtract(num1,num2){
    return num1-num2;
    console.log('After the return');
}
const result=subtract(10,2);
console.log(result);
// Parameters  & Arguments
// Default Params
function registerUser(user='Bot'){
    // if(!user){
    //     user='Bot';
    // }
    return user+' is registered';
}
// Sử dụng for...of khi bạn muốn duyệt qua từng phần tử trong mảng.
// Sử dụng for...in khi bạn muốn duyệt qua các thuộc tính của đối tượng.
console.log(registerUser());
// Rest Params
function sum(...numbers){
let total=0;
for(const num of numbers){
    total+=num;
}
return total;
}
console.log(sum(1,2,3,4,5));
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id}`
}
const user={
    id:1,
    name:'John',
};
console.log(loginUser(user));
console.log(loginUser({
    id:2,
    name:'Sara',
    }));
function getRadom(...arr){
    const randomIndex=Math.floor(Math.random()*arr.length); // in ra 0
    // gắn giá trị vào item
const item=arr[randomIndex];
console.log(item);
}
getRadom(0,1,2)
