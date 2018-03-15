//variables
<<<<<<< HEAD
var currentColor = document.getElementById("current-color");
var isClicked = false;
var a = pickRandomSquare();
var colors = [];
=======
var a = pickRandomSquare();
var colors = generateRandomColors(100);
>>>>>>> 7b670b3fc27239a54d548945fa9b502df7e02f27
var squares = document.querySelectorAll(".square");
//make all squares clickable
//for loop with a closure to ensure that the function is called during the loop and not after.

for(var i = 0; i < squares.length; i++) {
<<<<<<< HEAD
	(function() {
			squares[i].addEventListener("click", clickToStart);
	})(i);
}

//removes onclick event after first click

if(isClicked) {
	for(var i = 0; i < squares.length; i++) {
		(function() {
			squares[i].removeEventListener("click", clickToStart);
		})(i);
	}
}


// Functions.

function clickToStart() {
			//generates the first random color onclick
			isClicked = true;
			generateRandomColors(colors, 1);
			showStart();
}
function showStart() {
	var q = 0;
	var i = 0;
	var id = setInterval(colorChanger, 200);
	var animationContainer = document.getElementById("animate");

	squares[i].removeEventListener("click", clickToStart);

	function colorChanger() {
			if(i <= 8) {
				currentColor.textContent = String(colors[q]);
				squares[a.splice(a.length-1)].style.backgroundColor = colors[q];
				i++;
			}else {
				//generates a new random color every time all 9 squares are filled
				generateRandomColors(colors, 1);
=======
	(function(q) {
		squares[i].addEventListener("click", function() {
			//squares[q].classList.toggle("purple");
			showStart();

		});
	})(i);
}

// Functions.
function showStart() {
	var q = 0;
	var i = 0;
	var id = setInterval(lightShow1, 150);
	var animationContainer = document.getElementById("animate");

	function lightShow1() {
		if(q <= 100) {
			if(i <= 8) {
				squares[a.splice(a.length-1)].style.backgroundColor = colors[q];
				i++;
			}else {
>>>>>>> 7b670b3fc27239a54d548945fa9b502df7e02f27
				pickRandomSquare();
					q++;
					i=0;
			}
<<<<<<< HEAD
	}
}

function generateRandomColors(arr, num) {
=======
		}
	}
}

//function pickSquare() {
//	var random = Math.floor(Math.random() * squares.length);
//	return squares[random]
//}

function generateRandomColors(num) {
	//make an array
	var arr = []
>>>>>>> 7b670b3fc27239a54d548945fa9b502df7e02f27
	//add num random colors to array
	for(var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor())
	}
<<<<<<< HEAD
=======
	//return that array 
	return arr;
>>>>>>> 7b670b3fc27239a54d548945fa9b502df7e02f27
}

function randomColor() {
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

function pickRandomSquare() {
<<<<<<< HEAD
	a = [0, 1, 2, 3, 4, 5 ,6 ,7, 8];
	//shuffle array
	// http://stackoverflow.com/questions/962802#962890
	function shuffle(array) {
		var tmp, current, top = array.length;
	    if(top) while(--top) {
		 	current = Math.floor(Math.random() * (top + 1));
			tmp = array[current];
			array[current] = array[top];
			array[top] = tmp;
		}
		return array;
	}
	a = shuffle(a);
	return a;
}
=======
			a = [0, 1, 2, 3, 4, 5 ,6 ,7, 8];

				// http://stackoverflow.com/questions/962802#962890
				function shuffle(array) {
				  var tmp, current, top = array.length;
				  if(top) while(--top) {
				    current = Math.floor(Math.random() * (top + 1));
				    tmp = array[current];
				    array[current] = array[top];
				    array[top] = tmp;
				  }
				  return array;
				}

				a = shuffle(a);
				return a;
		}
>>>>>>> 7b670b3fc27239a54d548945fa9b502df7e02f27
