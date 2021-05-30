// DOM
var timerEl = document.getElementById('#timer');
var highscoreEl = document.getElementById('#show-high-score');
var introEl = document.getElementById('#intro-content');
var beginQuiz = document.getElementById('#begin-quiz');
var answerEl = document.getElementById("#answers");
var feedbackEl = document.querySelector(".feedback");
var scoreEl = document.getElementById('#your-score');
var highScoreEl = document.getElementById('#high-scores');
var scoreBtns = document.querySelector('.score-buttons');
var initials = document.getElementById("initials")



// var nextButton = document.querySelector(".next")
// var timeAllotted = 60;
// var beginBtn = document.querySelector(".beginBtn")
// var endEl = document.querySelector(".end")
// var submitBtn = document.querySelector(".submitBtn")
// var finalPageEl = document.querySelector(".finalPage")
// var highscorePage = document.querySelector(".highScore")
// var playAgain = document.querySelector(".restart")
// var again = document.querySelector(".tryAgain")
// var timerInterval;
// var timer = function() {
//   time = time - 1;
//   timerEl.textContent = time;
//   if (time <0) {
//     endQuiz();
//   }
// }

// GLOBAL / TIMER

var timer = 60;
var timerNum = 0;
var score = 0;
var highScoreList = [];


// QUESTIONS
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
    question: "What's the difference between a <ul> and a <ol>?",
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













// var questionEl = document.querySelector(".main-quiz");
// var questionIndex = 0
// var time = questions.length * 10;


// function init() {
//     questionEl.classList.remove("hide")
//     introEl.classList.add("hide")
//     timerEl.classList.remove("hide")
//     timerInterval = setInterval(timer, 1000)
//     timerInterval.textContent = time;
//     launchQuestion()
// }

// var launchQuestion = function(){
//   nextButton.classList.add("hide")
//   feedbackEl.classList.add("hide")
//   var currentQuestion = questions[questionIndex]
//   var questionText = document.getElementById("question-container")
//   questionText.textContent = currentQuestion.question
//   answerEl.innerHTML = ""
  
//   currentQuestion.choices.forEach(function(choice) {
//     var choiceBtn = document.createElement("button")
//       choiceBtn.setAttribute("class", "choice")
//       choiceBtn.setAttribute("value", choice)
//       choiceBtn.textContent = choice
//       choiceBtn.addEventListener("click", analyzeAnswer)
//       answerEl.appendChild(choiceBtn)  
//   } )
// }

// function analyzeAnswer() {
//   feedbackEl.classList.remove("hide")
//   if (this.value === questions[questionIndex].answer) {
//     console.log("Right")
//     timeAllotted = timeAllotted + 10;
//     feedbackEl.textContent = "Right"
//   } else {
//     console.log("Wrong")
//     timeAllotted = timeAllotted - 15;
//     feedbackEl.textContent = "Wrong"
//   }
//   nextButton.classList.remove("hide")
//   nextButton.addEventListener("click", nextQuestion)
// }

// function nextQuestion(){
//   questionIndex = questionIndex + 1
//   if (questions[questionIndex] === undefined) {
//     endQuiz()
    
//   } else {
//     launchQuestion()
//   }
// }

// function endQuiz() {
//   questionEl.classList.add("hide")
//   endEl.classList.remove("hide")
//   clearInterval(timerInterval)
// }

// function viewScore() {
//   document.getElementById("log")
//   document.getElementById("final")
//   highscore = document.getElementById("highScore").innerHTML 
//   if (user !== "") {
//     window.alert("Must put in your Initials")
//     return;

//   }
//     let logScores = JSON.parse(localStorage.getItem("yourScores")) || [];
//     let numbers = {
//       userInitials: user, 
//       score: time} 
//     logScores.push(numbers)
//     console.log(logScores)
//         localStorage.setItem("yourScores", JSON.stringify(logScores))
//       logScores.forEach(function(numbers) {
//         var ulScores = document.createElement("li")
//         ulScores.textContent = numbers.userInitials + ": " + numbers.score
//         var logScore = document.getElementById("finalLog")
//         logScore.appendChild(ulScores)
//       })
//     setScore(logScores)
// };

// function setScore(logScores) {
//   for (var i = 0; i < logScores.length; i++) {
//       var ulScores = document.createElement("li")
//         ulScores.setAttribute('class', 'yourScores')
//         ulScores.textContent = logScores[i].Score
//         finalLog.appendChild(ulScores)
//       var ulInitials = document.createElement('li')
//         ulInitials.setAttribute('class', 'yourInitials')
//         ulInitials.textContent = logScores[i].Initials;
//         var logScore = document.getElementById("finalLog")
//         finalLog.appendChild(ulInitials)
//   }
// }

// function highscores() {
//   document.getElementById("final")
//   var getScore = JSON.parse(localStorage.getItem("yourScores"));
//     setScore(getScore)
//     console.log(getScore)
// };


// END OF QUIZ
var reload = function() {
  location.href = "https://emilyrh1058.github.io/code-quiz/"
}

var tryAgain = function() {
  location.href = "https://emilyrh1058.github.io/code-quiz/"
}


beginBtn.addEventListener("click", init)
submitBtn.addEventListener("click", endQuiz)
initials.addEventListener("click", viewScore)
highscorePage.addEventListener("click", highScore)
playAgain.addEventListener("click", reload)
again.addEventListener("click", reload) 
