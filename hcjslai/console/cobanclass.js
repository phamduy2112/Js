// Values are stored on the stack
let name='Duy';
let age=30;
// Reference values are stored on the heap
let person={
    name:'Brad',
    age:40
}
let newName=name;
newName='Johnaaa';
let newPerson=person;
newPerson.name="Duy";
console.log(name,newName);
console.log(person,newPerson);
// change string to number
// type conversion chuyển đổi
let amount='100.5';
// amount=parseInt(amount);
// amount=Number(amount);
// Change number to string
// amount=amount.toString();
// amount=String(amount);
// change string to decimal: số lẻ
// amount=parseFloat(amount)
// Convert number to boolean
amount=Boolean(amount);
console.log(1+NaN);
console.log(amount,typeof amount);