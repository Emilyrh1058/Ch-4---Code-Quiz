var quesIndex;
var gameTimer;
var timeAllotted = 30; //seconds

var questionBank = [
  {
    question: "question 1",
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

function populateQuestionDetails() {
  $("#answer-response").hide();

  $("#question-container").empty();
  $("#answers-container").empty();
  $("#answer-response").empty();
quesIndex = 0
  $("#question-container").html(questionBank[quesIndex].question);

  var quesAnswers = questionBank[quesIndex].answers;

  for (var i = 0; i < quesAnswers.length; i++) {
    $("#answers-container").append(
      '<div class="answer" data-content="' +
        quesAnswers[i].ansID +
        '">' +
        quesAnswers[i].answer +
        "</div>"
    );
  }

  // renderQuesControls();
}


document.getElementById("beginBtn").addEventListener("click", populateQuestionDetails);