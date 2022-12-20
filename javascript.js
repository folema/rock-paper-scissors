
const img=document.querySelectorAll("img")
const textDiv=document.querySelector(".textDiv")
const roundCounter=document.querySelector(".roundCounter")
const startRound=((e)=>{
  
  text=e.target.id
  let computerChoice=""
  if(round<5){
  getRandomNumber(2)
  function getRandomNumber(max){
    let randomNumber=Math.floor(Math.random() * max)
    if (randomNumber== 0){ computerChoice="rock";}
    else if (randomNumber== 1){ computerChoice="paper";}
    else { computerChoice="scissors";}
    return;
  }
 
    if (text=="rock"&& computerChoice=="scissors" || text=="paper" && computerChoice=="rock" || text=="scissors" && computerChoice=="paper"){
    return round++, userScore++, textDiv.textContent=(`Computer chose ${computerChoice}. User wins. User score ${userScore}, computerscore ${computerScore}`),
    roundCounter.textContent=`Round ${round}`;
  } 
    else if(text=="scissors" && computerChoice=="rock" || text=="rock" && computerChoice=="paper" || text=="paper" && computerChoice=="scissors"){
    return round++, computerScore++, textDiv.textContent=(`Computer chose ${computerChoice}. Computer wins. User score ${userScore}, computerscore ${computerScore}`),
    roundCounter.textContent=`Round ${round}`;
  }
    else{
    return round++, textDiv.textContent=(`Computer chose ${computerChoice}. Draw. User score ${userScore}, computerscore ${computerScore}`),
    roundCounter.textContent=`Round ${round}`;
  }}

 else return textDiv.textContent=`Game over. Userscore ${userScore}, computerscore ${computerScore} `,roundCounter.textContent=`Round ${round}`
})
 let computerScore=0
 let userScore=0
 let text=""
 let round= 1
 img.forEach(img=>img.addEventListener(`click`, startRound))
 roundCounter.textContent=`Round ${round}`