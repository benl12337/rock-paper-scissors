
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

function getPlayerChoice() {
  let str = prompt("Please choose between Rock, Paper or Scissors");
  let choice = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return choice;
}

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

function game() {
  let playerWins = 0;
  let compWins = 0;
  for (let i = 0; i < 5; i++) {
    let outcome = playRound(getPlayerChoice(), getComputerChoice());
    console.log(outcome);
    if (outcome.includes("Win")) {
      playerWins++;
    } else if (outcome.includes("Lose")) {
      compWins++;
    } 
  }
  console.log(`Player Wins: ${playerWins}\nComputer Wins: ${compWins}`);
}

game();
