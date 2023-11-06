const post={
    id:1,
    title:'Post One',
    body:'This is the body',
};
// JSON.parse() dùng để chuyển chuỗi JSON thành đối tượng JavaScript.
// JSON.stringify() dùng để chuyển đối tượng JavaScript thành chuỗi JSON.
// covert to Json string
const str=JSON.stringify(post);
// Parse Json
const obj=JSON.parse(str);
console.log(obj);
// bt oject 
const library=[
    {
        title:'Duy dep trai vl',
        author:'Duy',
        status:{
            own:true,
            reading:true,
            read:false
        }
    },
    {
        title:'Duy Thong minh vl',
        author:'Ngoc Duy',
        status:{
            own:true,
            reading:true,
            read:false
        }
    },
    {
        title:'Duy hay vl',
        author:'Pham Duy',
        status:{
            own:true,
            reading:true,
            read:false
        }
    }
]
// chuyển read thành true
library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;
console.log(library);
// đổi tên title thành firstbook
const {title:firstBook}=library[0];
console.log(firstBook);

// chuyển library thành json string
const arr=JSON.stringify(library);
console.log(arr);