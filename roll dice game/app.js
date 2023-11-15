let diceImage = document.getElementById("dice");
let totalScore1Html = document.querySelector("#score1");
let totalScore2Html = document.querySelector("#score2");
let rollDiceButton = document.querySelector("#rollDiceBtn");
let holdDiceButton = document.querySelector("#holdDiceBtn");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let popup = document.getElementById("popup");
let popup2 = document.getElementById("popup2");
let popup3 = document.getElementById("popup3");
let winner = document.getElementById("winner");
let name1 = document.getElementById("nameOfPlayer1");
let name2 = document.getElementById("nameOfPlayer2");

let player1Turn = true;
let player2Turn = false;

let player1Score = 0;
let player2Score = 0;
let randomNum = 0;

let totalScore1 = 0;
let totalScore2 = 0;

popup2.classList.add("open-popup");

// Add event listener for when popup2 is closed
popup2.childNodes[5].addEventListener("click", () => {
  // Open popup3
  popup3.classList.add("open-popup");
});

const nameSubmit = () => {
  player1.childNodes[1].textContent = name1.value;
  player2.childNodes[1].textContent = name2.value;

  closePopUp();
};

const turnCheck = () => {
  if (player2Turn) {
    player2.style.backgroundColor = "rgba(232, 210, 210, 0.77)";
    player1.style.backgroundColor = "rgba(210, 144, 144, 0.77)";
    player1.childNodes[1].style.transform = "scale(1)";
    player2.childNodes[1].style.transform = "scale(1.2)";
  } else {
    player1.style.backgroundColor = "rgba(232, 210, 210, 0.77)";
    player2.style.backgroundColor = "rgba(210, 144, 144, 0.77)";
    player2.childNodes[1].style.transform = "scale(1)";
    player1.childNodes[1].style.transform = "scale(1.2)";
  }
};

turnCheck();

const rollDice = () => {
  turnCheck();
  if (!checkWin()) {
    diceImage.classList.add("rockNroll");

    randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum);
    diceImage.src = `./assets/${randomNum}.png`;
    if (randomNum == 1) {
      updateScoreBoard();
      switchTurn();
      console.log("player1Score =" + player1Score);
    } else {
      runCurrentScore(randomNum);
    }

    setTimeout(() => {
      diceImage.classList.remove("rockNroll");
    }, 1000);
  }
};

const switchTurn = () => {
  if (player1Turn) {
    player1Turn = false;
    player2Turn = true;
  } else {
    player1Turn = true;
    player2Turn = false;
  }

  document.querySelector("#roll1").textContent = player1Score = 0;
  document.querySelector("#roll2").textContent = player2Score = 0;
};

const runCurrentScore = (randomNum) => {
  // player1 score
  if (player1Turn && !player2Turn) {
    document.querySelector("#roll1").textContent = player1Score =
      player1Score + randomNum;

    return player1Score;
  }
  // player2 score
  else if (!player1Turn && player2Turn) {
    document.querySelector("#roll2").textContent = player2Score =
      player2Score + randomNum;

    return player2Score;
  }

  console.log(`Player 1: ${player1Score}, Player 2: ${player2Score}`);
};

const updateScoreBoard = () => {
  if (player1Turn && !player2Turn) {
    totalScore1 += player1Score;
    console.log("totalScore1 =" + totalScore1);
    totalScore1Html.textContent = totalScore1;
  } else if (!player1Turn && player2Turn) {
    totalScore2 += player2Score;
    console.log("totalScore2 =" + totalScore2);
    totalScore2Html.textContent = totalScore2;
  }
};

const holdDice = () => {
  updateScoreBoard();
  switchTurn();
};

const checkWin = () => {
  rollDiceButton.addEventListener("click", rollDice);
  holdDiceButton.addEventListener("click", holdDice);
  if (totalScore1 >= 50) {
    rollDiceButton.style.pointerEvents = 'none';
    holdDiceButton.style.pointerEvents = 'none';
   
    winner.innerText = "PLAYER 1 WINS";
    popup.classList.add("open-popup");
  } else if (totalScore2 >= 50) {
    rollDiceButton.style.pointerEvents = 'none';
    holdDiceButton.style.pointerEvents = 'none';

    winner.innerText = "PLAYER 2 WINS";
    popup.classList.add("open-popup");
  }
};

const newGame = () => {
  player1Score = 0;
  player2Score = 0;
  randomNum = 0;
  totalScore1 = 0;
  totalScore2 = 0;

  totalScore1Html.textContent = 0;
  totalScore2Html.textContent = 0;
  document.querySelector("#roll2").textContent = 0;
  document.querySelector("#roll1").textContent = 0;

  player1Turn = true;

  rollDiceButton.style.pointerEvents = 'auto';
  holdDiceButton.style.pointerEvents = 'auto';
  closePopUp();
};

if (totalScore1 >= 50 || totalScore2 >= 50) {
  console.log(popup);
  popup.classList.add("open-popup");
}

function closePopUp() {
  popup.classList.remove("open-popup");
  popup2.classList.remove("open-popup");
  popup3.classList.remove("open-popup");
}
