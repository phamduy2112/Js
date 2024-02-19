let a=1;
let b=2;
let c=3;
function getWage(a,b,c){
    return a+(b*c);
}

// hoặc

let employee={
    a:1,
    b:2,
    c:3,
    getWage:function(){
        return this.a+(this.b*this.c)
    }
}
console.log(employee.getWage()); 



// sao chép qua
function createCircle(radius,x,y){
return {
    radius,
//  
draw:function(){
console.log('draw');

}
}
 
}
// circle.draw();

// const circle=createCircle(1);

// constructor Function

function Circle(radius){
    // console.log('this',this);
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
    // return this;
}
const Circle1=new Function ('radius',`
this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
`)
const circle=new Circle1(1)
console.log(circle);
Circle.call({},1)
const another=new Circle(1);
// Prototype  : kế thừa class
const Person = function(name, age) {
    this.name = name;
    this.age = age;
  };
  
  // Prototype property
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };

//   
const obj1 = {};
const obj2 = {
  name: 'John Doe',
};

obj1.__proto__ = obj2;

console.log(obj1.name); // In ra "John Doe"

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const person1 = new Person('John Doe');
  
  const obj1 = {};
  
  Object.setPrototypeOf(obj1, person1);
  
  console.log(obj1.name); // In ra "John Doe"