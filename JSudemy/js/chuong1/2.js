const hasDriversLicense=true;//1
const hasGoodVision=false;
console.log(hasDriversLicense && hasGoodVision);
const shouldDrive=hasDriversLicense&&hasGoodVision;
if(shouldDrive){
    console.log("duydeptrai");
}else{
    console.log("duy giỏi");
}

const isTired=true;//C
if(23>10){
    const str='23 is bigger';

}
const me='Jonas';
const age=23;
// age>=18 ? console.log('I like to drink wine') : console.log('I dont line to drink wine');
const drink=age>=18 ? 'wine':'water';
console.log(`I like to drink ${drink}`);
console.log(`I'm ${2037-1991} years old. ${me}`)
console.log(`I like to drink ${age>=18 ? 'wine':'water'}`);