var scoreTitle = document.getElementById("score-title");
var returnButton = document.getElementById("return-button");

scoreTitle.textContent = "High Scores";
scoreTitle.setAttribute("style", "text-align: center;");

returnButton.textContent = "Return";
returnButton.setAttribute("style", "height: 25px; width: 70px; border-radius: 10px; background-color: #b567e5;");

returnButton.addEventListener("click", function(){
    location.href = "https://samw281.github.io/coding-quiz-challenge/";
});