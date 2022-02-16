var scoreTitle = document.getElementById("score-title");

var returnButton = document.getElementById("return-button");

var listUl = document.getElementById("score-list")

var li1 = document.getElementById("li1");

var li2 = document.getElementById("li2");

var li3 = document.getElementById("li3");

var li4 = document.getElementById("li4");

var highScore = [];

var score = localStorage.getItem("score");

highScore.push(score);

console.log(highScore);

for(var i = 0; i < highScore.length; i++){

}



scoreTitle.textContent = "High Scores";
scoreTitle.setAttribute("style", "text-align: center;");

returnButton.textContent = "Return";
returnButton.setAttribute("style", "height: 25px; width: 70px; border-radius: 10px; background-color: #b567e5;");
returnButton.addEventListener("click", function(){
    location.href = "./index.html";
});