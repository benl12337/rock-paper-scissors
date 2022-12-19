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

const result = document.querySelector('#results');
const inner = document.querySelector('#resultText');
const scoreBoard = document.querySelector('#playerScore');
const compScoreBoard = document.querySelector('#compScore');

let count = 0;
let playerScore = 0;
let compScore = 0;

const playerScoreNode = document.createTextNode(playerScore);
scoreBoard.appendChild(playerScoreNode);
const compScoreNode = document.createTextNode(compScore);
compScoreBoard.appendChild(compScoreNode);
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function playGame() {

    // present winner if one of them reaches 5 points
    if (playerScore == 5) {
      inner.innerText = "YOU WIN!!!";
      return;
    } else if (compScore == 5) {
      inner.innerText = "YOU LOSE :(";
      return;
    }

    inner.innerText = "";
    let gameResult = playRound(button.id, getComputerChoice());
    const Node = document.createTextNode(gameResult);

    if (gameResult.includes('Win')) {
      playerScore += 1;
    } else if (gameResult.includes('Lose')) {
      compScore += 1;
    }
    playerScoreNode.textContent = playerScore;
    compScoreNode.textContent = compScore;
    inner.appendChild(Node);
    result.appendChild(inner);
    count += 1;
    console.log(count);
  });
});





