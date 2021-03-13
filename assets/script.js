var questionBank = [
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
var timeAllotted = 60;
var questionEl = document.querySelector(".main-quiz");
var answerEl = document.querySelector(".answers-container");
var introEl = document.querySelector(".intro");
var timerEl = document.querySelector(".timer");
var buttonEl = document.querySelector(".beginBtn")
var endEl = document.querySelector(".end")
//var questionIndex = 0

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

  for (var i = 0; i < questionBank.length; i++) {
  console.log(questionBank[i].question);
}
}

buttonEl.onclick = init