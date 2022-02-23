// coding questions "What is the purpose of an API" "What does API stand for?" "Which of the following is NOT a type of variable" "Which of the following is the correct way to define a class in CSS"



// for questions in the length questions loop
// do the question function
// question function should give a question, and have a response within it


// first build a simple one that just has one question


var qaEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerbox = document.getElementById("answers")
var startBtnEl = document.getElementById("start-btn")


var q1 = "What is your name"
var a1Array = [["Sam",true],["Chris",false],["Bailey",false],["John",false]]


// in this case, "Sam" is the correct answer, 
// how do we determine if an answer is the correct one
// will it be within the array itself? ex. [["answer A", true],["answer b", false]]
// or should it be a separate array







var createQuestionEl = function () {
    var newQEl = document.createElement("h1");
    newQEl.innerHTML = q1;
    questionEl.appendChild(newQEl);
}

var createAnswersEl = function () {
    for (i = 0; i < a1Array.length; i ++){
        var newAEl = document.createElement("button");
        newAEl.innerHTML = a1Array[i][0];
        newAEl.setAttribute("data-tf",a1Array[i][1]);
        answerbox.appendChild(newAEl);
        newAEl.addEventListener("click",answerQuestion);

    }
}

var startQuiz = function() {
    createQuestionEl();
    createAnswersEl();
}

var answerQuestion = function(event) {
    var chosenbtn = event.target;
    var trueorfalse = chosenbtn.getAttribute("data-tf");
    // if the data-tf is true, then console log true, 
    if (trueorfalse = true) {
        console.log("penis");
    } else {
        console.log("butthole")
    }
}

startBtnEl.addEventListener("click",startQuiz);
