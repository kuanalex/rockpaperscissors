function computerPlay(){
 let computerSelection = Math.floor(Math.random() * 3);
 let computerResult;

 if (computerSelection === 0){ computerResult = 'rock'}
 else if (computerSelection === 1) {computerResult = 'paper'}
 else {computerResult = 'scissors'}
 console.log("The computer has picked: " + computerResult);

 return computerResult;
}

function humanPlay(){
    let humanSelection = prompt("Choose rock, paper or scissors");
    console.log("The human has picked: " + humanSelection);
    return humanSelection.toLowerCase();
}

computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("Human has won")
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("Human has won")
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log("Human has won")
  } else if (playerSelection === computerSelection) {
      console.log("The game is a tie!")
  } else console.log("Computer has won");
}
  const playerSelection = humanPlay();
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection)