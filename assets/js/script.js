// coding questions "What is the purpose of an API" "What does API stand for?" "Which of the following is NOT a type of variable" "Which of the following is the correct way to define a class in CSS"



// for questions in the length questions loop
// do the question function
// question function should give a question, and have a response within it


// first build a simple one that just has one question


var qaEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#questions");
var answerbox = document.getElementById("answers");
var startBtnEl = document.getElementById("starter");



// make objects 
const questions = [
    {
        title: "question1",
        question: "What is your name?",
        answers: ["Sam",
        "Mark",
        "Todd",
        "Bailey"],
        correctanswer: "Sam"
    },
    {
        title: "question2",
        question: "What is your age",
        answers: [20,
        30,
        40,
        22],
        correctanswer: 22
    },
    {
        title: "question3",
        question: "Penis?",
        answers: ["Sam",
        "Mark",
        "Todd",
        "Bailey"],
        correctanswer: "Sam"
    }

];

//startQuiz(i);
var questionnum = 0;



// this should have an input that lets it know which one it is
var getqanda = function (currentq) {
    startBtnEl.remove();
    let currentquestion = questions[currentq];
    var q = currentquestion.question;
    var answerlist = currentquestion.answers;
            
    startQuiz(q, answerlist)
    
    
       
}

var startQuiz = function(q,answerarray) {
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
        newAEl.innerHTML = answerarray[i];
        newAEl.className = "answer-button"
        //newAEl.setAttribute("data-tf",answerarray[i][1]);
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

}

var gethighscore = function() {
    console.log("get high score function ran successfully")
}

var answerQuestion = function(event) {
    var chosenbtn = event.target;
    // define the right answer as questions[questionnum].
    let rightanswer = questions[questionnum].correctanswer;
    let answerchosen = chosenbtn.textContent;
    if (rightanswer == answerchosen) {
        console.log("True!")
        deleteQnA();
        questionnum ++;
        if (questionnum >= questions.length) {
            gethighscore();
        } else {
            getqanda(questionnum);
        }
    } else {
        console.log("false :(")
        deleteQnA();
        questionnum ++;
        if (questionnum >= questions.length) {
            gethighscore();
        } else {
            getqanda(questionnum);
        }
    }
}

startBtnEl.addEventListener("click", function() {getqanda(questionnum)});