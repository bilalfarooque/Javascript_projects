let input = document.getElementById("guessInput");
let numberShow = document.getElementById("num");
let resultText = document.getElementById("result");
let guessBtn = document.getElementById("btn");
let mainContainer = document.querySelector(".container");
let indicator = document.getElementById("process");
let score = document.getElementById("score");
let highscore = document.getElementById("highestscore");
let poper = document.getElementById("pop");
let checkButton = document.getElementById("checkBtn");
// let time = document.getElementById("time");
// let date = document.getElementById("date");
// let currentTime = new Date();

let randomNum;

function randomNumGen(){
    randomNum = Math.ceil(Math.random() * 20);
    console.log("Secret Num = " + randomNum);
}

input.focus()
randomNumGen();

// function timeSet(){
//     date.style.display = "block"
//     time.textContent = currentTime;
// }


let scoreCount = +score.textContent;
console.log("Score = " +scoreCount);


input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // The Enter key was pressed
        validate();
    }
});

const validate = () => {
  if (input.value == "") {
    poper.textContent = "Number Missing!";
    input.focus()
}else if(+score.textContent === 0){
      poper.textContent = "You Lose!";
      checkButton.setAttribute("onclick", "resetAll()");
    }
  else {
    console.log(randomNum);
    console.log(`check clicked`);
    if (input.value == randomNum) {
      console.log("You got it right!");
      mainContainer.style.backgroundColor = "green";
      indicator.innerText = "Correct Number!";
      numberShow.innerText = randomNum;
      poper.textContent = "You Win!";
      checkButton.textContent = "Play Again";
      checkButton.setAttribute("onclick", "resetAll()");
      highscore.textContent = score.textContent;
    } else if (input.value > randomNum) {
      indicator.innerText = "Too High!";
      console.log(`Number is greater`);
      poper.textContent = "Again!";
      score.textContent = --scoreCount;
      input.value = "";
      input.focus();
    } else if (input.value < randomNum) {
        indicator.innerText = "Too Low!";
        console.log(`Number is less`);
        poper.textContent = "Again!";
        score.textContent = --scoreCount;
        input.value = "";
        input.focus();
    }
  }
};



function resetAll() {
  mainContainer.style.backgroundColor = "black";
  indicator.innerHTML = "Start guessing...";
  numberShow.innerText = "?";
  input.value = "";
  scoreCount = 20;
  score.textContent = "20";
  checkButton.textContent = "Check!";
  poper.textContent = "Start"
  checkButton.setAttribute("onclick", "validate()");
  input.focus();
  randomNumGen()
}
