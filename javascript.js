
let computerScore=0
let userScore=0

function startRound(){
let input=""
let computerChoice=""
getInput(input)
getRandomNumber(2)

function getInput(userInput) {
 return userInput=prompt("Rock, paper scissors"), console.log(userInput), stringToLowerCase(userInput);
}

function stringToLowerCase(userInput){
  input= userInput.toLowerCase(), console.log(input)
  return input;
}

function getRandomNumber(max){
  let randomNumber=Math.floor(Math.random() * max)
  if (randomNumber== 0){ computerChoice="rock";}
  else if (randomNumber== 1){ computerChoice="paper";}
  else { computerChoice="scissors";}
  return;
 }
 
  if (input=="rock"&& computerChoice=="scissors" || input=="paper" && computerChoice=="rock" || input=="scissors" && computerChoice=="paper"){
    return userScore++, console.log(`Computer chose ${computerChoice}. User wins. User score ${userScore}, computerscore ${computerScore}`);
  } 
  else if(input=="scissors" && computerChoice=="rock" || input=="rock" && computerChoice=="paper" || input=="paper" && computerChoice=="scissors"){
    return computerScore++, console.log(`Computer chose ${computerChoice}. Computer wins. User score ${userScore}, computerscore ${computerScore}`);
  }
  else{
    return console.log(`Computer chose ${computerChoice}. Draw. User score ${userScore}, computerscore ${computerScore}`);
  }          
 }


function game(){
  for (let i=0; i<5; i++){
    startRound()
  }
  return console.log(`Game over. Userscore ${userScore}, Computerscore ${computerScore}`);
}
game()