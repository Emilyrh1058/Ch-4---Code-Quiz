var introEl = document.querySelector(".intro");
var feedbackEl = document.querySelector(".explain")
var nextButton = document.querySelector(".next")
var answerEl = document.querySelector(".answers-container");
var timerEl = document.querySelector(".timer");
var timeAllotted = 60;
var beginBtn = document.querySelector(".beginBtn")
var endEl = document.querySelector(".end")
var submitBtn = document.querySelector(".submitBtn")
var scoreLog = document.getElementById("#scoreLog")
var finalPageEl = document.querySelector(".finalPage")
var highscorePage = document.querySelector(".highScore")
var playAgain = document.querySelector(".restart")
var again = document.querySelector(".tryAgain")
var timer = function() {
  time = time - 1;
  timerEl.textContent = time;
  if (time <0) {
    endQuiz();
  }
}


// QUESTIONS ARRAY
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
    finalPageEl.classList.add('hide')
    startTimer()
    launchQuestion()
}

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

function viewScore() {
  document.getElementById("log")
  document.getElementById("finale")
  highscore = document.getElementById("highScore").innerHTML 
  initials = document.getElementById("initials").value
  if (initials <= 0){
      window.alert("Must put in your Initials")
      return;
  }

  let logScores = JSON.parse(localStorage.getItem("yourScores")) || [];
  let numbers = {Initials: initials, Score: highscore} 
  logScores.push(numbers)
  console.log(logScores)
  setScore(logScores)
  localStorage.setItem("yourScores", JSON.stringify(logScores))
};

function setScore(logScores) {
  for (var i = 0; i < logScores.length; i++) {
      var logScore = document.getElementById("finalLog")
      var ulScores = document.createElement("li")
        ulScores.setAttribute('class', 'yourScores')
        ulScores.textContent = logScores[i].Score
        finalLog.appendChild(ulScores)
      var ulInitials = document.createElement('li')
        ulInitials.setAttribute('class', 'yourInitials')
        ulInitials.textContent = logScores[i].Initials;
        finalLog.appendChild(ulInitials)
  }
}

function highscores() {
  document.getElementById("intro")
  document.getElementById("finale")
  var getScore = JSON.parse(localStorage.getItem("yourScores"));
    setScore(getScore)
    console.log(getScore)
};

var reload = function() {
  location.href = "https://emilyrh1058.github.io/code-quiz/"
}

var tryAgain = function() {
  location.href = "https://emilyrh1058.github.io/code-quiz/"
}


beginBtn.addEventListener("click", init)
submitBtn.addEventListener("click", endQuiz)
save.addEventListener("click", viewScore)
highscorePage.addEventListener("click", highScore)
playAgain.addEventListener("click", reload)
again.addEventListener("click", reload) 