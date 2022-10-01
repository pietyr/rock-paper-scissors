const SHAPES = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let gameEnded = false;
const resultsDiv = document.querySelector("div.results");
const scoreDiv = document.querySelector("div.score");

function getComputerChoice() {
	const randomIndex = Math.floor(Math.random() * 3);
	return SHAPES[randomIndex];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == SHAPES[0]) {
		if (computerSelection == SHAPES[0]) {
			return `Tie!`;
		} else if (computerSelection == SHAPES[1]) {
			return `You Lose! ${computerSelection} beats ${playerSelection}`;
		} else {
			return `You Win! ${playerSelection} beats ${computerSelection}`;
		}
	} else if (playerSelection == SHAPES[1]) {
		if (computerSelection == SHAPES[0]) {
			return `You Win! ${playerSelection} beats ${computerSelection}`;
		} else if (computerSelection == SHAPES[1]) {
			return `Tie!`;
		} else {
			return `You Lose! ${computerSelection} beats ${playerSelection}`;
		}
	} else {
		if (computerSelection == SHAPES[0]) {
			return `You Lose! ${computerSelection} beats ${playerSelection}`;
		} else if (computerSelection == SHAPES[1]) {
			return `You Win! ${playerSelection} beats ${computerSelection}`;
		} else {
			return `Tie!`;
		}
	}
}

function updateScore(result) {
	if (result.includes("Win")) {
		playerScore++;
	} else if (result.includes("Lose")) {
		computerScore++;
	}
	scoreDiv.textContent = `Your score: ${playerScore}, Computer score: ${computerScore}`;

	if (playerScore == 5) {
		gameEnded = true;
		resultsDiv.textContent = `You won the game!`;
	}
	if (computerScore == 5) {
		gameEnded = true;
		resultsDiv.textContent = `Computer won the game!`;
	}
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (!gameEnded) {
			const result = playRound(button.className, getComputerChoice());
			resultsDiv.textContent = result;
			updateScore(result);
		}
	});
});

document.querySelector("button.new-game").addEventListener("click", () => {
	gameEnded = false;
	playerScore = 0;
	computerScore = 0;
	resultsDiv.textContent = `Click one of the buttons to start a game`;
	scoreDiv.textContent = `Your score: ${playerScore}, Computer score: ${computerScore}`;
});
