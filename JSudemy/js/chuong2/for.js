// console.log("Kiting weights 1 ");
// console.log("Kiting weights 2 ");
// console.log("Kiting weights 3 ");
for (let rep=1;rep<=10;rep++){
    console.log(`Kiting weights ${rep} `);
}
const types=[];
const jonasArray=[
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter']
]
for (let i=0;i<jonasArray.length;i++){
        console.log(jonasArray[i]);
    types[i]=typeof jonasArray[i];
    // types.push(typeof jonas[i]);
}
console.log(types);
const years=[1991,2008,1956,2002];
const ages=[];

for(let i=0;i < years.length;i++ ){
    // thêm phần tử vào mảng 

 ages.push(2037-years[i]);
}
console.log(ages);
// continue and break
console.log('------------');
for (let i=0;i<jonasArray.length;i++){
    // continue : sẽ bỏ qua truc tiep cái bằng 
if(typeof jonasArray[i]!=='string') continue;
console.log(jonasArray[i]);
// types.push(typeof jonas[i]);
}
console.log('-------------99');
for (let i=0;i<jonasArray.length;i++){
    // break : dungb72 lai
if(typeof jonasArray[i]==='number') break;
console.log(jonasArray[i]);
// types.push(typeof jonas[i]);

}
// 0,1...,4
// 4,3,2,1
for(let i=jonasArray.length-1;i>=0;i--){
    console.log(i,jonasArray[i]);
}
// mô tả : sẽ có 3 bài tập và mỗi bài tập sẽ có 5 bài tập sài for
for(let exercise=1;exercise<4;exercise++){

    console.log(`----Starting exercise ${exercise}`);
    for(let rep=1;rep<6;rep++){
        console.log(`exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}