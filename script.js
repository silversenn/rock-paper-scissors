let uScore = 0;
let cScore = 0;

const userScore = document.querySelector(".user-score .score-display")
const compScore = document.querySelector(".comp-score .score-display")
const infoText = document.getElementById("info");
let userChoiceImg = document.getElementById("user-choice");
let compChoiceImg = document.getElementById("comp-choice");


function playerChoice(choice){
  userChoiceImg.setAttribute('src', `assets/rock.png`);
  compChoiceImg.setAttribute('src', `assets/rock.png`);
  const choicesButton = document.querySelectorAll(".choice");

  userChoiceImg.classList.add("user-play-anim");
  compChoiceImg.classList.add("cpu-play-anim");

  choicesButton.forEach(e => e.classList.add("disabled"));

  setTimeout(()=> {
    gamePlay(choice);
    choicesButton.forEach(e => e.classList.remove("disabled"));
    userChoiceImg.classList.remove("user-play-anim");
    compChoiceImg.classList.remove("cpu-play-anim");
  }, 1000)
}

function gamePlay(choice){
  const computerChoice = computerChoices();
  console.log("user choice: " + choice)
  console.log("computer choice: " + computerChoice)

  if(choice === 'rock'){
    switch(computerChoice){
      case 'rock' : 
              infoResult('draw'); 
            break;
      case 'paper' : 
              cScore++; 
              infoResult('lose'); 
            break;
      case 'scissor' : 
              uScore++; 
              infoResult('win'); 
            break;
    }
  }else if(choice === 'paper'){
    switch(computerChoice){
      case 'rock' : 
              uScore++; 
              infoResult('win'); 
            break;
      case 'paper' : 
              infoResult('draw');  
            break;
      case 'scissor' :
              cScore++; 
              infoResult('lose'); 
            break;
    }
  }else{
    switch(computerChoice){
      case 'rock' : 
              cScore++; 
              infoResult('lose');  
            break;
      case 'paper' : 
              uScore++; 
              infoResult('win');  
            break;
      case 'scissor' : 
              infoResult('draw');  
            break;
    }    
  }

  userChoiceHand(choice);
  compChoiceHand(computerChoice);

  userScore.innerText = uScore;
  compScore.innerText = cScore;

}

function infoResult(info){
  infoText.innerText = info;
}

function computerChoices(){
  let compChoices = ['rock', 'paper', 'scissor'];
  return compChoices[Math.floor(Math.random() * compChoices.length)];
}

function userChoiceHand(choice){
  userChoiceImg.setAttribute('src', `assets/${choice}.png`);
}

function compChoiceHand(choice){
  compChoiceImg.setAttribute('src', `assets/${choice}.png`);
}