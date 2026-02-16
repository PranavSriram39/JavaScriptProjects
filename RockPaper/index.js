const choices = ['rock', 'paper', 'scissors'];

const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? "You win!" : "Computer wins!";
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? "You win!" : "Computer wins!";
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? "You win!" : "Computer wins!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    if (result === "You win!") {
        resultDisplay.style.color = "green";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "Computer wins!") {
        resultDisplay.style.color = "red";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else {
        resultDisplay.style.color = "goldenrod";
    }
}
