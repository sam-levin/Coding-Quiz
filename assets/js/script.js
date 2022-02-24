// coding questions "What is the purpose of an API" "What does API stand for?" "Which of the following is NOT a type of variable" "Which of the following is the correct way to define a class in CSS"



// for questions in the length questions loop
// do the question function
// question function should give a question, and have a response within it


// first build a simple one that just has one question


var qaEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#questions");
var answerbox = document.getElementById("answers")
var startBtnEl = document.getElementById("start-btn")

var questionArray = [2,3];
// set q = question array[i][0], set answerarray to questionarray[i][1] 


var q1 = "What is your name?"
var a1Array = [["Sam","true"],["Chris","false"],["Bailey","false"],["John","false"]]


var q2 = "What is JS short for?"
var a2Array = [["JustSoup","false"],["JeanShorts","false"],["JelloShots","false"],["JavaScript","true"]];

var appendtoarray = function (question, answer) {
    let QAArray = [];
    QAArray.push(question);
    QAArray.push(answer); 
    questionArray.push(QAArray)   
    console.log(QAArray)  
} 


// in this case, "Sam" is the correct answer, 
// how do we determine if an answer is the correct one
// will it be within the array itself? ex. [["answer A", true],["answer b", false]]
// or should it be a separate array







var createQuestionEl = function (index) {
    var newQEl = document.createElement("h1");
    newQEl.innerHTML = q1;
    newQEl.className = "question"
    questionEl.appendChild(newQEl);
}

var createAnswersEl = function (index) {
    for (i = 0; i < a1Array.length; i ++){
        var newAEl = document.createElement("button");
        newAEl.innerHTML = a1Array[i][0];
        newAEl.className = "answer-button"
        newAEl.setAttribute("data-tf",a1Array[i][1]);
        answerbox.appendChild(newAEl);
        newAEl.addEventListener("click",answerQuestion);

    }
}

var startQuiz = function() {
    // there should be something here that gets rid of the start button
    
    for (i = 0; i < questionArray.length; i++) {
        createQuestionEl(questionArray[0][i]);
        createAnswersEl(questionArray[1][i]);
    
    }
    // maybe this is in a for loop, for i in range of question array?
}

//var nextquestion = function(){

    // we shouldn't need this as it can be in a for loop
//}


var deleteQnA = function() {
    var qtodelete = document.querySelector(".question");
    qtodelete.remove();
    var atodelete = document.querySelectorAll(".answer-button");
    for (i = 0; i < atodelete.length; i ++) {
        var individualanswer = atodelete.item(i);
        individualanswer.remove();
    }
}


var answerQuestion = function(event) {
    var chosenbtn = event.target;
    var trueorfalse = chosenbtn.getAttribute("data-tf");
    // if the data-tf is true, then console log true, 
    if (trueorfalse === "true") {
        console.log("True!")
        deleteQnA();

        // on true, it should go to the next question
        // nextquestion();
    } else {
        console.log("false :(")
        deleteQnA();
        // on false, it should subtract time
    }
}

startBtnEl.addEventListener("click", startQuiz);
