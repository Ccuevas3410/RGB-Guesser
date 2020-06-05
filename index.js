var squares = document.querySelectorAll('.square');
var spanRgb = document.querySelector("#rgb");
var messageDisplay = document.getElementById("message");
var playAgain_newColors = document.getElementById("playAgain_newColors");
var h1 = document.querySelector('h1');
var colors = [];
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    return bgColor;
}

function generateColors(numbers){

    for (var i = 0; i < numbers; i++) {
        //Adding initial colors to squares
        squares[i].style.backgroundColor = randomColor();
        //Using a list to keep track of RGB colors
        colors.push(squares[i].style.backgroundColor);
    }
}

function initialize(numbers) {
    colors = [];

    //ADDING COLORS TO SQUARES AND TO LIST
    generateColors(numbers);
    pickedColor = colors[getRandomInt(numbers)];
    spanRgb.textContent = pickedColor;
}
initialize(6);


//Choosing a random colom


//Adding event listener to each square to get the message of right or wrong color.
for (var j = 0; j < squares.length; j++) {

    squares[j].addEventListener("click", function () {
        clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            playAgain_newColors.textContent = "Play again";
            correctAnswer(clickedColor);

        } else {
            messageDisplay.textContent = "Wrong, try again!";
            this.style.backgroundColor = "black";
        }
    });
}

//Function to make all squares the CORRECT color
function correctAnswer(color) {
    //Making all squares change color to be equal to the chosen color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //Making H1 background color to match pickedColor
    h1.style.backgroundColor = color;
}

playAgain_newColors.addEventListener("click", function () {

    h1.style.backgroundColor = "rgb(252, 3, 186)";
    initialize(6);

});

//Toggling SELECTED class on Easy/Hard buttons.

selected = false;
easyBtn.addEventListener("click", function () {
    easyBtn.classList.toggle("selected");
    hardBtn.classList.remove("selected");
    messageDisplay.textContent = "";
    initialize(3);

    for (var i =3; i < 6;i++){

        squares[i].style.display = "none";

    }

});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.toggle("selected");
    easyBtn.classList.remove("selected");
    messageDisplay.textContent = "";
    initialize(6);

    for (var i =3; i < 6;i++){

        squares[i].style.display = "block";

    }
});