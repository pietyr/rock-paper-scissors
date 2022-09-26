const SHAPES = ["rock", "paper", "scissors"];

function getComputerChoice() {
	const randomIndex = Math.floor(Math.random() * 3);
	return SHAPES[randomIndex];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

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
