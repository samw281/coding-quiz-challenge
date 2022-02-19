// create variables for html elements

var scoreTitle = document.getElementById("score-title");

var returnButton = document.getElementById("return-button");

var clearButton = document.getElementById("clear-button");

var listUl = document.getElementById("score-list");

var highScore = JSON.parse(window.localStorage.getItem("highScore")) || [];

// for loop to loop through highScore array, create an li for each item in array and, display array item as li text content  
for(var i = 0; i < highScore.length; i++){
    var liEl = document.createElement("li")
    liEl.textContent = highScore[i]
    listUl.appendChild(liEl)
}

// function to clear local storage
var clearScore = function() {
    localStorage.clear();
};

// text and style for score page title
scoreTitle.textContent = "High Scores";
scoreTitle.setAttribute("style", "text-align: center;");

// styles for score list
listUl.setAttribute("style", "width: 100%; height: 100%; padding: 0 48%;");

// button to navigate back to the start page
returnButton.textContent = "Return";
returnButton.setAttribute("style", "height: 25px; width: 70px; border-radius: 10px; background-color: #b567e5;");
returnButton.addEventListener("click", function(){
    location.href = "./index.html";
});

// button to call function that clears local storage
clearButton.textContent = "Clear";
clearButton.setAttribute("style", "height: 25px; width: 70px; border-radius: 10px; background-color: #b567e5;");
clearButton.addEventListener("click", function(){
    clearScore();
    listUl.textContent = "";
});