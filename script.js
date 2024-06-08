const btnClicks = {
  1: 'Rock',
  2: 'Paper',
  3: 'Scissors'
}

let totalPlayerScore = 0
let totalCompScore = 0

let compChoice = document.getElementById("compChoice");
let playerChoice = document.getElementById("playerChoice");

function rockClick() {
  const rock = document.getElementById("imgRock").textContent
  playerChoice.textContent = `Player: Rock`
  let randNum = Math.floor(Math.random() * 3) + 1
  let comp = btnClicks[randNum]
  compChoice.textContent = `Computer: ${comp}`
  if (comp == 'Scissors') {
    totalPlayerScore += 1
    popUp("Player Wins!")
  }
  else if (comp == 'Paper') {
    totalCompScore += 1
    popUp("Computer Wins!")
  }
  else {
    popUp("It's a Tie!!")
  }
  document.getElementById('p0').textContent = `${totalPlayerScore}`
  document.getElementById('c0').textContent = `${totalCompScore}`
}
function paperClick() {
  const paper = document.getElementById("imgPaper").textContent
  playerChoice.textContent = `Player: Paper`
  let randNum = Math.floor(Math.random() * 3) + 1
  let comp = btnClicks[randNum]
  compChoice.textContent = `Computer: ${comp}`
  if (comp == 'Rock') {
    totalPlayerScore += 1
    popUp("Player Wins!")
  }
  else if (comp == 'Scissors') {
    totalCompScore += 1
    popUp("Computer Wins!")
  }
  else {
    popUp("It's a Tie!!")
  }
  document.getElementById('p0').textContent = `${totalPlayerScore}`
  document.getElementById('c0').textContent = `${totalCompScore}`
}
function scissorsClick() {
  const scissors = document.getElementById("imgScissors").textContent
  playerChoice.textContent = `Player: Scissors`
  let randNum = Math.floor(Math.random() * 3) + 1
  let comp = btnClicks[randNum]
  compChoice.textContent = `Computer: ${comp}`
  if (comp == 'Paper') {
    totalPlayerScore += 1
    popUp("Player Wins!")
  }
  else if (comp == 'Rock') {
    totalCompScore += 1
    popUp("Computer Wins!")
  }
  else {
    popUp("It's a Tie!!")
  }
  document.getElementById('p0').textContent = `${totalPlayerScore}`
  document.getElementById('c0').textContent = `${totalCompScore}`
}

function popUp(message) {
  const displayResult = document.getElementById("message")
  displayResult.textContent = message
  if (message == "Computer Wins!") {
    displayResult.classList.add("popUpLoseColor")
    displayResult.classList.remove("popUpTieColor")
  }
  else if (message == "Player Wins!") {
    displayResult.classList.add("popUpWinColor")
    displayResult.classList.remove("popUpTieColor")
    displayResult.classList.remove("popUpLoseColor")
  }
  else {
    displayResult.classList.add("popUpTieColor")
  }
}