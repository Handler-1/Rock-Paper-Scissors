const queryElement = (query) => document.querySelector(query);

const rockEl = queryElement("#rock");
const paperEl = queryElement("#paper");
const scissorsEl = queryElement("#scissors");

const choices = [rockEl, paperEl, scissorsEl];

function onSelection() {
  console.log(this.value);
}

choices.forEach((choice) => {
  choice.addEventListener("click", onSelection);
});

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(choices.length * Math.random())];
} 

function playRound(playerSelection) {
    let computerSelection = computerPlay;
    
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return("You Win!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return("You Lose!");
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return("It's A Tie!");
    }
    
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return("You Win!");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return("You Lose!");
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return("It's A Tie!");
    }
    
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return("You Win!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return("You Lose!");
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return("It's A Tie!");
    } else
        return("Uh oh, something went wrong");
}

document.getElementById('rock').onclick = playerSelection;
document.getElementById('paper').onclick = playerSelection;
document.getElementById('scissors').onclick = playerSelection;

// console.log(playRound(playerSelection)); //

function game() {
    let (i=0, i < 5, i++)
}