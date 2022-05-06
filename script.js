const queryElement = (query) => document.querySelector(query);

const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const rockEl = queryElement("#rock");
const paperEl = queryElement("#paper");
const scissorsEl = queryElement("#scissors");

const choices = [rockEl, paperEl, scissorsEl];

function onSelection() {
    console.log(this.value);
  }

let compScore = 0;
let playerScore = 0;

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(choices.length * Math.random())];
} 

function playRound() {
    let playerSelection = onSelection();
    let computerSelection = computerPlay();
    
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerPoints.textContent = ++playerPoints
        return("You Win!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerPoints.textContent = ++computerPoints
        return("You Lose!");
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return("It's A Tie!");
    }
    
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerPoints.textContent = ++playerPoints
        return("You Win!");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerPoints.textContent = ++computerPoints
        return("You Lose!");
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return("It's A Tie!");
    }
    
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerPoints.textContent = ++playerPoints
        return("You Win!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerPoints.textContent = ++computerPoints
        return("You Lose!");
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return("It's A Tie!");
    } else
        return("Uh oh, something went wrong");
}


function game() {
    playRound(playerSelection, computerSelection);
    if (playerPoints < 5 && computerPoints < 5) {
        game()
    } else {
        gameEnd();
    }
}

function gameEnd() {
    if (playerPoints > computerPoints) {
        console.log("Game Over! You Win!");
    } else if (computerPoints > playerPoints) {
        console.log("Game Over! You Lose!")
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", onSelection);
  });

