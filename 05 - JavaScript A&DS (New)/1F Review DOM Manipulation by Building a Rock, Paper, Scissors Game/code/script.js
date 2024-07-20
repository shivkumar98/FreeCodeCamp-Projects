let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
   const options = ["Rock", "Paper", "Scissors"];
   let randomIndex = Math.floor((Math.random()*3));
   return options[randomIndex];
}
console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
   if (player == computer) 
      return false;
   if ((player == "Rock" && computer == "Scissors")
         || (player == "Scissors" && computer == "Paper")
         || (player == "Paper" && computer == "Rock")) 
      return true;
   else
      return false;

}

function getRoundResults(userOption) {
   const computerResult = getRandomComputerResult();
   if (userOption == computerResult) {
      return `It's a tie! Both chose ${userOption}`
   }
   if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`
   } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`
   }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  const results = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultsMsg.innerText = results;
  if (playerScore == 3) {
   winnerMsgElement.innerText = 'Player has won the game!'
   resetGameBtn.style.display = 'block'
   optionsContainer.style.display = 'none'
 } else if (computerScore == 3) {
   winnerMsgElement.innerText = 'Computer has won the game!'
   resetGameBtn.style.display = 'block'
   optionsContainer.style.display = 'none'
 }
}

function resetGame() {
   computerScore = 0;
   playerScore = 0;
   computerScoreSpanElement.innerText = computerScore;
   playerScoreSpanElement.innerText = playerScore;
   resetGameBtn.style.display = 'none';
   optionsContainer.style.display = 'block'
   winnerMsgElement.innerText = '';
   roundResultsMsg.innerText = '';
 };

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});