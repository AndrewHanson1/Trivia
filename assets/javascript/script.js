var gameQuestions = {
    "What is the largest planet in our Solar System?": ["Jupiter", "Pluto", "Saturn", "Earth"],
    "How many planets are there in the Solar System?": ["8", "12", "9", "7"],
    "What is the smallest planet in the Solar System?": ["Mars", "Pluto", "Mercury", "Earth"],
    "What is the hottest planet in the Solar System?": ["Mars", "Jupiter", "Earth", "Venus"],
    "What planet in the solar system is farthest from the Sun?": ["Mars", "Neptune", "Jupiter", "Uranus"],
    "Phobos and Deimos are moons of what planet?": ["Neptune", "Mars", "Uranus", "Jupiter"],


}

var gameAnswerKey = {
    "What is the largest planet in our Solar System?": "Jupiter",
    "How many planets are there in the Solar System?": "8",
    "What is the smallest planet in the Solar System?": "Mercury",
    "What is the hottest planet in the Solar System?": "Venus",
    "What planet in the solar system is farthest from the Sun?": "Neptune",
    "Phobos and Deimos are moons of what planet?": "Mars",
}

var wins = 0;
var losses = 0;
var timeOuts = 0;
var timer = 20;


//on page load randomly grab a question and its answers from the object gameQuestions and display it on dom

function randomQuestion(obj) {
    var keys = Object.keys(obj)
    var num = Math.floor(Math.random() * keys.length)
    var answers = obj[keys[num]];
    var question = keys[num];
    timer = 20;
    $(".question").text(question);
    $(".answers").empty();
    for (i = 0; i < answers.length; i++) {
        var listItem = $("<li>").text(answers[i]);
        listItem.attr("class", "answer");
        $(".answers").append(listItem);



    }
    //set timer
    var timerCount = setInterval(function () {
        $(".timer").text("Time Left: " + timer + " Seconds");
        timer--;

        if (timer == -1) {
            clearInterval(timerCount);
            randomQuestion(gameQuestions);
        }





    }, 1000);
    //give the answers clickability 
    $("li").click(function () {
        console.log(num);
        //decide one answer as the "correct"
        switch (num) {
            case 0:
                if (this.innerText == "Jupiter") {
                    alert("correct");
                    randomQuestion(gameQuestions);
                }
                else {
                    alert("wrong");
                    randomQuestion(gameQuestions);

                }
                break;
            case 1:
                if (this.innerText == "8") {
                    alert("correct");
                    randomQuestion(gameQuestions);
                }
                else {
                    alert("wrong");
                    randomQuestion(gameQuestions);

                }
                break;
            case 2:
                if (this.innerText == "Mercury") {
                    alert("correct");
                    randomQuestion(gameQuestions);
                }
                else {
                    alert("wrong");
                    randomQuestion(gameQuestions);

                }
                break;
            case 3:
                if (this.innerText == "Venus") {
                    alert("correct");
                    randomQuestion(gameQuestions);
                }
                else {
                    alert("wrong");
                    randomQuestion(gameQuestions);

                }
                break;
            case 4:
                if (this.innerText == "Neptune") {
                    alert("correct");
                    randomQuestion(gameQuestions);
                }
                else {
                    alert("wrong");
                    randomQuestion(gameQuestions);

                }
                break;
            case 5:
                if (this.innerText == "Mars") {
                    alert("correct");
                    randomQuestion(gameQuestions);
                }
                else {
                    alert("wrong");
                    randomQuestion(gameQuestions);

                }
                break;
        }




    })


};












//start timer ticking down and define what will happen on a win, on a loss, and on a time out








//call game
randomQuestion(gameQuestions);




