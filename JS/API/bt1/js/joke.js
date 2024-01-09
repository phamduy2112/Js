const jokeHeading=document.querySelector(".joke-heading")
const jokeButton=document.querySelector(".joke-button");
const endpoint="https://icanhazdadjoke.com/"
const jokeWrapper=document.querySelector(".joke")
async function getJoke(){
    const reposive=await fetch(endpoint,
        {
            // tại sao lại truyền headers {}
            // vì mình cần nó là biến json chứ k phải là html
            // thế nên khi muốn biết vào fetch/html và thấy html thì mình nên gọi ra
            // tuỳ apit 
            headers: {
                // kiểu dữ liệu trả về
        Accept:"application/json",
    },});
    const data=await reposive.json();
    // console.log(data);
    return data
}
// 
async function handleClick(){
    jokeWrapper.classList.add("is-loading")
   const data= await getJoke();
    jokeHeading.textContent=data.joke
    jokeWrapper.classList.remove("is-loading")

}

jokeButton.addEventListener('click',handleClick);