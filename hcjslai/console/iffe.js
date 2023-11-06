let fullname='Son Dang';
let i=0;
(function myfunc(){
const user='John';
console.log(user);
const hello=()=>console.log('Hello from the IIFE');
hello();
})();

(function (name){
console.log('hello'+name)
})('Duy');
(function hello(){
    console.log('Hello');
   
})()