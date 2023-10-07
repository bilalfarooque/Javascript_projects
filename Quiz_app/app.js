const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

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
  nextButton.innerHTML = "Next";
  showQuestion();
}

//showQuestion
function showQuestion() {
  console.log("showQuestion started");

  resetState();

  //question display
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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


  Array.from(answerButton.children).forEach(element => {
    //show correct answer
    if(element.dataset.correct === "true"){
      element.classList.add("correct");
    }
    //disable all selection after showing correct and incorrect
    element.disabled = true;
    
  });
  console.log("array stops")
  nextButton.style.visibility = "visible";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Start Again";
  nextButton.style.visibility = "visible";

}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",  ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})

startQuiz();