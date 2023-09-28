"use strict";

// GLOBAL VARIABLES //

const RPS_CHOICES = ["rock", "paper", "scissors"];

let PLAYING = true;
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

let PLAYER_CHOICE, COMPUTER_CHOICE;

// DOM ELEMENTS //

const playerElement = document.querySelector(".player");

const computerElement = document.querySelector(".computer");

const playerScoreElement = document.querySelector(".score--player");
const computerScoreElement = document.querySelector(".score--computer");

const playerSelectionElement = document.querySelector(".selection--player");
const computerSelectionElement = document.querySelector(".selection--computer");

const choicesButtonsElement = document.querySelector(".buttons");

const resetButtonElement = document.querySelector(".button--reset");

// HELPER FUNCTIONS //

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

const getRoundScore = function (playerSelection, computerSelection) {
    const indexDifference = RPS_CHOICES.indexOf(playerSelection) - RPS_CHOICES.indexOf(computerSelection);

    if (indexDifference !== 0) {
        if (indexDifference === 1 || indexDifference === -2) {
            PLAYER_SCORE++;
            playerScoreElement.textContent = PLAYER_SCORE;
        } else {
            COMPUTER_SCORE++;
            computerScoreElement.textContent = COMPUTER_SCORE;
        }
    }

    if (PLAYER_SCORE === 5 || COMPUTER_SCORE === 5) {
        PLAYING = false;

        if (PLAYER_SCORE === 5) {
            playerElement.style.color = "green";
            computerElement.style.color = "red";
        } else if (COMPUTER_SCORE === 5) {
            playerElement.style.color = "red";
            computerElement.style.color = "green";
        }
    }
};

// CALLBACK FUNCTIONS //

const playRound = function (event) {
    event.preventDefault();
    if (PLAYING) {
        if (event.target.classList.contains("button")) {
            PLAYER_CHOICE = event.target.dataset.choice;
            playerSelectionElement.src = `./images/player-${PLAYER_CHOICE}.png`;

            COMPUTER_CHOICE = getComputerChoice();
            computerSelectionElement.src = `./images/computer-${COMPUTER_CHOICE}.png`;
        }

        getRoundScore(PLAYER_CHOICE, COMPUTER_CHOICE);
    }
};

const resetGame = function () {
    playerElement.style.color = "black";
    computerElement.style.color = "black";

    PLAYING = true;

    PLAYER_SCORE = 0;
    playerScoreElement.textContent = PLAYER_SCORE;
    playerSelectionElement.src = `./images/player.png`;

    COMPUTER_SCORE = 0;
    computerScoreElement.textContent = COMPUTER_SCORE;
    computerSelectionElement.src = `./images/computer.png`;
};

// EVENT LISTENERS //

choicesButtonsElement.addEventListener("click", playRound);
resetButtonElement.addEventListener("click", resetGame);
