// coding questions "What is the purpose of an API" "What does API stand for?" "Which of the following is NOT a type of variable" "Which of the following is the correct way to define a class in CSS"



// for questions in the length questions loop
// do the question function
// question function should give a question, and have a response within it


// first build a simple one that just has one question


var qaEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#questions");
var answerbox = document.getElementById("answers")
var startBtnEl = document.getElementById("starter")




// make objects 

const questions = [
    {
        title: "question1",
        question: "What is your name",
        answers: ["Sam",
        "Mark",
        "Todd",
        "Bailey"]
    }
]

//startQuiz(i);
// maybe a while loop within the for loop?
var current = 0;


// this should have an input that lets it know which one it is
var getqanda = function () {
        var q = "Penis"
        var answerlist = answerarray[i];
        startQuiz(q, answerlist)
}

var startQuiz = function(q,answerarray) {
    // there should be something here that gets rid of the start button
    startBtnEl.remove();
    createQuestionEl(q);
    createAnswersEl(answerarray);
    
    // maybe this is in a for loop, for i in range of question array?
}

//when start quiz is done, it should return to the top of the for loop... should start quiz have nextquestion built into it?

var createQuestionEl = function (q) {
    var newQEl = document.createElement("h1");
    newQEl.innerHTML = q;
    newQEl.className = "question"
    questionEl.appendChild(newQEl);
}

var createAnswersEl = function (answerarray) {
    for (i = 0; i < answerarray.length; i ++){
        var newAEl = document.createElement("button");
        newAEl.innerHTML = answerarray[i][0];
        newAEl.className = "answer-button"
        newAEl.setAttribute("data-tf",answerarray[i][1]);
        answerbox.appendChild(newAEl);
        newAEl.addEventListener("click",answerQuestion);

    }
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
    console.log("onto the next question!")

}


var answerQuestion = function(event) {
    var chosenbtn = event.target;
    var trueorfalse = chosenbtn.getAttribute("data-tf");
    // if the data-tf is true, then console log true, 
    if (trueorfalse == true) {
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

startBtnEl.addEventListener("click", getqanda);
