// use Any data type, return any data type, shor-circuiting
console.log(3||"AS");
console.log(''|| "Duy");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello');
const rest1={
  name:"Capri",
  numGuests:0,
}
const rest2={
  name:"Capri",
  owner:'Giovanni Rossi',
}
// toán tử || :
// Toán tử || sẽ tính toán từ trái sang phải.
// Nếu toán hạng bên trái là true, toán tử sẽ trả về giá trị của toán hạng bên trái mà không cần đánh giá toán hạng bên phải.
// Nếu toán hạng bên trái là false, toán tử sẽ tiếp tục đánh giá toán hạng bên phải và trả về giá trị của toán hạng bên phải.
// Toán tử || sẽ luôn trả về một giá trị.
// Nếu cả hai toán hạng đều là false, toán tử sẽ trả về giá trị của toán hạng bên phải.
// 
// nó sẽ trả về truethy về giá trị
//còn falsethy :null, undefined, 0, NaN, "", hoặc false
// rest2.numGuests=rest1.numGuests || 10;
// rest2.numGuests=rest2.numGuests ||5;
// rest1.numGuests||=10;
// rest2.numGuests||=160;

// toán tử nullish nếu có thì trả về k thì trả về bên phải
// && sẽ trả về false
rest1.numGuests&&=15;
//  còn ?? thì sẽ trả về true
rest2.numGuests??=20;
rest2.owner = rest2.owner && '<AND>'
console.log(rest2);
console.log(rest1);