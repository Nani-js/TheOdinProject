// Declare Values

const choices = ["Rock", "Paper", "Scissors"];

// Game Rules

function determineWinner(userChoice, computerChoice) {
 if (userChoice === computerChoice) {
    return "Draw";
 }

 if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
 ) {
    return "User";
 }

 return "Computer";
}

// Game ON

function playGame() {
 const userChoice = prompt("Rock, Paper, Scissors? (R/P/S)");

 const computerChoice = choices[Math.floor(Math.random() * choices.length)];

 const winner = determineWinner(userChoice, computerChoice);

 alert(`User chose ${userChoice}. Computer chose ${computerChoice}. ${winner} wins!`);

 const playAgain = prompt("Play again? (Y/N)");

 if (playAgain === "Y" || playAgain === "y") {
    playGame();
 } else {
    alert("Thank You for playing!");
 }
}

playGame();