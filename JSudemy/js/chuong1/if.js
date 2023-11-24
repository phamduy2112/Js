const age =16;
const isOldEnough=age>=18;
if(age>=18){
    console.log('Sarah can start driving lincense');
}else{
    const yearsLeft=18-age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}
const birthYear=2001;
let century;
if(birthYear<=2000){
     century=20;
}else{
     century=21;
}
console.log(century);