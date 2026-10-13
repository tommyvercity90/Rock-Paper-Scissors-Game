# ✊ Rock Paper Scissors Game

A simple, interactive **Rock Paper Scissors Game** built using HTML, CSS, and JavaScript. Play against the computer, test your luck, and keep track of your score in real time!

## 📌 Table of Contents

- About the Project
- Features
- Technologies Used
- Project Structure
- Getting Started
- How to Play
- Game Rules
- JavaScript Concepts Practiced
- Future Improvements
- Author
- License

## 🎮 About the Project

The Rock Paper Scissors Game is a beginner-friendly front-end development project designed to practice JavaScript fundamentals.

The player competes against the computer by selecting rock, paper, or scissors. The computer randomly selects its move, and the game determines the winner based on the rules.

The project uses separate HTML, CSS, and JavaScript files to keep the code organized and easy to maintain.

## ✨ Features

- 🪨 Three interactive choices: Rock, Paper, and Scissors
- 🤖 Random computer moves
- 🏆 Automatic win, lose, and draw detection
- 📊 Running score for the player and computer
- 🔄 Reset button to restart the game
- 🎨 Modern gradient background and clean interface
- ✨ Smooth hover effects and button animations
- 📱 Responsive layout for desktop and mobile devices
- ⚡ Instant results without reloading the page
- 🧩 Simple and beginner-friendly code

## 🛠️ Technologies Used

| Technology | Purpose                                                   |
| ---------- | --------------------------------------------------------- |
| HTML5      | Creates the game structure                                |
| CSS3       | Handles styling, layout, responsiveness, and transitions  |
| JavaScript | Implements game logic, random choices, and score tracking |

## 📂 Project Structure

```
rock-paper-scissors/
│
├── index.html     # Game structure
├── style.css      # Styling and responsive design
├── script.js      # Game logic and score management
└── README.md      # Project documentation
```

## 🚀 Getting Started

Follow these steps to run the project on your computer.

### Prerequisites

You only need:

- A modern web browser
- A code editor such as Visual Studio Code (optional)

No external libraries or frameworks are required.

### Installation

**1. Clone the repository**

Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPOSITORY` with your repository name.

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

**2. Navigate to the project folder**

```
cd rock-paper-scissors
```

**3. Open the project**

Open `index.html` directly in your browser, or open the folder in Visual Studio Code and run it using the Live Server extension.

## 🕹️ How to Play

1. Open the game in your browser.
2. Choose one of the three buttons: Rock, Paper, or Scissors.
3. The computer randomly selects its move.
4. The game displays both choices and the round result.
5. The winner receives one point.
6. Continue playing to increase your score.
7. Click **Reset Game** to reset both scores and the displayed messages.

**Note:** The score is stored in JavaScript variables, so refreshing the page resets the game.

## 📏 Game Rules

| Player's Choice       | Computer's Choice | Result        |
| --------------------- | ----------------- | ------------- |
| Rock ✊                | Scissors ✌️       | Player wins   |
| Paper ✋               | Rock ✊            | Player wins   |
| Scissors ✌️           | Paper ✋           | Player wins   |
| Rock ✊                | Rock ✊            | Draw          |
| Paper ✋               | Paper ✋           | Draw          |
| Scissors ✌️           | Scissors ✌️       | Draw          |
| Any other combination | —                 | Computer wins |

## 🧠 JavaScript Concepts Practiced

This project helps develop practical knowledge of:

- **Arrays:** Storing the available game choices.
- **Math.random():** Generating random computer moves.
- **Math.floor():** Converting a random number into a valid array index.
- **Conditional statements:** Determining whether the player wins, loses, or draws.
- **Functions:** Organizing game logic into reusable blocks.
- **DOM manipulation:** Updating scores, choices, and result messages.
- **Event listeners:** Handling button clicks.
- **Dataset attributes:** Reading each button's selected move.
- **Variables and state:** Maintaining scores between rounds.
- **Responsive CSS:** Adapting the interface to different screen sizes.

## 🔮 Future Improvements

Possible enhancements for future versions:

- Add sound effects for wins, losses, and draws.
- Add animations when a player selects a move.
- Save scores using `localStorage`.
- Add a best-of-five game mode.
- Display the overall match winner.
- Add a dark/light theme toggle.
- Add a game history section.
- Publish the project using GitHub Pages.



