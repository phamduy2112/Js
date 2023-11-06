// array 
const a="a";
const b="b";
const c="c";
// 2 cách tạo mảng
// const students1=[];
//constructor
const student2= new Array();
// Vd 1 mảng 

// mảng phức tạp [0,false,underfined,null,["evondev",false,["aa"]]]
// mảng đơn giản[0,false,undefined];
const students1=['duy','du','quang','hoa','quang'];
// 0 1 2 3
// index: vi tri cua phan tu (gia tri) trong mang va no bat dau tu 0
// length: độ dài của mảng, nó đếm từ 1
// truy xuất trong mảng -> students1[index];
console.log(students1[0]);
console.log(students1[1]);
// arrayName.method
// lấy phần tử cuối cùng trong mảng=độ dài của mảng-1->array.length-1
console.log(students1[students1.length-1]);
// []: empty array,mảng rỗng
// Phương thức hay dùng của mảng nên biết
//length->trả về độ dài của mảng
console.log(students1.length);
// reverse-> đảo ngược giá trị trong mảng
// console.log(students1.reverse());
// join-> nối các phần tử trong mảng thành string
console.log(students1.join('-'));
//includes:phương thức này dùng để kiểm tra phần tử có nằm trong mảng hay không 
console.log(students1.includes(1));
//indexOf()=> trả về phần tử tìm thấy đầu tiên
console.log(students1.indexOf('duy'));
// lastOf()=> trả về phần tử tìm thấy cuối cùng
console.log(students1.lastIndexOf("quang"));
// push thêm phần tử vào cuối mảng 
console.log(students1.push("ASDSA"));

// unshift: thêm phần tử vào đầu mảng
console.log(students1.unshift("ASD"));
console.log(students1);
// pop xoá phần tử cuối cùng
students1.pop();
// shift xoá phần tử đầu tiên của mảng

//slice tạo ra 1 mảng coppy của mảng ban đầu
const animals=['tiger','lion','horse','elepant'];
const animals2=animals.slice();
console.log(animals2);
//slice(start).start -> vi tri index ở trong mảng
const animals3=animals.slice(1);
console.log(animals3);
//slice(start,end),start là vị trí băt2 đầu,end là vị trí kết thúc
// nó sẽ sao chép từ phần tử start tới phần tử end-1
const animals4=animals.slice(1,3);
console.log(animals4);
//splice
const pets=['dog','cat','bird','dragon'];
// const pets1=pets.splice(0); // nó giống slice
// console.log(pets1);
// khác splice(start,deleteCount,item1,item2):deleteCount là sớ lượng phần tử muốn xoá , item1 vs item2 thay vào phần tử xoá
//[] empty array: mảng rỗng
const pets2=pets.splice(0,1,"nieu");
console.log(pets);
//sort: sắp xếp các phần tử trong mảng unicode-16
const random=[1,1000,10,5,9];
// tính số đầu tiên
console.log(random.sort());
// sort(function(a,b))
// function(callback)
const ramdom2=random.sort(function(a,b){
    if(a>b) return 1; // đổi vị trí cho nhau
    if(a<b) return -1;// không đổi vị trí cho nhau

});
const random3=random.sort((a,b)=>a>b ? 1 : -1)
console.log(random3);
const randomNumbers=[1,10000,999,33,5];
const sorteNumbers=randomNumbers.sort((a,b)=>a>b?1:-1);
console.log("Sắp xếp",sorteNumbers);
//value > 0 -> sắp xếp tăng dần
//value < 0 -> sắp xếp giảm dần
//value = 0 -> giữ nguyên
//find nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thoả điều khiện trong mảng
// Tim phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber=randomNumbers.find((element,index)=>element>10);
// Neu61 khong tim thay thi no se tra ve undefined
console.log(findYourNumber);
//findIndex nó sẽ trả về vị tr1i đầu tiên trong mảng thoá đều kiện nào đó nếu không thấy thì sẽ trả về kết quả -1
//forEach duyệt qua từng phần tử
listNumber=[1,2,3,4,5,6];
// map : duyệt qua từng phần tử và tạo 1 mảng mới dựa vào mảng ban đầu
// trả ra 1 mảng mới mà các số trong mảng cũ vào mảng ban đầu nhân 2
const listNumberDouble = listNumber.map(function(value,index){
    return value * 2; 
})
console.log(listNumberDouble);
const listNumberTripple=listNumber.forEach((value,index,array) => {
    return value *3;
});
console.log(listNumberTripple);
// khác nhau giữa forEach và map : 
// foreach không return dc 
// foreach không thể tạo ra 1 mảng mới dựa 
//foreach chạy mãi k dừng thường sử dụng dom
// filter(callback(value,index,array))
//const listNumber=[1,2,3,4,5];
const greaterThanThree=listNumber.filter((item,index,array)=>{
return item>3;
});
console.log(listNumber);
console.log(greaterThanThree);
//some va every
//some:trả về true thì thoả 1 dk và ngược lại trả về false khi không thoả dk nào cả
const someNumber=listNumber.some(value => value >3);
console.log(someNumber);
// every: chỉ trả về true khi tất cả điền kiện đều đúng,ngược lại chỉ cần 1 cái sai là nó sẽ return false;
const everyNymber=listNumber.every((value)=>value >0);
console.log(everyNymber);
//reduce: gom cac phần tử trong mảng lại thành 1
//.reduce((a,b)=>{},initialize value);
const totalNumber=listNumber.reduce(function(a,b){
    return a+b;
},0);
console.log(totalNumber);
//By value và by references
//By value -> giá trị thực sự dc lưu trong vùng bộ nhớ
const num1=1
const num2=1;
console.log(num1===num2);
//by references-> nói tói7 vùng bộ nhớ
const arr1=[1,2];
const arr2=[1,2];
console.log(arr1===arr2);// false
// JSON.stringify(value)->convert giá trị sang dưới dàng JSON.string
// vd {key: value}
//JSON.stringify([1,2,3])->"[1,2,3]"
// so sanh : JSON.pare("[1,2,3]")=> [1,2,3];
console.log(JSON.stringify([1,2,3]));
console.log(JSON.parse("[1,2,3]"));
const arr1Str=JSON.stringify(arr1);
const arr2Str=JSON.stringify(arr2);
console.log(arr1Str===arr2Str)
//2 cách để sao chép mảng cần biết
const students=["a","b","c","d"];
// sao chép mảng để làm
//slice();
const sliceStudents=students.slice();
console.log(sliceStudents);
// 2. soread operatir(...array)
const spreadStudents=[...sliceStudents];
console.log(spreadStudents);
//2 cách để gộp mảng cần nắm
// [1,2] [3,4] [...]=>[1,2,3,4,...]
// concact
//array1.concat(array2,aaray3,...)
const array1=[1,2];
const array2=[3,4];
const array3=[5,6];
const mergeArray=array1.concat(array2,array3);
console.log(mergeArray);
const mergeArray2=[...array1,...array2];
console.log(mergeArray2);
// Destructuring
const toys=['ball','sword','arrow','magic'];
const a1=toys[0];
const a2=toys[1];
const a3=toys[2];
//const[name,name,name]=toys;
const [x1,...rest]=toys;
console.log(x1);
//rest parameter phần còn lại
console.log(rest);
function demo(a,...rest){
    console.log(a,rest);
}
demo(1,2,3,5,6);
// for of
//for(varialbe of array){}
let a6=[];
numbers=[1,2,3,4,5,6,7];
for(let value of numbers){
    value+=10;
    a6.push(value);
}
console.log(a6);
for(let value of "Diu"){
    console.log(value);
}

