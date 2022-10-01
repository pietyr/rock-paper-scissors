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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		alert(`clicked ${e.target.className}`);
	});
});

function game(numberOfRounds = 1) {
	let playerScore = 0;
	let computerScore = 0;
	// for (let i = 0; i < numberOfRounds; i++) {
	// 	let playerSelection = "";
	// 	do {
	// 		playerSelection = prompt(
	// 			"Choose your shape. Type 'rock', 'paper' or 'scissors'"
	// 		);
	// 	} while (!SHAPES.includes(playerSelection));

	// 	const result = playRound(playerSelection, getComputerChoice());
	// 	console.log(result);

	// 	if (result.includes("Win")) {
	// 		playerScore++;
	// 	} else if (result.includes("Lose")) {
	// 		computerScore++;
	// 	}
	// }
	if (playerScore > computerScore) {
		console.log(
			`You won the game! Your score: ${playerScore}, computer score: ${computerScore}`
		);
	} else if (computerScore > playerScore) {
		console.log(
			`Computer won the game! Your score: ${playerScore}, computer score: ${computerScore}`
		);
	} else {
		console.log(
			`Tie! Your score: ${playerScore}, computer score: ${computerScore}`
		);
	}
}

game();
