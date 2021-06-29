// DOM
var timerEl = document.getElementById('#timer');
var highscoreEl = document.getElementById('#show-high-score');
var introEl = document.getElementById('#intro-content');
var beginQuizEl = document.getElementById('#begin-quiz');
var answerEl = document.getElementById("#answers");
var responseEl = document.querySelector(".feedback");
var scoreEl = document.getElementById('#your-score');
var highScoreEl = document.getElementById('#high-scores');
var scoreBtns = document.querySelector('.score-buttons');
var initials = document.getElementById("initials")

// TIMER
var timer = 60;
var timerNum = 0;
var score = 0;
var highScoreList = [];


// QUESTIONS
var questions = [
  {
    question: "What does HTML stand for?",
    choice1: "HyperText Markup Language",
    choice2: "HyperText Markup Locator",
    choice3: "HyperText Masking Line",          
    choice4: "HateThis Must Leave",          
    answer: "choice1"
  },
  {
    question: "To style a webpage, what language would you use?",
    choice1: "HTML", 
    choice2: "CSS",
    choice3: "Spanish",
    choice4: "Google",
    answer: "choice2"
  },
  {
    question: "What's the difference between a <ul> and a <ol>?",
    choice1: "underline vs overline",
    choice2: "undefined link vs onclick link",
    choice3: "unordered list vs ordered list",
    choice4: "universal language vs older language",
    answer: "choice3"
  },
  {
    question: "Where should you place the link to the Javascript file?",
    choice1: "In the title",
    choice2: "In the footer",
    choice3: "At the top of the body section",
    choice4: "At the bottom of the body section",
    answer: "choice4",
  },
  {
    question: "In Javascript, what doesn't var stand for?",
    choice1: "Variable",
    choice2: "Vertical",
    choice3: "Vacation",
    choice4: "Vaccinate",
    answer: "choice1",
  },
];

// INTRO PAGE
var introPage = function() {
  timer = 60;
  timerEl.innerHTML = "<p> Time Remaining: " + timer + "</p>"
  highScoreEl.innerHTML = '<p>VIEW HIGH SCORES</p>';

  var createTitle = document.createElement('h1');
    createTitle.id = "welcome-title";
    createTitle.textContent = "Welcome to Code Quiz";
    introEl.appendChild(createTitle);

  var welcomeText = document.createElement("p");
    welcomeText.id = "welcome-content";
    welcomeText.textContent = "You will have 60 seconds to answer 5 simple code questions. Every incorrect answer will result in a 10 second deduction. Your final score is determined by the remaining time."
    beginQuizEl.appendChild(welcomeText);

  var startQuizBtn = document.createElement('button');
    startQuizBtn.className = "begin-button";
    startQuizBtn.textContent = "Begin Quiz";
    beginQuizEl.appendChild(startQuizBtn);
};

// BEGINNING THE QUIZ / VIEWING QUESTIONS
var beginQuiz = function() {
  clearPages();
  questionsEl = document.createElement('h2');
  questionsEl.id = "questions";
  introEl.appendChild(questionsEl);
    choice1 = document.createElement("button");
    choice1.className = "choice-btn";
    choice1.id = "c1";
    answerEl.appendChild(choice1);

    choice2 = document.createElement("button");
    choice2.className = "choice-btn";
    choice2.id = "c2";
    answerEl.appendChild(choice2);

    choice3 = document.createElement("button");
    choice3.className = "choice-btn";
    choice3.id = "c3";
    answerEl.appendChild(choice3);

    choice4 = document.createElement("button");
    choice4.className = "choice-btn";
    choice4.id = "c4";
    answerEl.appendChild(choice4);

  timerNum = 0;
  showQuestion(timerNum);
};

var showQuestion = function() {
  questionsEl.textContent = questions[i].question;
  choice1.textContent = questions[i].choice1;
  choice2.textContent = questions[i].choice2;
  choice3.textContent = questions[i].choice3;
  choice4.textContent = questions[i].choice4;
};

var answerList = function(event) {
  if (timer > 0) {
    if (event.target.matches(".choice-btn")) {
      var answerId = event.target.id;
        feedbackEl = document.createElement("p");
        feedbackEl.id = "feedback";
        if (answerId === questions[timerNum].ca) {
          feedbackEl.textContent = "Correct";
        } else {
          feedbackEl.textContent = "Wrong";
          timer -=10;
        }
        setTimeout(() => {
          feedbackEl.remove();
        }, 500);
        timerNum++;
        if (timerNum >= questions.length) {
          return endQuiz();
        }
        showQuestion(timerNum);
    }
  }
};

