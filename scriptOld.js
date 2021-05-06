//Declare variables
let computerScore =0;
let humanScore =0;
const myArray = ['rock', 'paper', 'scissors'];
let n = prompt("How many rounds would you like to play?");

//Computer randomly chooses rock, paper or scissors using random number generator
function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

//Human chooses rock, paper or scissors by entering into a text box
function humanPlay() {
    let humanSelection = prompt("Choose rock, paper or scissors");
        console.log("The human has picked: " + humanSelection);
        return humanSelection.toLowerCase();
    }   

//This function computes the winner and stores the result
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win this round! " + playerSelection + " beats " + computerSelection)
        return("You win!")
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win this round! " + playerSelection + " beats " + computerSelection)
        return("You win")

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win this round! " + playerSelection + " beats " + computerSelection)
        return("You win")

    } else if (playerSelection === computerSelection) {
        console.log("You both pick " + playerSelection + " so the game is a tie!")
        return("The game is a tie!")
        
    } else {
        console.log("You lose this round! " + computerSelection + " beats " + playerSelection)
        return("You lose")
    }
}

//This function runs the game
function game() {
    const playerSelection = humanPlay();
    const computerSelection = computerPlay();
    
    result = playRound(playerSelection, computerSelection)
    computeScore(result);
}

//This function computes the score
function computeScore(string1){
    if (string1.includes("win")){
        humanScore++;
    } else if (string1.includes("lose")) {
        computerScore++;
    }
    console.log("Human score is: " + humanScore);
    console.log("Computer score is: " + computerScore);
}

//This function decides the winner
function decideWinner(humanScore, computerScore){
    if (humanScore > computerScore){
        console.log("After " + n + " rounds, YOU WIN!")
    } else if (humanScore == computerScore){
        console.log("After " + n + " rounds , ITS A TIE GAME!")
    } else {
        console.log("After " + n + " rounds, YOU LOSE!")
    }
}

//This section of the code runs the game 5 times and decides the overall winner
function playGame(rounds){
    let i;
    for (i=0; i<n; i++){
        game();
        if (i==n - 1){
            decideWinner(humanScore, computerScore);
            humanScore =0;
            computerScore=0;
        }
    }
}

playGame(n);






   
