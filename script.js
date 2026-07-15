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
for (computerChoice || ; i<10; i++){

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

}     


}

playGame();

console.log(num);
console.log(computerChoice);