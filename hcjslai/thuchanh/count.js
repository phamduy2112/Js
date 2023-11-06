


// this giam=document.querySelector('.giam');
// this so=document.querySelector('.so');
// this tang=document.querySelector('.tang');
// this count=0
// giam.addEventListener('click',()=>{
// if(count>0){
//     count--;
// }else{
//     count=0;
// }
  

// so.textContent=`${count}`;
// })
// tang.addEventListener('click',()=>{
//     count++;
//     so.textContent=`${count}`;
// })
// const tanglen1=function(){
//     count++;
//     so.textContent=`${count}`; 
// }

class Counter{
    constructor() {
     this.giam=document.querySelector('.giam');
 this.so=document.querySelector('.so');
 this.tang=document.querySelector('.tang');
 this.count=0; 
 this.tang.addEventListener('click',this.tanglen.bind(this));
 this.giam.addEventListener('click',this.giamxuong.bind(this));

 } ;
  tanglen(){
this.count++;
this.so.textContent=`${this.count}`;

}
giamxuong(){
    if(this.count>0){
      this.count--;   
    }else{
        this.count=0;
    }
   
    this.so.textContent=`${this.count}`;
}
 }
 const countInstance=new Counter();




