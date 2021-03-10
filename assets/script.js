var quesIndex;
var gameTimer;
var timeAllotted = 30;
var questionEl = document.getElementById("main-quiz");
var questionEl = document.getElementById("firstQuestion");

var introEl = document.querySelector(".intro");
var timerEl = document.querySelector(".timer");

var questionBank = [
  {
    question: "question 1",
    choices: ["A", "B", "C", "D"],
    answer: "A",
  },
  {
    question: "question 2",
    choices: ["A", "B", "C", "D"],
    answer: "B",
  },
  {
    question: "question 3",
    choices: ["A", "B", "C", "D"],
    answer: "C",
  },
  {
    question: "question 4",
    choices: ["A", "B", "C", "D"],
    answer: "D",
  },
  {
    question: "question 4",
    choices: ["A", "B", "C", "D"],
    answer: "A",
  },
];

for (var i = 0; i < questionBank.length; i++) {
  console.log(questionBank[i].question);
}

// CURRENT 
function launchQuestion() {  // use testContent , check html firstQuestion
}

function init() {
    questionEl.classList.remove("hide")
    introEl.classList.add("hide")
    timerEl.classList.remove("hide")
    startTimer()
    launchQuestion()
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

document
  .getElementById("beginBtn")
  .addEventListener("click", init);
