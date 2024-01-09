// document.querySelector('.message').textContent='asdasd';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;
// document.querySelector('.guess').value=23
const reset1=function(){
    document.querySelector('body').style.backgroundColor='black'
    document.querySelector('.number').style.width='15rem'
 const secretNumber=Math.floor((Math.random()*10)+1);
console.log(secretNumber);
document.querySelector('.number').textContent=`?`;
let score=20;
let highscore=0;
document.querySelector('.score').textContent=score;

document.querySelector('.check').addEventListener('click',function(){

   const guess=+(document.querySelector('.guess').value);
    console.log(typeof guess);
    if(!guess){
        document.querySelector('.message').textContent='Ko phia3 la so';

    }else if(guess === secretNumber){
        document.querySelector('.message').textContent='Correct Number';
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('.number').style.width='30rem'
        document.querySelector('.number').textContent=secretNumber;
        if(score>highscore){
            highscore=score/2;
        document.querySelector('.highscore').textContent=highscore;
        }
    }else if(guess>secretNumber){
        if(score>1){
           document.querySelector('.message').textContent='Too high';
        score--;
        document.querySelector('.score').textContent=score;  
        }else{
            document.querySelector('.message').textContent='You lost the game!';
            document.querySelector('.score').textContent=0;  
        }
       

    }
    else if(guess<secretNumber){
        if(score>1){
           document.querySelector('.message').textContent='Too low';
        score--;
        document.querySelector('.score').textContent=score;    
        }else{
            document.querySelector('.message').textContent='You lost the game!';
            document.querySelector('.score').textContent=0;  
        }
     
    }
guess.reset();
});   

}
reset1();
document.querySelector('.again').addEventListener('click',reset1)