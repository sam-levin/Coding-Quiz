// coding questions "What is the purpose of an API" "What does API stand for?" "Which of the following is NOT a type of variable" "Which of the following is the correct way to define a class in CSS"




var qaEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#questions");
var answerbox = document.getElementById("answers");
var startBtnEl = document.getElementById("starter");
var highscorebuttonEl = document.getElementById("high-score");
var highscoreEl = document.querySelector(".highscore-box");
var containerEl = document.querySelector(".holder")
var scoreboard = []
var timelimit = 200;
var initialtime = timelimit;







// make objects 
const questions = [
    {
        title: "question1",
        question: "What is the purpose of an API",
        answers: ["To store all the data of a webpage",
        "To act as an intermediary between the user and script that allows the user to interact with the webpage",
        "To act as an independent AI that acts before the user does, therefore optimizing the webpage",
        "To style the webpage using classes"],
        correctanswer: "To act as an intermediary between the user and script that allows the user to interact with the webpage"
    },
    {
        title: "question2",
        question: "Which of the following is the correct way to define a class with the name 'classname' in CSS",
        answers: ["#classname",
        "%classname",
        ".classname",
        "(classname)"],
        correctanswer: ".classname"
    },
    {
        title: "question3",
        question: "To store something into the local storage, it must first be turned into a _____",
        answers: ["String",
        "Element",
        "Javascript",
        "Array"],
        correctanswer: "String"
    },
    {
        title: "question4",
        question: "What is JS short for",
        answers: ["Jello Shots",
        "Just Screens",
        "Java Script",
        "Jam Shingles"],
        correctanswer: "Java Script"
    },
    {
        title: "question5",
        question: "Which of the following is a type of loop",
        answers: ["For",
        "Else If",
        "If",
        "Else"],
        correctanswer: "For"
    } 
    

];

var questionnum = 0;

var countdown = function () {
    var subtract = function (){
        if (initialtime > 0 && questionnum < questions.length){
            initialtime --; 
            var timerel = document.querySelector(".timerholder"); 
            var newtimer = document.createElement("h3");
            timerel.textContent = "Time Remaining: " + initialtime;
            timerel.appendChild(newtimer); 
        } else if (questionnum >= questions.length){
            clearInterval(timer);
        } else {
            clearInterval(timer)
            gethighscore();
        }
    }
    var timer = setInterval(subtract, 1000);
    
}




// this should have an input that lets it know which one it is
var getqanda = function (currentq) {
    if (initialtime == timelimit) {
        countdown();}
    startBtnEl.remove();
    let currentquestion = questions[currentq];
    var q = currentquestion.question;
    var answerlist = currentquestion.answers;
            
    window.currentQuestionEl = createQuestionEl(q);
    questionEl.appendChild(window.currentQuestionEl);

    createAnswersEl(answerlist);
    
    
}
    



var createQuestionEl = function (q) {
    var newQEl = document.createElement("h1");
    newQEl.innerHTML = q;
    newQEl.className = "question"
    return newQEl
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



var deleteQnA = function() {
    var qtodelete = document.querySelector(".question");
    qtodelete.remove();
    var atodelete = document.querySelectorAll(".answer-button");
    for (i = 0; i < atodelete.length; i ++) {
        var individualanswer = atodelete.item(i);
        individualanswer.remove();
    }

}
//functions needed 
// Need an input for initials
// Need something to sort high scores by number 
// Change questions to actual coding questions


var save = function (initials){
    var loadscoreboard = function() {
        var scoreboard = localStorage.getItem("scoreboard");
        if (!scoreboard) {
            newscoreboard = [];
        } else {
            newscoreboard = JSON.parse(scoreboard);
        }
    }
    var createhstext = function (){
        var hstext = document.createElement("h3");
        hstext.textContent = "High Scores:";
        hstext.className = "highscore-text"
        highscoreEl.appendChild(hstext);
    }
    createhstext();
    scoreandname = [];
    scoreandname.push(initials);
    scoreandname.push(initialtime);
    loadscoreboard();
    newscoreboard.push(scoreandname) // this needs to be combined with initials so that it pushes an array of [SL, 185] to the highscore array
    for (i = 0; i < newscoreboard.length; i++) {
        var score = newscoreboard[i];
        var scoreEl = document.createElement("h3");
        scoreEl.innerHTML = score;
        highscoreEl.appendChild(scoreEl);
    }
    localStorage.setItem("scoreboard",JSON.stringify(newscoreboard))

    
}



var gethighscore = function() {
    var timer = document.querySelector(".timerholder")
    timer.remove();
    
    
    var initialsprompt = document.createElement("h2")
    initialsprompt.textContent = ("All done! Input your initials here to be added to the leaderboard")
    containerEl.appendChild(initialsprompt);

    // this creates a form called initials form and adds it to the container el
    var initialsform = document.createElement("form");
    containerEl.appendChild(initialsform);
    
    var initialsEl = document.createElement("input")
    initialsEl.setAttribute("type", "text");
    initialsEl.className = "initials"
    initialsform.appendChild(initialsEl);

    var initialsbtn = document.createElement("input");
    initialsbtn.innerHTML = ("Submit")
    initialsbtn.id = ("submitbtn")
    initialsbtn.setAttribute("type", "submit");
    initialsform.appendChild(initialsbtn);

    var initialformhandler = function(event) {
        event.preventDefault();
        initialsprompt.remove();
        var initialsInput = initialsEl.value;
        save(initialsInput);
        initialsform.remove();
    }
    initialsform.addEventListener("submit", initialformhandler);



}

var answerQuestion = function(event) {
    var chosenbtn = event.target;
    // define the right answer as questions[questionnum].
    let rightanswer = questions[questionnum].correctanswer;
    let answerchosen = chosenbtn.textContent;
    if (rightanswer == answerchosen) {
        deleteQnA();
        questionnum ++;
        if (questionnum >= questions.length) {
            gethighscore();
            countdown();
        } else {
            getqanda(questionnum);
        }
    } else {
        initialtime = initialtime - 10;
        deleteQnA();
        questionnum ++;
        if (questionnum >= questions.length) {
            gethighscore();
            countdown();
        } else {
            getqanda(questionnum);
        }
    }
}



startBtnEl.addEventListener("click", function() {getqanda(questionnum)});
