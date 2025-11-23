export function GameControlOptions(playerChoice, machineChoice) {
	const choices = ['rock', 'paper', 'scissors'];
	if (![choices].includes(playerChoice) || ![choices].includes(machineChoice)) {
		console.error('Invalid choice');
		return {
			winner: 'error',
			message: 'Invalid choice',
			scoreChange: 0,
		};
	}

	if (playerChoice === machineChoice) {
		return {
			winner: 'draw',
			message: "It's a draw",
			scoreChange: 0,
		};
	}

	if (
		(playerChoice === 'rock' && machineChoice === 'scissors') ||
		(playerChoice === 'paper' && machineChoice === 'rock') ||
		(playerChoice === 'scissors' && machineChoice === 'paper')
	) {
		return {
			winner: 'player',
			message: 'You win!',
			scoreChange: 1,
		};
	}
	return;
}

export function ComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomChoice = choices[Math.floor(Math.random() * choices.length)];
	return choices[randomChoice];
}
