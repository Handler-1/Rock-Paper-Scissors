const queryElement = (query) => document.querySelector(query);

const rockEl = queryElement("#rock");
const paperEl = queryElement("#paper");
const scissorsEl = queryElement("#scissors");

const choices = [rockEl, paperEl, scissorsEl];

function computerPlay() {
    let choices = ["rock", "paper", "scissors"]; 
    return choices[Math.floor(choices.length * Math.random())];
} 

function onSelection() {
    playRound(this.value);
}

let playerPoints = document.querySelector('#playerScore');
let computerPoints = document.querySelector('#computerScore');  

function playRound(choice) {
    let playerSelection = choice;
    let computerSelection = computerPlay(); 
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        updateChoices(playerSelection, playerSign);
        updateChoices(computerSelection, computerSign);
        playerPoints.textContent = Number(playerPoints.textContent) + 1;
        scoreInfo.textContent = 'You won!';

        if (playerPoints.textContent == 5) {
            scoreInfo.textContent = 'You won the game!';
            disableButtons();
        } else if (computerPoints.textContent == 5) {
            scoreInfo.textContent = 'You lost the game!';
            disableButtons();
        }

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        updateChoices(playerSelection, playerSign);
        updateChoices(computerSelection, computerSign);
        computerPoints.textContent = Number(computerPoints.textContent) + 1;
        scoreInfo.textContent = 'You lost!';

        if (playerPoints.textContent == 5) {
            scoreInfo.textContent = 'You won the game!';
            disableButtons();
        } else if (computerPoints.textContent == 5) {
            scoreInfo.textContent = 'You lost the game!';
            disableButtons();
        }
        
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        updateChoices(playerSelection, playerSign);
        updateChoices(computerSelection, computerSign);
        scoreInfo.textContent = "It's a tie!";
    }
    
    else if (playerSelection === "paper" && computerSelection === "rock") {
        updateChoices(playerSelection, playerSign);
        updateChoices(computerSelection, computerSign);
        playerPoints.textContent = Number(playerPoints.textContent) + 1;
        scoreInfo.textContent = 'You won!';

        if (playerPoints.textContent == 5) {
            scoreInfo.textContent = 'You won the game!';
            disableButtons();
        } else if (computerPoints.textContent == 5) {
            scoreInfo.textContent = 'You lost the game!';
            disableButtons();
        }

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        updateChoices(playerSelection, playerSign);
        updateChoices(computerSelection, computerSign);
        computerPoints.textContent = Number(computerPoints.textContent) + 1;
        scoreInfo.textContent = 'You lost!';

        if (playerPoints.textContent == 5) {
            scoreInfo.textContent = 'You won the game!';
            disableButtons();
        } else if (computerPoints.textContent == 5) {
            scoreInfo.textContent = 'You lost the game!';
            disableButtons();
        }

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        updateChoices(playerSelection, playerSign);
        updateChoices(computerSelection, computerSign);
        scoreInfo.textContent = "It's a tie!";
    }
    
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        updateChoices(playerSelection, playerSign);
        updateChoices(computerSelection, computerSign);
        playerPoints.textContent = Number(playerPoints.textContent) + 1;
        scoreInfo.textContent = 'You won!';

        if (playerPoints.textContent == 5) {
            scoreInfo.textContent = 'You won the game!';
            disableButtons();
        } else if (computerPoints.textContent == 5) {
            scoreInfo.textContent = 'You lost the game!';
            disableButtons();
        }

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        updateChoices(playerSelection, playerSign);
        updateChoices(computerSelection, computerSign);
        computerPoints.textContent = Number(computerPoints.textContent) + 1;
        scoreInfo.textContent = 'You lost!';

        if (playerPoints.textContent == 5) {
            scoreInfo.textContent = 'You won the game!';
            disableButtons();
        } else if (computerPoints.textContent == 5) {
            scoreInfo.textContent = 'You lost the game!';
            disableButtons();
        }

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        updateChoices(playerSelection, playerSign);
        updateChoices(computerSelection, computerSign);
        scoreInfo.textContent = "It's a tie!";
    } else
        return("Uh oh, something went wrong");
}

const optButtons = document.getElementsByClassName('playerChoice');
function disableButtons() {
    Array.from(optButtons).forEach(button => {
        button.removeEventListener('click', onSelection);
    })
} 

/*
const optButtons = document.getElementsByClassName('playerChoice');

function disableButtons() {
    optButtons.forEach(button => {
        button.removeEventListener('click', onSelection);
    })
} 

--The above does not work because what I am getting here is not an array, but an HTMLCollection. 
It is array-like, but not an array. HTMLCollections do not have access to native methods like.map and
.forEach (these belong to array.prototype)

es6 method:
const optButtons = document.getElementsByClassName("playerChoice");

function disableButtons() {
  [...optButtons].forEach((button) => {
    button.removeEventListener("click", onSelection);
  });
}

--this is using the spread syntax (it's ...). it's basically listing out every single item
in optButtons and then fitting it into an array []
*/

choices.forEach((choice) => {
    choice.addEventListener("click", onSelection);
});

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click',() => location.reload());

const scoreInfo = document.getElementById('scoreInfo')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')

function updateChoices(selection, element) {
    switch (selection) {
      case "rock":
        element.textContent = "✊";
        break;
      case "paper":
        element.textContent = "✋";
        break;
      case "scissors":
        element.textContent = "✌";
        break;
    }
  }

  /* 
  element?.textContent = "✊"; 
  --This is to ensure that the code won't break when calling with something that isn't an html element.
  the ? in this case is called optional chaining. So if the argument passed does have
  .textContent, it will set it to whatever. If it doesn't, it won't bother (it won't raise any errors) 
  */

