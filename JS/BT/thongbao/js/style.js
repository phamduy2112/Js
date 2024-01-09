// viết 1 function tạo ra thông báo
function createNotification(title){
    const template=` <div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
        dolor sit amet consec
      </p>
    </div>
  </div>`;
//   insertAdj...HTML;
document.body.insertAdjacentHTML('afterbegin',template)
}
// title cuối cùng n1o sẽ k bị trùng 
let lastTitle;
// createNotification();
const timer=setInterval(function(){
    const item=document.querySelector('.noti');
    // kiểm tra xem item có chưa có rồi thì nó sẽ xoá hết
    if(item) item.parentNode.removeChild(item);
    
    const title= randomData[Math.floor(Math.random() * randomData.length)];
    // kết quả sẽ k trùng
  
    if(lastTitle !== title){
         createNotification(title);
    } 
     lastTitle=title;
},3000)


const randomData=['Welecome Duy',"My name is Duy","I am fontend developer"];