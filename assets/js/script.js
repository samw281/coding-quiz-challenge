var button1El = document.getElementById("answer1");
var button2El = document.getElementById("answer2");
var button3El = document.getElementById("answer3");
var button4El = document.getElementById("answer4");
var startSectionEl = document.getElementById("start-section");
var questionEl = document.getElementById("question-text");
var startTitleEl = document.getElementById("start-title");
var startTextEl = document.getElementById("start-text");
var startButtonEl = document.getElementById("start-button");
var doneH2El = document.getElementById("done");
var finalScore = document.getElementById("final-score");
var correctWrong = document.getElementById("correct-wrong");
var enterInitials = document.getElementById("enter-initials");
var saveBtn = document.getElementById("save-btn");

var timerEl = document.getElementById("counter");

function counter() {
  timeLeft = 75;

  timeInterval = setInterval(function () {
    1;
    if (timeLeft > 1) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      allDone();
    }
  }, 1000);
}

var startQuiz = function () {
  startTitleEl.textContent = "Coding Quiz Challenge";
  startTextEl.textContent =
    "Try to answer the following code-related questions within the time limit. Keep in mind that inncorrect answers will penalize your score/time by ten seconds!";
  startButtonEl.textContent = "Start Quiz";
  startButtonEl.setAttribute("style", "color: white; ");
  button1El.setAttribute("style", "display: none;");
  button2El.setAttribute("style", "display: none;");
  button3El.setAttribute("style", "display: none;");
  button4El.setAttribute("style", "display: none;");
  enterInitials.setAttribute("style", "display: none;");
  saveBtn.setAttribute("style", "display: none;")
};

startButtonEl.addEventListener("click", function () {
  question_1();
  startTitleEl.setAttribute("style", "display: none");
  startTextEl.setAttribute("style", "display: none;");
  startButtonEl.setAttribute("style", "display: none;");
});

var question_1 = function () {
  counter();
  button1El.textContent = "1. Strings";
  button2El.textContent = "2. Booleans";
  button3El.textContent = "3. Alerts";
  button4El.textContent = "4. Numbers";
  questionEl.textContent = "Commonly used data types do not include:";
  button1El.setAttribute("style", "color: white; padding: 10px 60px;");
  button2El.setAttribute("style", "color: white; padding: 10px 60px;");
  button3El.setAttribute("style", "color: white; padding: 10px 60px;");
  button4El.setAttribute("style", "color: white; padding: 10px 60px;");

  button1El.addEventListener("click", function () {
    timeLeft = timeLeft - 10;
    question_2();
    correctWrong.textContent = "Wrong!";
  });

  button2El.addEventListener("click", function () {
    timeLeft = timeLeft - 10;
    question_2();
    correctWrong.textContent = "Wrong!";
  });

  button3El.addEventListener("click", function () {
    question_2();
    correctWrong.textContent = "Correct!";
  });

  button4El.addEventListener("click", function () {
    timeLeft = timeLeft - 10;
    question_2();
    correctWrong.textContent = "Wrong!";
  });
};

var question_2 = function () {
  button1El.textContent = "1. Quotes";
  button2El.textContent = "2. Curly Brackets";
  button3El.textContent = "3. Parenthesis";
  button4El.textContent = "4. Square Brackets";
  questionEl.textContent =
    "The condition in an if/else if statement is enclosed with_____.";
  button1El.setAttribute("style", "color: white; padding: 10px 60px;");
  button2El.setAttribute("style", "color: white; padding: 10px 40px;");
  button3El.setAttribute("style", "color: white; padding: 10px 50px;");
  button4El.setAttribute("style", "color: white; padding: 10px 35px;");

  button1El.addEventListener("click", function () {
    question_3();
    correctWrong.textContent = "Wrong!";
  });

  button2El.addEventListener("click", function () {
    question_3();
    correctWrong.textContent = "Wrong!";
  });

  button3El.addEventListener("click", function () {
    question_3();
    correctWrong.textContent = "Correct!";
  });

  button4El.addEventListener("click", function () {
    question_3();
    correctWrong.textContent = "Wrong!";
  });
};

