// function declaration
function calcAge1(birthYeah){
    return 2037-birthYeah;

}
console.log(calcAge1(1991));
const age1=calcAge1(1990);
console.log(age1);
//function expression
const calcAge2=function (birthYeah){
    return 2037-birthYeah;

}
const age2=calcAge2(1991);
console.log(age1,age2);
//arrow function
const caclAge3=birthYeah=>2037-birthYeah;
const age3=caclAge3(1991);
console.log(age3);
const yearsUnitilRetirement=(birthYeah,firtName)=>{
    const age=2037-birthYeah;
    const retirement=65-age;
    return `${firtName} có độ tuổi ${retirement}`;
}
console.log(yearsUnitilRetirement(1991,"Duy"));
// Bt
function cutFruitPieces(fruit){
    return fruit*4;
}
function fruitProcessor(apples,oranges){
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);
    const juice=`Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));