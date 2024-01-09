let student={
    firstName:"Duy",
    fullName:"Pham",
    age:28,
}
// constuctor function Person Student
function Student(name,age){
    // this={}
    this.name=name;
    this.age=age;
    // return this
    this.getName=function(){
        return `your name is ${this.name}`

    }
}
let student2=new Student("John",40);
console.log(student2.getName());
// string , number , boolean
// String.prototype,number.prototype
// prototype ke thua
let str="Abc";
String.prototype.duplicate=function(){
    return this + this;
}
str.duplicate();
function Girl(){
    this.cook=function(){
        console.log("Your grilfriend can cook");
    }

}
Girl.prototype.sing=function(){
    console.log("Your girlfriend can sing");
}
Object.prototype.makeSandwich=function(){

}
let Jane=new Girl();
Jane.cook();
Jane.sing()

// tong hop
function Person1(name){
    this.name=name;
}
Person1.prototype.getName=function(){
    console.log(this.name);
}
const evondev=new Person1("Duy");
evondev.getName();
class Person{
    constructor(name){
        this.name=name
    }
    // lấy ra
    // getName(){
    //     return this.name
    // }
    get name(){
        return this._name;

    }
    // thay đổi
    // setName(newName){
    //     this.name=newName;
    // }
    set name(newName){
        return this._name=newName
    }

}
// hoac
function compare(){
    return a-b;
}
const duyvon=class{
 constructor(name){
        this.name=name
    }
    // lấy ra
    // getName(){
    //     return this.name
    // }
    get name(){
        return this._name;

    }
    // thay đổi
    // setName(newName){
    //     this.name=newName;
    // }
    set name(newName){
        return this._name=newName
    }
    static 

}
//  class:ES6
const duy=new Person("duy");

// console.log(duy.getName());
// duy.setName("Vinh");
// console.log(duy);

//========
console.log(duy.name);
duy.name="Vinh";
console.log(duy.name);
const evon=new Student("Envodev");

// static method
//