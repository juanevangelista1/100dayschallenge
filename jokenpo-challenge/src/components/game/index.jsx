import React, { useState, useEffect, useCallback } from 'react';
import { ComputerChoice, GameControlOptions } from '../gameControlOptions';

export function Game({ playerChoice, onScoreUpdate, onPlayAgain }) {
	const [machineChoice, setMachineChoice] = useState('');
	const [winner, setWinner] = useState(null);
	const [resultMessage, setResultMessage] = useState('...');
	const [isProcessing, setIsProcessing] = useState(true);

	const processGameResult = useCallback(() => {
		const machine = ComputerChoice();
		setMachineChoice(machine);

	
		const result = GameControlOptions(playerChoice, machine);

		setWinner(result.winner);
		setResultMessage(result.message);
		onScoreUpdate(result.scoreChange); 
		setIsProcessing(false);
	}, [playerChoice, onScoreUpdate]);

	useEffect(() => {

		const timer = setTimeout(() => {
			processGameResult();
		}, 1500); 

		return () => clearTimeout(timer); 
	}, [processGameResult]);

	const translateChoice = (choice) => {
		const choicesMap = { rock: 'Rock', paper: 'Paper', scissors: 'Scissors' };
		return choicesMap[choice] || 'Waiting...';
	};

	return (

	);
}
