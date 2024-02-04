function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Make it case-insensitive

    if (playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie! Both chose " + playerSelection;
    } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
      const computerSelection = getComputerChoice();
  
      console.log(`Round ${round}:`);
      console.log(`Player chose ${playerSelection}`);
      console.log(`Computer chose ${computerSelection}`);
  
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
  
      if (roundResult.includes("Win")) {
        playerScore++;
      } else if (roundResult.includes("Lose")) {
        computerScore++;
      }
    }
  
    console.log("\nGame Over!");
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry, you lose the game!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  // Call the playGame function to start the game
  playGame();
  