// INTRO
var introEl = document.querySelector(".intro");


var feedbackEl = document.querySelector(".explain")
var nextButton = document.querySelector(".next")

// QUESTIONS - GLOBAL
var questions = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language",
              "HyperText Markup Locator", 
              "HyperText Masking Line", 
              "HateThis Must Leave"],
    answer: "HyperText Markup Language",
  },
  {
    question: "To style a webpage, what language would you use?",
    choices: ["HTML", 
              "CSS", 
              "Spanish", 
              "Google"],
    answer: "CSS",
  },
  {
    question: "What's the differenct between a <ul> and a <ol>?",
    choices: ["underline vs overline", 
              "undefined link vs onclick link", 
              "unordered list vs ordered list", 
              "universal language vs older language"],
    answer: "unordered list vs ordered list",
  },
  {
    question: "Where should you place the link to the Javascript file?",
    choices: ["In the title", 
              "In the footer", 
              "At the top of the body section", 
              "At the bottom of the body section"],
    answer: "At the bottom of the body section",
  },
  {
    question: "In Javascript, what doesn't var stand for?",
    choices: ["Variable", 
              "Vertical", 
              "Vacation", 
              "Vaccinate"],
    answer: "Variable",
  },
];
var questionEl = document.querySelector(".main-quiz");
var questionIndex = 0
var time = questions.length * 10;

//ANSWERS - GLOBAL
var answerEl = document.querySelector(".answers-container");

//TIMER - GLOBAL
var timerEl = document.querySelector(".timer");
var timeAllotted = 60;
var beginBtn = document.querySelector(".beginBtn")
var endEl = document.querySelector(".end")
var timer = function() {
  time = time - 1;
  timerEl.textContent = time;
  if (time <0) {
    endQuiz();
  }
}

function startTimer() {
    var timerInterval = setInterval(function(){
        timerEl.textContent = timeAllotted;
        timeAllotted = timeAllotted-1;
        if (timeAllotted === 0) {
            clearInterval(timerInterval)
        }
     }, 1000);
}

// ADD AND REMOVE
function init() {
    questionEl.classList.remove("hide")
    introEl.classList.add("hide")
    timerEl.classList.remove("hide")
    startTimer()
    launchQuestion()
}

// START QUIZ
var launchQuestion = function(){
  nextButton.classList.add("hide")
  feedbackEl.classList.add("hide")
  var currentQuestion = questions[questionIndex]
  var questionText = document.getElementById("question-container")
  questionText.textContent = currentQuestion.question
  answerEl.innerHTML = ""
  
  currentQuestion.choices.forEach(function(choice) {
    var choiceBtn = document.createElement("button")
    choiceBtn.setAttribute("class", "choice")
    choiceBtn.setAttribute("value", choice)
    choiceBtn.textContent = choice
    choiceBtn.addEventListener("click", analyzeAnswer)

    answerEl.appendChild(choiceBtn)
  } )
}

function analyzeAnswer() {
  feedbackEl.classList.remove("hide")
if (this.value === questions[questionIndex].answer) {
  console.log("Right")
  timeAllotted = timeAllotted + 10;
  feedbackEl.textContent = "Right"
} else {
  console.log("Wrong")
  timeAllotted = timeAllotted - 15;
  feedbackEl.textContent = "Wrong"
}
nextButton.classList.remove("hide")
nextButton.addEventListener("click", nextQuestion)
}

function nextQuestion(){
questionIndex = questionIndex + 1

if (questions[questionIndex] === undefined) {
endQuiz()
} else {
  launchQuestion()
}
}
function endQuiz() {
 questionEl.classList.add("hide")
 endEl.classList.remove("hide")
}
beginBtn.addEventListener("click", init)
//questionEl.addEventListener("click", nextQuestion);