"use strict";

const playerScoreElement = document.querySelector(".score--player");
const computerScoreElement = document.querySelector(".score--computer");

const choicesBtnsElement = document.querySelector(".btns");

// Rock, Paper, Scissors choices
const rpsChoice = ["rock", "paper", "scissors"];

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

let playing = true;
let playerScore = 0;
let computerScore = 0;

// Get one round result
const playRound = function (playerSelection, computerSelection) {
    // Calculate difference of index from choices array
    const indexDifference = rpsChoice.indexOf(playerSelection) - rpsChoice.indexOf(computerSelection);

    // Determine round result
    if (indexDifference !== 0) {
        if (indexDifference === 1 || indexDifference === -2) {
            playerScore++;
            playerScoreElement.textContent = playerScore;
        } else {
            computerScore++;
            computerScoreElement.textContent = computerScore;
        }
    }

    if (playerScore === 5 || computerScore === 5) {
        playing = false;
    }
};

// Listen for player choice
let playerChoice;
let computerChoice;
choicesBtnsElement.addEventListener("click", function (event) {
    if (playing) {
        event.preventDefault();
        if (event.target.classList.contains("btn")) {
            playerChoice = event.target.dataset.choice;
        }
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
});
