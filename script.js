
const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

// Get HTML elements
const choiceButtons = document.querySelectorAll(".choice");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const resetButton = document.getElementById("reset-btn");

// Generate a random computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Compare choices and determine the winner
function getResult(player, computer) {
    if (player === computer) {
        return "draw";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "win";
    }

    return "lose";
}

// Play one round
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    // Display both choices
    playerChoiceDisplay.textContent =
        `Your move: ${formatChoice(playerChoice)}`;

    computerChoiceDisplay.textContent =
        `Computer's move: ${formatChoice(computerChoice)}`;

    // Update score and result message
    if (result === "win") {
        playerScore++;
        resultDisplay.textContent = "🎉 You win this round!";
    } else if (result === "lose") {
        computerScore++;
        resultDisplay.textContent = "😅 Computer wins this round!";
    } else {
        resultDisplay.textContent = "🤝 It's a draw!";
    }

    // Update score display
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

// Convert choice names into readable labels
function formatChoice(choice) {
    const emojis = {
        rock: "✊ Rock",
        paper: "✋ Paper",
        scissors: "✌️ Scissors"
    };

    return emojis[choice];
}

// Listen for clicks on the three choices
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});

// Reset scores and messages
function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;

    playerChoiceDisplay.textContent = "Your move: —";
    computerChoiceDisplay.textContent = "Computer's move: —";
    resultDisplay.textContent = "Make your first move!";
}

resetButton.addEventListener("click", resetGame);
