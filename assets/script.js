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

var timeAllotted = 30;
var questionEl = document.querySelector(".main-quiz");
var answerEl = document.querySelector(".answers-container");
var introEl = document.querySelector(".intro");
var timerEl = document.querySelector(".timer");
var buttonEl = document.querySelector(".beginBtn")
var endEl = document.querySelector(".end")
var questionIndex = 0

function startTimer() {
    var timerInterval = setInterval(function(){
        timerEl.textContent = timeAllotted;
        timeAllotted = timeAllotted-1;
        if (timeAllotted === 0) {
            clearInterval(timerInterval)
        }
     }, 1000);
}

function init() {
    questionEl.classList.remove("hide")
    introEl.classList.add("hide")
    timerEl.classList.remove("hide")
    // startTimer()
    launchQuestion()
}

// CURRENT 
function launchQuestion(){
  var currentQuestion = questionBank[questionIndex]
  var questionText = document.getElementById("question-container")
  questionText.textContent = currentQuestion.question
  answerEl.innerHTML = ""
  
  currentQuestion.choices.forEach(function(choice, index) {
    var choiceBtn = document.createElement("button")
    choiceBtn.setAttribute("class", "choice")
    choiceBtn.setAttribute("value", choice)
    choiceBtn.textContent = index + 1 + " " + choice
    choiceBtn.onclick = launchQuestion
    answerEl.appendChild(choiceBtn)
  } )

//   for (var i = 0; i < questionBank.length; i++) {
//   console.log(questionBank[i].question);
// }
}

buttonEl.onclick = init