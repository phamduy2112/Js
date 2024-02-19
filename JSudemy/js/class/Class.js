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
    get age(){
        return 2037-this.birthYear;
    }
    set fullName(name){
        if(name.includes('')){
            this._fullName=name;
        }else{
            console.log("Day k phai la full name cua ban");
        }
    }
    get fullName(){
        return this._fullName;
    }
    // 
    static hey(){
        console.log('he there');
        console.log(this);
    }
}

const jessica=new PersonCl('Jessica',1996)
console.log(jessica.fullName);
jessica.calcAge(); 

// PersonCl.prototype.greet=function(){
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

const account1 = {
    owner :'jonas',
    movements :[200,530,120,300],
    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);

    }
}

console.log(account1.latest);
account1.latest=50;
console.log(account1.movements);

Person.hey=function(){
    console.log('hey there');
}

Person.hey();
PersonCl.hey();


const PersonProto={
    calcAge(){
        console.log(2037-this.birthYear);
    },
    init(firstname,birthYear){
        this.firstName=firstname;
        this.birthYear=birthYear;
    }
}

const steven=Object.create(PersonProto);
steven.name='Steven';
steven.birthYear=2002;
console.log(steven.__proto__===PersonProto);

const sarah=Object.create(PersonProto);


sarah.init('sarah',1979);
sarah.calcAge();