let userChoice = "";
let computerChoice = "";
let result = "";
let playerScore = 0;
let computerScore = 0;

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

function playGame(playerPick) {

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1 ) {
        computerChoice = "rock";
    } else if (randomNumber === 2 ) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }

    if (computerChoice === userChoice) {
        result = "It's a DRAW!";
    } else if ((userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        result = "You WIN!";
        playerScore++;

    }

    pScoreDisplay.innerText = playerScore;
    cScoreDisplay.innerText = computerScore;

    resultDiv.innerHTML = `
        <p style="text-transform: uppercase; letter-spacing: 2px; color: #00d4ff;">
            YOU: ${userChoice} vs CPU: ${computerChoice}
        </p>
        <h2 style="font-size: 3rem; text-shadow: 0 0 10px #fff;">${result}</h2>
    `;

}

