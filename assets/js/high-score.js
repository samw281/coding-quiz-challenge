var scoreTitle = document.getElementById("score-title");

var returnButton = document.getElementById("return-button");

var clearButton = document.getElementById("clear-button");

var listUl = document.getElementById("score-list");

var li1 = document.getElementById("li1");

var li2 = document.getElementById("li2");

var li3 = document.getElementById("li3");

var li4 = document.getElementById("li4");

var highScore = [];

var score = localStorage.getItem("score");

highScore.push(score);

localStorage.setItem("score", highScore)

console.log(highScore);

for(var i = 0; i < highScore.length; i++){
    li1.textContent = highScore[0];
    li2.textContent = highScore[1];
    li3.textContent = highScore[2];
    li4.textContent = highScore[3];
};

var clearScore = function() {
    localStorage.clear();
}


scoreTitle.textContent = "High Scores";
scoreTitle.setAttribute("style", "text-align: center;");

listUl.setAttribute("style", "padding: 0 48%;");

returnButton.textContent = "Return";
returnButton.setAttribute("style", "height: 25px; width: 70px; border-radius: 10px; background-color: #b567e5;");
returnButton.addEventListener("click", function(){
    location.href = "./index.html";
});

clearButton.textContent = "Clear";
clearButton.setAttribute("style", "height: 25px; width: 70px; border-radius: 10px; background-color: #b567e5;");
clearButton.addEventListener("click", function(){
    clearScore();
    listUl.textContent = "";
});