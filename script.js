"use strict";

// DOM ELEMENTS

const playerElement = document.querySelector(".player");

const computerElement = document.querySelector(".computer");

const playerScoreElement = document.querySelector(".score--player");
const computerScoreElement = document.querySelector(".score--computer");

const playerSelectionElement = document.querySelector(".selection--player");
const computerSelectionElement = document.querySelector(".selection--computer");

const choicesButtonsElement = document.querySelector(".buttons");

const resetButtonElement = document.querySelector(".button--reset");

// GLOBAL VARIABLES

// Rock, Paper, Scissors choices
const rpsChoice = ["rock", "paper", "scissors"];

let playing = true;
let playerScore = 0;
let computerScore = 0;

let playerChoice, computerChoice;

// HELPER FUNCTIONS

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
const getRoundScore = function (playerSelection, computerSelection) {
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

        if (playerScore === 5) {
            playerElement.style.color = "green";
            computerElement.style.color = "red";
        } else if (computerScore === 5) {
            playerElement.style.color = "red";
            computerElement.style.color = "green";
        }
    }
};

// CALLBACK FUNCTIONS

const playRound = function (event) {
    event.preventDefault();
    if (playing) {
        if (event.target.classList.contains("button")) {
            playerChoice = event.target.dataset.choice;
            playerSelectionElement.src = `./images/player-${playerChoice}.png`;

            computerChoice = getComputerChoice();
            computerSelectionElement.src = `./images/computer-${computerChoice}.png`;
        }

        getRoundScore(playerChoice, computerChoice);
    }
};

const resetGame = function () {
    playerElement.style.color = "black";
    computerElement.style.color = "black";

    playing = true;

    playerScore = 0;
    playerScoreElement.textContent = playerScore;
    playerSelectionElement.src = `./images/player.png`;

    computerScore = 0;
    computerScoreElement.textContent = computerScore;
    computerSelectionElement.src = `./images/computer.png`;
};

// Listen for player choice

choicesButtonsElement.addEventListener("click", playRound);

resetButtonElement.addEventListener("click", resetGame);
