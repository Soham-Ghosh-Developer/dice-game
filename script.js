let currentPlayer = 1;
let scores = [0, 0];
let gameEnded = false;

function rollDice() {
  if (gameEnded) return;

  const diceValue = Math.floor(Math.random() * 6) + 1;
  const currentPlayerScoreElement = document.getElementById(`score${currentPlayer}`);
  
  scores[currentPlayer - 1] += diceValue;
  currentPlayerScoreElement.textContent = scores[currentPlayer - 1];

  // Switch to the other player for the next turn
  currentPlayer = currentPlayer === 1 ? 2 : 1;

  // Check if both players have rolled the dice
  if (scores[0] > 0 && scores[1] > 0) {
    endGame();
  }
}

function endGame() {
  gameEnded = true;
  const player1Score = scores[0];
  const player2Score = scores[1];

  let winner;
  if (player1Score > player2Score) {
    winner = "Player 1";
  } else if (player1Score < player2Score) {
    winner = "Player 2";
  } else {
    winner = "It's a tie!";
  }

  // Display the winner
  const resultElement = document.createElement("p");
  resultElement.textContent = `Winner: ${winner}`;
  document.body.appendChild(resultElement);

  // Disable the "Roll the Dice" button
  document.getElementById("rollBtn").disabled = true;
}

function resetGame() {
  gameEnded = false;
  currentPlayer = 1;
  scores = [0, 0];

  // Reset player scores
  document.getElementById("score1").textContent = "0";
  document.getElementById("score2").textContent = "0";

  // Remove the result element if it exists
  const resultElement = document.querySelector("p");
  if (resultElement) {
    resultElement.remove();
  }

  // Enable the "Roll the Dice" button
  document.getElementById("rollBtn").disabled = false;
}