var question_3 = function () {
  button1El.textContent = "1. Numbers and Strings";
  button2El.textContent = "2. Other Arrays";
  button3El.textContent = "3. Booleans";
  button4El.textContent = "4. All of the Above";
  questionEl.textContent = "Arrays in JavaScript can be used to store_____.";
  button1El.setAttribute("style", "color: white; padding: 10px 25px;");
  button2El.setAttribute("style", "color: white; padding: 10px 50px;");
  button3El.setAttribute("style", "color: white; padding: 10px 60px;");
  button4El.setAttribute("style", "color: white; padding: 10px 40px;");

  button1El.addEventListener("click", function () {
    question_4();
    correctWrong.textContent = "Wrong!";
  });
  button2El.addEventListener("click", function () {
    question_4();
    correctWrong.textContent = "Wrong!";
  });
  button3El.addEventListener("click", function () {
    timeLeft = timeLeft - 10;
    correctWrong.textContent = "Wrong!";
    question_4();
  });
  button4El.addEventListener("click", function () {
    timeLeft = timeLeft + 10;
    question_4();
    correctWrong.textContent = "Correct!";
  });
 
};

var question_4 = function () {
  button1El.textContent = "1. Commas";
  button2El.textContent = "2. Curly Brackets";
  button3El.textContent = "3. Quotes";
  button4El.textContent = "4. Parenthesis";
  questionEl.textContent =
    "String values must be enclosed within_____when being assigined to variables.";
  button1El.setAttribute("style", "color: white; padding: 10px 60px;");
  button2El.setAttribute("style", "color: white; padding: 10px 40px;");
  button3El.setAttribute("style", "color: white; padding: 10px 60px;");
  button4El.setAttribute("style", "color: white; padding: 10px 50px;");

  button1El.addEventListener("click", function () {
    question_5();
    correctWrong.textContent = "Wrong!";
  });
  button2El.addEventListener("click", function () {
    question_5();
    correctWrong.textContent = "Wrong!";
  });
  button3El.addEventListener("click", function () {
    timeLeft = timeLeft + 30;
    question_5();
    correctWrong.textContent = "Correct!";
  });
  button4El.addEventListener("click", function () {
    timeLeft = timeLeft - 30;
    question_5();
    correctWrong.textContent = "Wrong!";
  });
};

var question_5 = function () {
  button1El.textContent = "1. JavaScript";
  button2El.textContent = "2. Terminal/Bash";
  button3El.textContent = "3. For Loops";
  button4El.textContent = "4. console.log";
  questionEl.textContent =
    "A very useful tool used during development and debugging for printing content to debugger is:";
  button1El.setAttribute("style", "color: white; padding: 10px 50px;");
  button2El.setAttribute("style", "color: white; padding: 10px 40px;");
  button3El.setAttribute("style", "color: white; padding: 10px 50px;");
  button4El.setAttribute("style", "color: white; padding: 10px 35px;");

  button1El.addEventListener("click", function () {
    timeLeft = timeLeft;
    allDone();
    correctWrong.textContent = "Wrong!";
  });
  button2El.addEventListener("click", function () {
    timeLeft = timeLeft ;
    allDone();
    correctWrong.textContent = "Wrong!";
  });
  button3El.addEventListener("click", function () {
    timeLeft = timeLeft - 70;
    allDone();
    correctWrong.textContent = "Wrong!";
  });
  button4El.addEventListener("click", function () {
    timeLeft = timeLeft + 70;
    allDone();
    correctWrong.textContent = "Correct!";
  })
};

var allDone = function () {
  questionEl.setAttribute("style", "display: none;");
  button1El.setAttribute("style", "display: none;");
  button2El.setAttribute("style", "display: none;");
  button3El.setAttribute("style", "display: none;");
  button4El.setAttribute("style", "display: none;");
  enterInitials.setAttribute("style", "display: inline;");
  doneH2El.textContent = "All Done";
  saveBtn.textContent = "save";
  saveBtn.setAttribute("style", "height: 25px; width: 50px; border-radius: 10px; background-color: #b567e5;")
  if (timeLeft > 0) {
    finalScore.textContent = "Your final score is " + timeLeft;
  } else {
    finalScore.textContent = "Your final score is 0";
  }
  clearInterval(timeInterval);
  timerEl.textContent = "";

};

saveBtn.addEventListener("click", function(event){
  event.preventDefault();  
  var score = [];
  score.push(enterInitials.value + ' ' + timeLeft);
  JSON.stringify(score)
  console.log(score)
 localStorage.setItem("score", score)
 location.href = "./highscore.html";
});

startQuiz();
