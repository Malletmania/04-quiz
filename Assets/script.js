//selectors
var startGame = document.getElementById("start-game");
var timerLocation = document.getElementById("timer");
var scoreBoard = document.getElementById("score-board");
var winsLocation = document.getElementById("wins-location");
var lossesLocation = document.getElementById("losses-location")
var secondsLeft = 10;
//global variables
var containerOfQuestions = [
    { 
        question: "what does Regina George say to Cady Heron when they want to go to the mall?",
        answers: {
        a: "red heads ride in the back",
        b: "get in loser we're going shopping",
        c: "It's not my fault you're, like, in love with me or something!",
        d: "You can't sit with us!"
        },
        correctAnswer: "b"
    }
    ,{
        question: "What color is an apple?",
        answers: {
            a: "Blue",
            b: "Brown",
            c: "Green",
            d: "Red"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the largest fresh body of water in the world?",
        answers: {
            a: "Lake Baikal",
            b: "Lake Superior",
            c: "Lake Tanganyika"
        },
        correctAnswer: "a"
    },
    {
        question: "What molecule structure below in the abbreviation for water?",
        answers: {
            a: "H20", //water
            b: "C8H10N4O2", //caffine 
            c: "HC9H7O4", //asprin
            d: "H2O2" //Hydrogen peroxide 
        },
        correctAnswer: "a"
    }
];

var wordIndex = 0;
var currentQuestionArr = [];  
var displayQuestionArr = [];

//functions
function begin(){
    displayQuestion();
    setTime();
};

function setTime() {

    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till game over";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  };


function checkQuestion(event){
    var pressedKey = event.key;
    for (var i = 0; i < containerOfQuestions; i++) {
      if (pressedKey == randomWord[i]) {
        console.log(document.querySelector("#" + CSS.escape(i)));
        document.querySelector("#" + CSS.escape(i)).textContent = pressedKey;
        correctLetters++;
      }
    }
    if (correctLetters === wordLength) {
      endGame();
    }
  };


//event listener

startGame.addEventListener("click", begin);