// const screenWidth = document.documentElement.clientWidth;
// const screenHeight = document.documentElement.clientHeight;
// console.log(screenWidth,screenHeight);
// canvas.width = screenWidth;
// canvas.height = screenHeight;

var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 20;
var ballSpeedY = 4;

var paddle1Y = 50;
var paddle2Y = 50;

var player1Score = 0;
var player2Score = 0;

const WINNING_SCORE = 3;

var showWin = false;

const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;

function calculateMousePos(evt) {
  var rect = (rect = canvas.getBoundingClientRect());
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY,
  };
}

function handleMouseClick(evt) {
  if (showWin == true) {
    player1Score = 0;
    player2Score = 0;
    showWin = false;
    console.log(showWin);
  }
  console.log("handleMouseClick called");
}

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  var framePerSecond = 30;
  setInterval(function () {
    moveEverything();
    drawEverything();
  }, 1000 / framePerSecond);

  canvas.addEventListener("mousedown", handleMouseClick);

  canvas.addEventListener("mousemove", function (evt) {
    var mousePos = calculateMousePos(evt);
    paddle1Y = mousePos.y - PADDLE_HEIGHT / 2;
  });
};

//ball reset to center and moves opposite after score
function ballReset() {
  if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
    showWin = true;
  }

  ballSpeedX = -ballSpeedX;
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
}

//bot player 2
function computerMovement() {
  var paddle2YCenter = paddle2Y + PADDLE_HEIGHT / 2;
  var shakeControl = 35;
  var botDifficulty = 5;
  // botDifficulty 1- 5
  if (paddle2YCenter < ballY - shakeControl) {
    paddle2Y += botDifficulty;
  } else if (paddle2YCenter > ballY + shakeControl) {
    paddle2Y -= botDifficulty;
  }
}

//ball bouncing
function moveEverything() {
  if (showWin == true) {
    return;
  }

  computerMovement();

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballX < 0) {
    //agar paddle sey takraey toh
    if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
      ballSpeedX = -ballSpeedX;
      //speed increase at edge of paddle
      var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
      ballSpeedY = deltaY * 0.35;
      //                    console.log("deltaY", deltaY, "ballSpeedY", ballSpeedY );
    } else {
      player2Score++; //must be before reset to calculate result
      ballReset();
    }
  }
  if (ballX > canvas.width) {
    if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
      ballSpeedX = -ballSpeedX;
      //speed increase at edge of paddle
      var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
      ballSpeedY = deltaY * 0.35;
    } else {
      player1Score++; //must be before reset to calculate result
      ballReset();
    }
  }
  if (ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }
  if (ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }
}

function drawNet() {
  for (var i = 0; i < canvas.height; i += 30) {
    colorRect(canvas.width / 2 - 1, i, 2, 20, "white");
  }
}

function drawEverything() {
  //background
  colorRect(0, 0, canvas.width, canvas.height, "black");
 
 
  // colorRect(0, 0, screenWidth, screenHeight, "black");



  
  if (showWin == true) {
    canvasContext.font = "20px Georgia";
    canvasContext.fillStyle = "white";
    canvasContext.fillText("CLICK TO CONTINUE", canvas.width / 2 - 110, 500);
  }
  
  if (player1Score >= WINNING_SCORE) {
    canvasContext.fillText("You WON!!", canvas.width / 2 - 100, 200);
  } else if (player2Score >= WINNING_SCORE) {
    canvasContext.fillText("Computer WON!!", canvas.width / 2 - 100, 200);
  }
  
  drawNet()
  // left paddle
  colorRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, "white");
  // Right paddle
  colorRect(
    canvas.width - PADDLE_THICKNESS,
    paddle2Y,
    PADDLE_THICKNESS,
    PADDLE_HEIGHT,
    "white"
  );

  // ball
  canvasContext.fillStyle = "red";
  canvasContext.beginPath();
  // context.arc(x, y, radius, startAngle, endAngle, counterclockwise)
  canvasContext.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
  canvasContext.fill();

  canvasContext.font = "20px Georgia";
  canvasContext.fillText(`Your Score: ${player1Score}`, 200, 100);
  canvasContext.fillText(`Bot Score: ${player2Score}`, canvas.width - 400, 100);

  return;
}

//to make draw code convenient
function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}
