let userChoice = "";
let computerChoice = "";
let result = "";
let playerScore = 0;
let computerScore = 0;
let num = 0;
let playerChoiceSpan = "";
let computerChoiceSpan = "";

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const resultDiv = document.getElementById("result");
const pScoreDisplay = document.getElementById("player-score");
const cScoreDisplay = document.getElementById("computer-score");
const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");

rockBtn.addEventListener("click", function () {
    playGame("rock");
});

paperBtn.addEventListener("click", function () {
    playGame("paper");
});

scissorBtn.addEventListener("click", function () {
    playGame("scissor");
});

function playGame(choice) {

    num = Math.floor(Math.random() * 3);
    if (num === 0) {
        computerChoice = "rock";
    } else if (num === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }

    if (choice === computerChoice) {
        result = "It's a tie!";
    }else if (
        (choice === "rock" && computerChoice === "scissor") ||
        (choice === "paper" && computerChoice === "rock") ||
        (choice === "scissor" && computerChoice === "paper")
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    playerChoiceSpan.textContent = choice;
    computerChoiceSpan.textContent = computerChoice;
    resultDiv.textContent = result;
}

