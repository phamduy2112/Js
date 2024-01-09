"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
const days=['mon','tue','wed','thu','fri','sat','sun'];

// Data needed for first part of the section
const openingHours={
 
  [days[3]]:  {
      open: 12,
      close: 22,
    },
    [days[4]]: {
      open: 11,
      close: 23,
    },
   [`day-${2+4}`]: {
      open: 0, // Open 24 hours
      close: 24,
    },

}

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
  },
  orderDelivery({startIndex,mainIndex=1,time='22:00',address}){
    console.log(`Order received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]}will be delivered to ${address} at ${time}`);
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  openingHours,
  orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza(mainIngredient,...otherIngredient){
      console.log(mainIngredient);
      console.log(otherIngredient);
  }

};
// const arr = [2, 3, 4];
// // const a= arr[0];
// const [a, b, c] = arr;

// console.log(a);
// let [main, , secondly] = restaurant.categories;
// console.log(main, secondly);
// const temp=main;
// main=secondly;
// secondly=temp;
// console.log(main,secondly);
// [secondly,main]

// [main, secondly] = [secondly, main];
// console.log(main, secondly);
// const [start, end] = restaurant.order(2, 0);
// console.log(start, end);
// const nested = [2, 4, [5, 6]];
// // const [i, ,j]=nested;
// // console.log(i,j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
// // Default values;
// const [p = 1, q = 1, r = 1] = [9, 9];
// console.log(p, q, r);
// // {tên của object}
// console.log("----------------------");
// const { name, openingHours } = restaurant;
// console.log(name, openingHours);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const {menu=[],starterMenu:starters=[]}=restaurant;
// console.log(menu,starters);

// let a1=111;
// let b1=999;

// let obj1={a1:23,b1:312,c:14};
// ( {a1,b1} = obj1);
// console.log(a1,b1);

// // Nested object

// const {fri:{open,close}}=openingHours;
// console.log(open,close);

// restaurant.orderDelivery({
//   time:'22:30',
//   address:'Via del Sole,21',
//   mainIndex:2,
//   startIndex:2,
// })
// restaurant.orderDelivery({
 
//   address:'Via del Sole,21',

//   startIndex:2,
// })
// --------------
// console.log('======');
// const arr1=[7,8,0];
// const badNewArr=[1,2,arr1[0],arr1[1],arr1[2]];
// console.log(badNewArr);
// const newArr=[1,2,...arr1];
// console.log(newArr);

// console.log(...newArr);
// console.log(1,2,7,8,9);

// const newMenu=[...restaurant.mainMenu,'Gnocci'];
// console.log(newMenu);
// // Coppy array
// const mainMenuCoppy=[...restaurant.mainMenu];
// Jon 2 arrays
// const menu=[...mainMenuCoppy.starterMenu,...restaurant.mainMenu]
// console.log(menu);
// const ingredients=[
//   prompt('Lets make pasta Ingredien 1?'),
//   prompt('Lets make pasta Ingredien 2?'),
//   prompt('Lets make pasta Ingredien 3?'),

// ]
// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])
// restaurant.orderPasta(...ingredients)
//object
// const newRestaurant={...restaurant,founder:"Guiseppe"}
// console.log(newRestaurant);
// const restaurantCoppy={...restaurant};
// restaurantCoppy.name="Duy";
// console.log(restaurantCoppy.name);
// console.log(restaurant.name);


//Desturing
// 00000000000
const arr=[1,2,...[3,4]];
const [a,b, ...others]=[1,2,3,4,5];
console.log(a,b,others);

const [pizza, ,risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risotto,otherFood);

// object
const {sat,...weekdays}=restaurant.openingHours;
console.log(weekdays);
//


// functions

// const add=function(...numbers){
// let sum=0;
// for(let i=0;i<numbers.length;i++){
//   sum+=numbers[i];
// }
// console.log(sum);
// }
// add (2,3);
// add(5,3,3,4,5);
// const x=[23,5,7]
// add(...x);
// restaurant.orderPizza('mushrooms','onion','olives','s[omach')
// restaurant.orderPizza('mushrooms');
// // 
// console.log('----------------');
// const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
// for (const item of menu){
//   console.log(item);
// }
// for (const [item,element] of menu.entries()){
//   console.log(`${item+1}: ${element}`);
// }
// console.log([...menu.entries()]);
// console.log(restaurant.openingHours); 
// 
// toán tử hay lắm đấy
// if(restaurant.openingHours&&restaurant.openingHours.mon)console.log(restaurant.openingHours.mon.open);


