var quesIndex;
var gameTimer;
var timeAllotted = 30; //seconds
var questionEl = document.getElementById("main-quiz");
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
    answers: [
      { ansId: "A", answer: "" },
      { ansId: "B", answer: "" },
      { ansId: "C", answer: "" },
      { ansId: "D", answer: "" },
    ],
    correct: "B",
    selected: null,
    reason: "explain",
  },
  {
    question: "question 3",
    answers: [
      { ansId: "A", answer: "" },
      { ansId: "B", answer: "" },
      { ansId: "C", answer: "" },
      { ansId: "D", answer: "" },
    ],
    correct: "C",
    selected: null,
    reason: "explain",
  },
  {
    question: "question 4",
    answers: [
      { ansId: "A", answer: "" },
      { ansId: "B", answer: "" },
      { ansId: "C", answer: "" },
      { ansId: "D", answer: "" },
    ],
    correct: "D",
    selected: null,
    reason: "explain",
  },
  {
    question: "question 5",
    answers: [
      { ansId: "A", answer: "" },
      { ansId: "B", answer: "" },
      { ansId: "C", answer: "" },
      { ansId: "D", answer: "" },
    ],
    correct: "A",
    selected: null,
    reason: "explain",
  },
];

for (var i = 0; i < questionBank.length; i++) {
  console.log(questionBank[i].question);
}

function launchQuestion() {

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
//   quesIndex = 0;
//   $("#question-container").html(questionBank[quesIndex].question);

//   var quesAnswers = questionBank[quesIndex].answers;

//   for (var i = 0; i < quesAnswers.length; i++) {
//     $("#answers-container").append(
//       '<div class="answer" data-content="' +
//         quesAnswers[i].ansID +
//         '">' +
//         quesAnswers[i].answer +
//         "</div>"
//     );
//   };

  // renderQuesControls();


document
  .getElementById("beginBtn")
  .addEventListener("click", init);
