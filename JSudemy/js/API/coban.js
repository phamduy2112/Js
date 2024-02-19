// code đồng bộ: chạy từ trên xuống trình tự
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// làm như ajax
// const getCountryData=function(country){
//   const request= new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// request.send();
// // console.log(request.responseText);
// request.addEventListener('load',function(){
//     // console.log(this.responseText);
//     const [data]=JSON.parse(this.responseText);
//     console.log(data);
//    const html=`  <article class="country">
//    <img class="country__img" src="${data.flags.png}" />
//    <div class="country__data">
//      <h3 class="country__name">${data.name.common}</h3>
//      <h4 class="country__region">${data.region}</h4>
//      <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)}</p>
//      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
//      <p class="country__row"><span>💰</span>${data.region}</p>
//    </div>
//  </article>`;
//  countriesContainer.insertAdjacentHTML('beforeend',html);
//  countriesContainer.computedStyleMap.opacity=1;
// })

// }


const renderCountry=function (data,className=''){
  const html=`  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
    <p class="country__row"><span>💰</span>${data.region}</p>
  </div>
</article>`;
countriesContainer.insertAdjacentHTML('beforeend',html);
countriesContainer.computedStyleMap.opacity=1;
}

// const getCountryData=function(country){
//   const request= new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// request.send();
// // console.log(request.responseText);
// // Ajax
// request.addEventListener('load',function(){
//     // console.log(this.responseText);
//     const [data]=JSON.parse(this.responseText);
//     console.log(data);
//     // renderCountry
//   renderCountry(data);
//   // Get neighbour country
//   const [neighbour]=data.borders;
//   if(!neighbour) return ;
//   // Ajax two
//   const request2= new XMLHttpRequest();
//   request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//   request2.send();
//   request2.addEventListener('load',function(){
//   const [data2]=JSON.parse(this.responseText);
//     console.log(data2);
//     renderCountry(data2,'neighbour');
// })

// })
// }
// getCountryData('Portugal')

//   const request= new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// request.send();
const request=fetch('https://restcountries.com/v3.1/name/Portugal')
console.log(request);
const getCountryData=function(country){
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(function(response){
    console.log(response);
    return response.json();

  }).then(function(data){
    console.log(data);
    renderCountry(data[0])
    const neighbour=data[0].borders[0];
        if(!neighbour) return;
        // country two
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
  }).then(response=>{
       return response.json();
      }).then(data=>
        
        renderCountry(data[0],'neighbour'))
        .catch(err=>alert(err))
}
// const getCountryData=function(country){
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then((response)=>{ response.json()})
//   .then((data)=>{

//     // renderCountry(data);
//     const neighbour=data[0].borders[0];
//     if(!neighbour) return;
//     // country two
//   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)

//   }).then(response=>{
//     response.json();
//   }).then(data=>renderCountry(data[0],'neighbour'));
// }
btn.addEventListener('click',function(){
  getCountryData('Portugal')
})