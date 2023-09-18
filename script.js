"use strict";

// Rock, Paper, Scissors choices
const rpsChoice = ["rock", "paper", "scissors"];

// Prompt player to choose
const getPlayerChoice = function () {
    return prompt("Choose between: Rock, Paper, or Scissors").trim().toLowerCase();
};

// Get random computer choice
const getComputerChoice = function () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

// Get one round result
const playRound = function (playerSelection, computerSelection) {
    // Calculate difference of index from choices array
    const indexDifference = rpsChoice.indexOf(playerSelection) - rpsChoice.indexOf(computerSelection);

    // Determine round result
    if (indexDifference === 0) {
        return "tie";
    } else if (indexDifference === 1 || indexDifference === -2) {
        return "win";
    } else {
        return "loss";
    }
};

// Define player and computer scores
let playerScore;
let computerScore;

// Play game of n rounds
const game = function (n) {
    // Initialize scores
    playerScore = 0;
    computerScore = 0;

    // Calculate minimum rounds to win game
    const minRoundsToWin = Math.ceil(n / 2);

    // Initialize roundResult
    let roundResult;

    for (let i = 0; i < n; i++) {
        // Store player and computer choices
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        console.log(`-----------------ROUND ${i + 1}-----------------`);
        console.log("🚀 -> playerChoice:", playerChoice);
        console.log("🚀 -> computerChoice:", computerChoice);

        // Increment round winner's score
        roundResult = playRound(playerChoice, computerChoice);
        if (roundResult === "win") {
            playerScore++;

            console.log(`You won round ${i + 1} => ${playerChoice} beats ${computerChoice}`);
            console.log("🚀 -> playerScore:", playerScore);
            console.log("🚀 -> computerScore:", computerScore);
        } else if (roundResult === "loss") {
            computerScore++;

            console.log(`You lost round ${i + 1} => ${computerChoice} beats ${playerChoice}`);
            console.log("🚀 -> playerScore:", playerScore);
            console.log("🚀 -> computerScore:", computerScore);
        } else {
            console.log("Tie!");
            console.log("🚀 -> playerScore:", playerScore);
            console.log("🚀 -> computerScore:", computerScore);
        }

        // End game if final result determined before total number of rounds reached
        if (Math.abs(playerScore - computerScore) === minRoundsToWin) return;
    }
};

// Prompt player for number of rounds
const rounds = Number(prompt("Enter number of rounds: "));
// Play game
game(rounds);

// Log final result
console.log("-----------------FINAL RESULTS-----------------");
if (playerScore > computerScore) {
    alert("YOU WON THE GAME :D");
} else if (playerScore < computerScore) {
    alert("YOU LOST :(");
} else {
    alert("TIE!!!!!");
}
