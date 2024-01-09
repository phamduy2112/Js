'use strict';
const Person=function(firstName,birthYear){
    //Instance properties
    this.firstName=firstName;
    this.birthYear=birthYear;

    // this.calcAng=function(){
    //     console.log(2038-this.birthYear);
    // }
}

const jonas=new Person('Jonas',1991);

console.log(jonas);
const matilda=new Person('Matida',2017);
const jack = new Person('Jack',1975);

// 1. New() is created
// 2. function is called,this={}
//3.{} lined to prototype
// 4. function automatically return {}

// prototype 
Person.prototype.calcAng=function(){
    console.log(2037-this.birthYear);
}
jonas.calcAng();
console.log(jonas.__proto__);
console.log(Person.prototype.isPrototypeOf(jonas));

// .prototyeOfLinkedObjects
Person.prototype.species='Homo Sapiens';
console.log(jonas.hasOwnProperty('firstName'));
console.log(Person.prototype.constructor);
const arr=[1,3,4,5,2];
const chuoi='asd'
console.log(chuoi.__proto__);
console.log(arr.__proto__.__proto__);
Array.prototype.unique=function(){
    return [...new Set(this)]
}
console.log(arr.unique());
const h1=document.querySelector('h1');
console.log(h1.__proto__);
console.dir(h1)
const Car= function (make,speed){
this.make =make ;
this.speed=speed;

}
Car.prototype.accelerate=function(){
    this.speed +=10;
    console.log(`${this.make} is giong at ${this.speed} km/h`);
}
Car.prototype.brake=function(){
    this.speed -=5;
    console.log(`${this.make} is giong at ${this.speed} km/h`);
}
const bmw=new Car('BWN',120)
const mercedes=new Car("Mercedes",95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
// class expression
// const PersonCl1=class{
 
// }
// class declaration
class PersonCl{
    constructor(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;

    }
    // Methods will be added to .prototype property

    calcAge(){
        console.log(2037-this.birthYear);
        }
    greet(){
        console.log(`Hey ${this.firstName}`);
    }
}
const jessica=new PersonCl('Jessica',1996)
console.log(jessica);
jessica.calcAge(); 

// PersonCl.prototype.greet=function(){
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet();