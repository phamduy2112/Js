const person={
    name:'John',
    sayHi:function(){
        console.log(`Hello,my name is ${this.name}`);
    }
}
// bind: trỏ về name person 
const greet=person.sayHi;
greet();