const endpoint="https://picsum.photos/v2/list?limit=8";
const imageList=document.querySelector('.images');
// ?page=2&limit100
let page=1;
let images=[];
const loading=document.querySelector('.image-loader');

const loadmore=document.querySelector(".load-more");
loadmore.style.display="none";
function imageTemplate(url){
    const template=`<div class="image-item">
    <img src="${url}" alt="">
    </div> `;
    imageList.insertAdjacentHTML("beforeend",template)
}
async function fetchImages(page=1){
    loading.style.display="block";
    const response=await fetch(`${endpoint}&page=${page}`);
     images= await response.json();
   
    if(images.length>0 && Array.isArray(images)){
        loading.style.display="none";
        loadmore.style.display="block";
        images.forEach(item=>{
            imageTemplate(item.download_url);
        
        })

    }
}
fetchImages();
{/* <div class="image-item">
<img src="https://picsum.photos/seed/picsum/200/300" alt="">
</div> */}
async function handleLoadMore(){
  page++;
  await fetchImages(page);
}
loadmore.addEventListener("click",handleLoadMore);