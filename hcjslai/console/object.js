let x;

const person={
    name:'Duy',
    age:30,
    isAdmin:true,
    address:{
        street:'123 Main st',
        city:'Boston',
        state:'Ma'
    },
    hobbies:['music','sports'],
}
x=person.name;
x=person['age'];
x=person.address.city;
x=person.hobbies[0];
person.name="Binh";
person['isAdmin']=false;
// xoá
delete person.age;
person.hasChildren=true;
person.greet=function(){
    console.log(`Hello,my name is ${this.name}`);
}

person.greet();
// cách 2
const person2={
    'first name':'Duu',

}
x=person2['first name'];
console.log(x);
// Object Spread Operator

let a;
// const todo={};
const todo= new Object();
// key=values
todo.id=1;
todo.name='Buy Milk';
todo.completed=false;

a=todo;
const person3={
    address:{
        coords:{
            lat:42.9087,
            lng:-81.22
        }
    }
};
a=person3.address.coords.lat;
const obj1={a:1,b:2};
const obj2={c:3,d:4};
const obj3={...obj1,...obj2 };
// const result = Object.assign(target, obj1, obj2);
// target là đối tượng đích, được khởi tạo là một đối tượng rỗng.
// obj1 và obj2 là các đối tượng nguồn, có các thuộc tính sẽ được sao chép vào target.
const obj4=Object.assign({},obj1,obj2);
const todos=[
    // {key,value}
    {id:1,name:'Duy'},
    {id:2,name:'Duy1'},
    {id:3,name:'Duy2'}
]
a={...todos};
a=Object.keys(todo);
a=Object.keys(todo).length;
//  co1 ca3 key vs value 1 dang mang
a=Object.entries(todo);
// kt xem co ton tai khong 
// x=todo.hasOwnProperty('name');
console.log(a);
// destructuring & naming
// ES6
const firstName='John';
const lastName='Doe';
const age=30;
const person5={
    firstName,
    lastName,
    age,
}
console.log(person5.age);
// destructuring
const todo5={
    id:1,
    title:'Take out trash',
    user:{
        name:'Duy',
    }

}
// cách 1
// const id=todo.id;
// cách 2
const {id:TodoId,title,user:{ name }}=todo5
console.log(TodoId,title,name);
// destructuring arrays
const numbers=[23,67,33,59];
const [first,second,...rest]=numbers;
console.log(first,second,rest);
