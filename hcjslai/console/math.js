console.log(Math);
let x=Math.sqrt(4);
x=Math.abs(-3);

x=Math.round(4.6); // 5
//  bất chấp làm tròn 1 số miễn là có .
x=Math.ceil(4.2); //5
x=Math.floor(4.9)//4
x=Math.pow(2,3) // luỹ thừa
x=Math.ceil(Math.random()*10+1);
console.log(x);

// bt
 const a=Math.floor(Math.random()*100+1);
 const b=Math.floor(Math.random()*50+1);
//  +
 const sum=a+b;
const sumOutput=`${a}+${b}=${sum}`;
console.log(sumOutput);
// -
const diff=a-b;
const diffOutput=`${a}-${b}=${diff}`;
 console.log(diffOutput);
//  *
const prod=a*b;
const prodOutput=`${a}*${b}=${prod}`;
 console.log(prodOutput);
//  %
const quot=a/b;
const quotOutput=`${a}*${b}=${quot}`;
 console.log(quotOutput);