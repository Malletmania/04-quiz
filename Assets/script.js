// TODO make variables for one quiz question about apples and give options
// localStorage.setItem("studentGrade", JSON.stringify(myQuestions));
// renderMessage();
// add a check answer function
// TODO event deligation


var timeEl = document.querySelector(".time");

var secondsLeft = 3;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till game over";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }


const myQuestions = [
    { 
        question: "what does Regina George say to Cady Heron when they want to go to the mall?",
        answers: {
        a: "red heads ride in the back",
        b: "get in loser we're going shopping",
        c: "It's not my fault you're, like, in love with me or something!",
        d: "You can't sit with us!"
    }
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

setTime();