// var person={
//     "Ten":"Duy",
//     "Hoten":"Pham",
//     "DiaChi":{
//         "Thanh Pho":"HCM",
//         "Duong":"Trung My Tay",
//     }
// }
// person.sothich=['Nho',"Em Ấy"];

// person.hello=function(){
//     console.log(`Hello bạn ${this.Ten}`);
// }
// person.hello();
// // console.log(person.hello());
// for (let key in person){
   
//     const values=person[key];
//     if(values==="Duy"){
//         console.log(`Mình đúng là Duy`);
//         break;
//     }else{
//         console.log("Bạn khong phải là duy");
//         break;
//     }
//     // console.log(values);
        
// }
// // const ten=person.Ten;
// const {Ten,Hoten,DiaChi,...conlai}=person;
// console.log(DiaChi.Duong);
window.onload=function(){
    if(sessionStorage['person']!=null){
        var data=JSON.parse(sessionStorage['person']);
        var message="Welcome"+data.first;
    document.getElementById('output1').innerHTML=message;
    }
}
var myForm=document.getElementById("myForm");
console.log(myForm);
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
   var data=formData(myForm);
    if(data){
        sessionStorage['person']=JSON.stringify(data);
    }
    console.log(data);
})
// xử lí trả về
function formData(form){
    var element=form.querySelectorAll('input[type="text"]');
    console.log(element);
    var myData={};
    for(var x=0;x<element.length;x++){
        var name=element[x].name;
        var value=element[x].value;
       
        myData[name]=value;
       
    }
return myData;
}
