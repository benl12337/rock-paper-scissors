// this function randomly selects for the computer out of Rock, Paper and Scissors
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return 'Rock';
  } else if (choice == 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// this function returns the winner based on the player's seclection and computer's selection
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "You draw!";
  } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const buttons = document.querySelectorAll('button');
const reset = document.querySelector('#reset');
reset.style.display = "none";

function gameRound() {
  const roundResults = document.querySelector('#resultText');
  const gameResult = document.querySelector('#finalWinner');
  const playerScoreText = document.querySelector('#playerScore');
  const compScoreText = document.querySelector('#compScore');

  let playerScore = 0;
  let compScore = 0;

  playerScoreText.textContent = playerScore;
  compScoreText.textContent = compScore;

  buttons.forEach(button => {
    button.addEventListener('click', function playGame() {
      console.log("player: " + playerScore);
      console.log("comp: " + compScore);
      if (button.id == "reset") {
        reset.style.display = "none";
        console.log(playerScore);
        compScore = 0;
        playerScore = 0;
        playerScoreText.textContent = playerScore;
        compScoreText.textContent = compScore;
        gameResult.textContent = "";
        return;
      }

      playerScoreText.textContent = playerScore;
      compScoreText.textContent = compScore;
      if (playerScore == 5) {
        // reset the game
        roundResults.textContent = "";
        gameResult.textContent = "YOU WIN!!!"
        reset.style.display = "block";
        return;

      } else if (compScore == 5) {
        // reset the game
        roundResults.textContent = "";
        gameResult.textContent = "YOU LOSE :("
        reset.style.display = "block";
        return;
      }
      // else calculate the winner
      const result = playRound(button.id, getComputerChoice());
      roundResults.textContent = result;
      if (result.includes('Win')) {
        playerScore += 1;
      } else if (result.includes('Lose')) {
        compScore += 1;
      }
    });
  });
}

gameRound();







