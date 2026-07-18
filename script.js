let userChoice = "";
let computerChoice = "";
let result = "";
let playerScore = 0;
let computerScore = 0;
let num = 0;


const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resultDiv = document.getElementById("result");
const pScoreDisplay = document.getElementById("player-score");
const cScoreDisplay = document.getElementById("computer-score");

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
    } else if (
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
    
    pScoreDisplay.textContent = playerScore;
    cScoreDisplay.textContent = computerScore;
}