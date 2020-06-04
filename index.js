var squares = document.querySelectorAll('.square');
var spanRgb = document.querySelector("#rgb");

var colors =[]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}


for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = randomColor();
    colors.push(squares[i].style.backgroundColor);

}


for (var i = 0; i < squares.length; i++) {

    //Adding initial colors to squares
    squares[i].style.backgroundColor = randomColor();

    //Using a list to keep track of RGB colors
    colors.push(squares[i].style.backgroundColor);


    


}

//Choosing a random color and 
pickedColor = colors[getRandomInt(5)];
spanRgb.textContent = pickedColor;


