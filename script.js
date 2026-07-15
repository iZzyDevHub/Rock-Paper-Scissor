let userChoice = "";
let computerChoice = "";
let result = "";
let playerScore = 0;
let computerScore = 0;
let num = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
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

}

playGame();

console.log(num);
console.log(computerChoice);