// END QUIZ
var endQuiz = function() {
  score = timer;
  if (score < 0) {
    score = 0;
  }

  choice1.remove();
  choice2.remove();
  choice3.remove();
  choice4.remove();

  questionsEl.textContent = "FINISHED!"
  scoreEl.innerHTML = 
  `<p> Your final score is " + score + "</p>
    <div class='initials-form' id='initials-input'>
      <p>Enter initials here:</p>
      <input 
        type='text' 
        name='initials' 
        id='initials' 
        placeholder='Your initials'
      />
    <button class='submit-btn'>SUBMIT</button>`;
};

// SCORES
var getScore = function(event) {
  event.preventDefault();

  var yourInitials = document.querySelector("input[name='initials']").value;
    if (!yourInitials) {
      alert("Your initials are required to continue.")
      return false;
    }

  var savedScores = localStorage.getItem("quizScores");

  var scoreData = {
    name: yourInitials,
    score: score
  }

  if (!savedScores) {
    highScoreList.push(scoreData);
    savedScores();
    clearPages();
    return viewHighScores();
  } else {
    highScoreList = JSON.parse(savedScores);
    if (highScoreList.length < 1) {
      highScoreList.push(scoreData);
      savedScores();
      clearPages();
      return viewHighScores();
    }

    for (i = 0; i < highScoreList.length; i++) {
      if (highScoreList[i].score < scoreData.score) {
        highScoreList.splice(i, 0, scoreData);
        highScoreList = highScoreList.slice(0.5);
        savedScores();
        break;
      } else if (i === (highScoreList.length - 1)) {
          highScoreList.push(scoreData);
          highScoreList = highScoreList.slice(0,5);
          savedScores();
          break;
      }
    }
  }
  clearPages();
  viewHighScores();
};

var saveScores = function() {
  localStorage.setItem("quizScores", JSON.stringify(highScoreList));

};

var clearPages = function() {
  highscoreEl.innerHTML = "";
  responseEl.innerHTML = "";
  beginQuizEl.innerHTML = "";
  answerEl.innerHTML = "";
  scoreEl.innerHTML = "";
  introEl.innerHTML = "";
  scoreBtns.innerHTML = "";
  return false;
};

var viewHighScores = function() {
  highScoreEl.innerHTML = "";
  timerEl.innerHTML = "";

  var savedHighScores = localStorage.getItem("quizScores");
    highScoreList = JSON.parse(savedHighScores);
    questionsEl = document.createElement("h2");
    questionsEl.id = "question";
    questionsEl.textContent = "HIGH SCORES";
    introEl.appendChild(questionsEl);

    for (i = 0; i < highScoreList.length; i++) {
      var scoresEl = document.createElement("h3");
      scoresEl.textContent = (i+1) + ". " + highScoreList[i].name + " - " + highScoreList[i].score;
      highScoreEl.appendChild(scoresEl);
    }

    scoreBtns.innerHTML = 
      `<button type = 'button'
        class = 'score-button'
        id = 'back'>GO BACK</button>
      <button type ='button'
        class = 'score-buttons'
        id = 'clear'>CLEAR</button>`;
};

var chooseBtn = function(event) {
  if (event.target.matches("#clear")) {
    highScoreList = [];
    saveScores();
    clearPages();
    viewHighScores();
  }
};

var scoresLink = function() {
  if (timer === 60) {
    clearPages();
    viewHighScores();
  } else if (timerNum >= questions.length) {
      alert("Please enter initials to view high scores!");
      return false;
  } else {
    return false;
  }
};

var verifyClick = function(event) {
  if (event.target.matches(".begin-button")) {
    startTimer();
    startQuiz();
  } else {
    return false;
  }
};

var startTimer = function() {
  var time = setInterval(function() {
    if (timer <= 0) {
      clearInterval(time);
      timer = 0;
      timerEl.innerHTML = "<p>TIME: " + timer + "</p>";
      endQuiz();
    }
    if (timerNum >= questions.length) {
      clearInterval(time);
    }
    if ((timerNum < questions.length) && (timer > 0)) {
      timer -=1;
    }
    timerEl.innerHTML = "<p>TIME: " + timer + "</p>";
  }, 1000);
};

// EVENT LISTENERS

highscoreEl.addEventListener("click", scoresLink);
scoreBtns.addEventListener("click", chooseBtn)
scoreEl.addEventListener("submit", getScore);
answersEl.addEventListener("click", answerList);
beginQuizEl.addEventListener("click", verifyClick);

initialScreen();

