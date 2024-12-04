// Array of choices
const choices = ["rock", "paper", "scissors"];

// Selecting elements
const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");
const resultElement = document.getElementById("result");
const choiceButtons = document.querySelectorAll(".choice");
const restartButton = document.getElementById("restartButton");

// Function to get the computer's random choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a draw!";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    }
    return "You lose!";
}

// Function to handle player choice
function handleChoice(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();

    playerChoiceElement.textContent = `You chose: ${playerChoice}`;
    computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;

    const result = determineWinner(playerChoice, computerChoice);
    resultElement.textContent = `Result: ${result}`;
}

// Function to restart the game
function restartGame() {
    playerChoiceElement.textContent = "You chose: ";
    computerChoiceElement.textContent = "Computer chose: ";
    resultElement.textContent = "Result: ";
}

// Add event listeners to choice buttons
choiceButtons.forEach(button => {
    button.addEventListener("click", handleChoice);
});

// Add event listener to restart button
restartButton.addEventListener("click", restartGame);
