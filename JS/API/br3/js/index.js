// function addPost(title,author){
//     fetch('http://localhost:3000/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title,
//     author,
   
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }
// hoặc
// async function addPost(title,author){
//     const response= await fetch('http://localhost:3000/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title,
//     author,
   
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   return response;
// }
// const course={
//     image:"",
//     title:"",
//     author:"",
//     rating:"",
//     price:"",
//     bestSeller:false,
//     buyAmount:"",

// }


const endpoint = "http://localhost:3000/posts";

//  async function addPost(image,title,author,rating,price,bestSeller,buyAmount){
//   await  fetch(endpoint,{
//         method:"POST",
//         body:JSON.stringify({
//             image,
//             title,
//             author,
//             rating,
//             price,
//             bestSeller,
//             buyAmount,  
//         }),
//           headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//     })
// }
// const formPost=document.querySelector('.form-post');
// formPost.addEventListener('submit',function(e){
//     e.preventDefault();
//     const image=this.elements['image'].value;
//     const title=this.elements['title'].value;
//     const author=this.elements['author'].value;
//     const rating=this.elements['rating'].value;
//     const price=this.elements['price'].value;
//     const bestSeller=this.elements['bestSeller'].checked;
//     const buyAmount=this.elements['buyAmount'].value;
   
   
   
//     addPost(image,title,author,rating,price,bestSeller,buyAmount);
// })
// Course:image,title,author,rating,price

// truyền k đúng link

console.log(endpoint);
// const endpoint = "http://localhost:3000/courses";

 async function addPost({image,title,author,rating,price,bestSeller,buyAmount}){
  await  fetch(endpoint,{
        method:"POST",
        body:JSON.stringify({
            image,
            title,
            author,
            rating,
            price,
            bestSeller,
            buyAmount,  
        }),
          headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    })
}const formPost=document.querySelector('.form-post');
const courseList=document.querySelector(".course-list");
async function getCoures(){
   const respone= await  fetch(endpoint);
    const data=await respone.json();
if(data.length>0 && Array.isArray(data)){
    data.foreach(item=>renderItem(item));
}
console.log(data);
}


formPost.addEventListener('submit',async function(e){
    e.preventDefault();
    const course={
        image:this.elements['image'].value,
        title:this.elements['title'].value,
        author:this.elements['author'].value,
        rating:+this.elements['rating'].value,
        price:+this.elements['price'].value,
        bestSeller:this.elements['bestSeller'].checked,
        buyAmount:+this.elements['buyAmount'].value,
    
    }; 
    await addPost(course);
    this.reset();
    

 
   
   
  
})

function renderItem(item){
    const template=`  <div class="course-item">
    <div class="course-image">
                 <img src=${item.image} alt="">

    </div>
<div class="course-content">
 <h3 class="course-title">
     ${item.title}
 </h3>
 <div class="course-author">${item.author}</div>
 <div class="course-meta">
     <div class="course-rating">${item.rating}</div>
 <div class="course-erroll">${item.buyAmount}</div>  
 </div>
 ${item.bestSeller?
    
    '<div class="course-best-seller">Best seller</div>':
    
    ""}

</div>
 </div>`;
 courseList.insertAdjacentHTML("beforeend",template)
 console.log(template);
}