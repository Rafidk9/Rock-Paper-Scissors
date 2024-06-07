const btnClicks = {
  1: 'Rock',
  2: 'Paper',
  3: 'Scissors'
}

let totalPlayerScore = 0
let totalCompScore = 0

let compChoice = document.getElementById("compChoice");
let playerChoice = document.getElementById("playerChoice");

const buttons = document.getElementsByClassName("btn-container")

const paper = document.getElementById("btnPaper")
const scissors = document.getElementById("btnScissors")

function rockClick() {
  const rock = document.getElementById("btnRock").textContent
  playerChoice.textContent = `Player: ${rock}`
  let randNum = Math.floor(Math.random() * 3) + 1
  let comp = btnClicks[randNum]
  compChoice.textContent = `Computer: ${comp}`
  if (comp == 'Scissors') {
    totalPlayerScore += 1
  }
  else if (comp == 'Paper') {
    totalCompScore += 1
  }
  document.getElementById('p0').textContent = `${totalPlayerScore}`
  document.getElementById('c0').textContent = `${totalCompScore}`
}
function paperClick() {
  const paper = document.getElementById("btnPaper").textContent
  playerChoice.textContent = `Player: ${paper}`
  let randNum = Math.floor(Math.random() * 3) + 1
  let comp = btnClicks[randNum]
  compChoice.textContent = `Computer: ${comp}`
  if (comp == 'Rock') {
    totalPlayerScore += 1
  }
  else if (comp == 'Scissors') {
    totalCompScore += 1
  }
  document.getElementById('p0').textContent = `${totalPlayerScore}`
  document.getElementById('c0').textContent = `${totalCompScore}`
}
function scissorsClick() {
  const scissors = document.getElementById("btnScissors").textContent
  playerChoice.textContent = `Player: ${scissors}`
  let randNum = Math.floor(Math.random() * 3) + 1
  let comp = btnClicks[randNum]
  compChoice.textContent = `Computer: ${comp}`
  if (comp == 'Paper') {
    totalPlayerScore += 1
  }
  else if (comp == 'Rock') {
    totalCompScore += 1
  }
  document.getElementById('p0').textContent = `${totalPlayerScore}`
  document.getElementById('c0').textContent = `${totalCompScore}`
}

