function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    document.getElementById('computerchoice').textContent = computerChoice;
  
    const result = compareChoices(playerChoice, computerChoice);
  
    displayResult(result);
  }
  
  function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  
  function displayResult(result) {
    document.getElementById('message').textContent = result;
    document.querySelector('.result').style.display = 'block';
  }
  
  function reset() {
    document.getElementById('message').textContent = '';
    document.getElementById('computerchoice').textContent = '';
    document.querySelector('.result').style.display = 'none';
  }