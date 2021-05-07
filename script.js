//Declare variables
let computerScore = 0;
let humanScore = 0;
let playChoice = '';
document.getElementById("para").innerHTML = "Rock, Paper, or Scissors!";
document.getElementById("humanScoreBanner").innerHTML = "Human Score";
document.getElementById("humanScorePoints").innerHTML = "0";
document.getElementById("robotScoreBanner").innerHTML = "Robot Score";
document.getElementById("robotScorePoints").innerHTML = "0";

const rocks = document.getElementById("rock");
const papers = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rocks.addEventListener('click', () => pick('rock'));
papers.addEventListener('click', () => pick('paper'));
scissors.addEventListener('click', () => pick('scissors'));

const myArray = ['rock', 'paper', 'scissors'];


// let n = prompt("How many rounds would you like to play?");

// Run humanPlay() by clicking the rock, paper, or scissors buttons
function pick(choice) {
    switch (choice) {
        case 'rock': {
            humanPlay(choice);
            break;
        }
        case 'paper': {
            humanPlay(choice);
            break;
        }
        case 'scissors': {
            humanPlay(choice);
            break;
        }
        default: {
            break;
        }
    }

    document.getElementById("para").innerHTML = "You picked " + choice + "!";
}

//Computer randomly chooses rock, paper or scissors using random number generator
function computerPlay() {
    return myArray[~~(Math.random() * myArray.length)];
}

//Human chooses rock, paper or scissors selecting one of the 3 buttons on the screen
function humanPlay(choice) {
    const playerSelection = choice;
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    computeScore(result);
}

//This function computes the winner and stores the result
//Store values into array and loop through it
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
        return ("win")

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
        return ("win")

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You win!"
        return ("win")

    } else if (playerSelection === computerSelection) {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! Tie game!"
        return ("tie")

    } else {
        document.getElementById("roundConclusion").innerHTML = "Computer picked " + computerSelection + "! You lose!"
        return ("lose")
    }
}

//This function computes the score
function computeScore(string1) {
    if (string1.includes("win")) {
        humanScore++;
    } else if (string1.includes("lose")) {
        computerScore++;
    }
    document.getElementById("humanScorePoints").innerHTML = humanScore;
    document.getElementById("robotScorePoints").innerHTML = computerScore;

    if (humanScore === 5){
        document.getElementById("roundConclusion").innerHTML = "The winner by unanimous decision is the Human!";
    } else if (computerScore === 5) {
        document.getElementById("roundConclusion").innerHTML = "The winner by unanimous decision is the AI!";
    }
}

//This function decides the winner
function decideWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("After " + n + " rounds, YOU WIN!")
    } else if (humanScore == computerScore) {
        console.log("After " + n + " rounds , ITS A TIE GAME!")
    } else {
        console.log("After " + n + " rounds, YOU LOSE!")
    }
}

// This section of the code runs the game 'n' times and decides the overall winner
// function playGame(rounds) {
//     let i;
//     for (i = 0; i < n; i++) {
//         pick();
//         if (i == n - 1) {
//             decideWinner(humanScore, computerScore);
//             humanScore = 0;
//             computerScore = 0;
//         }
//     }
// }

// playGame();