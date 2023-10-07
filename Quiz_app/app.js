const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");
const resultShow = document.getElementById("result");
const percentDisplay = document.getElementById("percent");

const questionNumber = document.getElementById("questNum");
const Circle = document.getElementsByTagName("circle");

let currentQuestionIndex = 0;
let score = 0;
let counter = 0;

const questions = [
  {
    question: "which is the largest animal in the world",
    answers: [
      { text: "Elephant", correct: false }, //false
      { text: "Monkey", correct: false }, //false
      { text: "Blue Whale", correct: true }, //true
      { text: "Giraffe", correct: false }, //false
    ],
  },
  {
    question: "which is the largest animal in the world",
    answers: [
      { text: "Elephant", correct: false }, //false
      { text: "Monkey", correct: false }, //false
      { text: "Blue Whale", correct: true }, //true
      { text: "Giraffe", correct: false }, //false
    ],
  },
];

//startQuiz
function startQuiz() {
  console.log("startQuiz started");
  currentQuestionIndex = 0;
  score = 0;
  counter = 0;
  percentage = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

//showQuestion
function showQuestion() {
  console.log("counter = " + counter);

  console.log("showQuestion started");

  //remove previous questions and answers
  resetState();

  //hide the percentage
  resultShow.style.display = "none";

  //question display
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  //show question number
  questionNumber.innerHTML = `Question ${questionNo}  of ${questions.length}`;

  //answers display
  currentQuestion.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

//resetState
function resetState() {
  nextButton.style.visibility = "hidden";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

//selectAnswer
function selectAnswer(e) {
  const selectedBtn = e.target;

  //give correct and incorrect class to clicked/selected btn based on dataset
  if (selectedBtn.dataset.correct === "true") {
    selectedBtn.classList.add("correct");
    //increase score
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((element) => {
    //show correct answer
    if (element.dataset.correct === "true") {
      element.classList.add("correct");
    }
    //disable all selection after showing correct and incorrect
    element.disabled = true;
  });
  console.log("array stops");
  nextButton.style.visibility = "visible";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `${score} out of ${questions.length} correct`;
  questionElement.style.textAlign = "center";
  nextButton.innerHTML = "Start Again";
  nextButton.style.visibility = "visible";
  questionNumber.style.display = "none";
  resultShow.style.display = "block";
  resultShow.style.margin = "0 auto";

  percent();
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  console.log(score + " score");
  console.log(questions.length + " questions.length");
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

//percentage
function percent() {
  percentage = (score / questions.length) * 100;
  strokeWidth = 440;
  strokeOffset = 440 * (percentage / 100);
  dashOffset = strokeWidth - strokeOffset; //0=full, 472=null

  console.log(strokeOffset + " strokeOffset");
  console.log(dashOffset + " dashOffset");
  console.log(percentage + " percentage");
  setInterval(() => {
    if (counter == percentage) {
      if (counter == 0) {
        percentDisplay.innerHTML = `0%`;
      } else {
        clearInterval();
        percentage = 0;
      }
    } else if (counter < percentage) {
      counter++;
      console.log(counter, " counter");
      percentDisplay.innerHTML = `${counter}%`;
    }
    // Get a reference to the circle element
    const circle = document.getElementById("myCircle");
    

    // Update the CSS variable to change the value at 100% keyframe
    circle.style.setProperty("--dash-offset", dashOffset);
  }, 10);
}

startQuiz();