// // With optiional chaining: nó sẽ kiểm tra xem trc ? là under hay null để trả về có giá trị thì thực hiện

// console.log(restaurant.openingHours.day6?.thu);
// for(const day of days){
//   console.log(day);
//   const open=restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`)
// }
// // Nếu restaurant có order thì sẽ chạy còn không nếu là null hoặc under thì sẽ ??,||=> trả về giá trị truethy
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderasd?.(0,1) ?? 'Method does not exist');

// const users=[
//   {name:'Jonas',email:'duyp7484@gmail.com'}
// ]
// console.log(users[1]?.name ?? "Khong co gi het");

// if(users.length>0){
// console.log(users[1].name);
// } 
// else {
//   console.log("Khong co gi het tron");
// }
// property Name
const properties=Object.keys(openingHours);
console.log(properties);
let openStr=`We are open on ${properties.length} days`;

for(const day of properties){
  openStr+=`${day},`;
}
console.log(openStr);

// property value
const values =Object.values(openingHours);
console.log(values);


//Entire object: key và value 
const entries=Object.entries(openingHours);
console.log(entries);

for(const [key,{open,close}] of entries){
  console.log(`On ${key} days we open at ${open} and close at ${close}`);
}
// bản sao  k bị trùng lặp giá trị
const orderSet=new Set(['Pasta','Pizza',"Risotto",'Pasta','Pizza',"Risotto"]);

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
orderSet.add("Garlic Break");
orderSet.delete('Risotto')
console.log(orderSet);
// for (const order of orderSet) console.log(order);

// // 
// const staff=['Waiter','Chef','Waiter','Manager','Chef'];

// const staffUnique=[...new Set(staff)];
// console.log(staffUnique);

// const rest=new Map();
// rest.set('name','classico Italiano').set('open',11).set('close',23).set(true,'Chúng tôi đang mở').set(false,'Chúng tôi đã đóng cửa');

// console.log(rest);
// const time=21;
// console.log(rest.get(time>rest.get('open')&& time < rest.get('close')))


// const question=new Map([
//   ['question','Duy co dep trai khong ?'],

//   [1,"Rất đẹp trai"],
//   [2,"Như câu trên"],
//   [3,"Đẹp trai lắm"],
//   [4,"Quá khen rồi"],
//   ['correct',1],
//   [true, 'Đúng'],
//   [false,'Sai']
//     ])

// console.log(question);

// // chuyển từ object sang map
// const hoursMap=new Map(Object.entries(openingHours));

// console.log(hoursMap);

// console.log(question.get('question'));
// for(const [key,value] of question){
//   if(typeof key==='number') console.log(`Answer ${key}: ${value}`);
// }
// const answer=Number(prompt("your answer"));
// console.log(answer);
// console.log(question.get(question.get('correct')===answer));


// map thành array

// console.log([...question]);

const airline='Tap Air Portugal';
const plane='A320';

console.log(plane.length);
// tìm kiếm vị trí : k có thì trả về -1
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0,airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ")+1));

const checkMiddleSeat=function(seat){
  // B and E are middle seats
  // lấy cuối từ dưới lên -1 -2
  const s= seat.slice(-1);
  console.log(s);
  if(s==='B'|| s==='E'){
    console.log("You got the middle seat");
  }else{
    console.log('You got lucky');
  }
}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('12E')

console.log(airline.toLocaleLowerCase());
console.log('jonas'.toUpperCase());
//
const passenger='jOnAS'; // Jonas
const passengerLower=passenger.toLowerCase();
const passengerCorrect=passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email

const email='hello@jonas.io';

const loginEmail=' Hello@Jonas.io \n'


const lowerEmail=loginEmail.toLowerCase();
const trimEmail=lowerEmail.trim();
console.log(trimEmail);
const normalizeEmail=loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email===normalizeEmail);

// replacing

const priceGB='288,85S';
const priceUS=priceGB.replace('S','$').replace(',','.');
console.log(priceUS);


const plane1='Airbus A320neo'
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Air'));

if(plane1.startsWith('Airbus')&&plane1.endsWith('neo')){
  console.log("Ban5 da9 tham gia may bay");
}


const checkBaggage=function(item){
   const baggage=item.toLowerCase();
   if(baggage.includes('knife')|| baggage.includes('gun')){
    console.log('YOu are not a allowed on board');
   }else{
    console.log('Welcome aborad');
   }
}
checkBaggage('I have a laptop,some food and a pocket knife');
checkBaggage('Socks and cammer');
checkBaggage('Got som snacks and a gun for...');