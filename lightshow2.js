//variables
var a = pickRandomSquare();
var colors = generateRandomColors(100);
var squares = document.querySelectorAll(".square");
//make all squares clickable
//for loop with a closure to ensure that the function is called during the loop and not after.

for(var i = 0; i < squares.length; i++) {
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
				pickRandomSquare();
					q++;
					i=0;
			}
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
	//add num random colors to array
	for(var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor())
	}
	//return that array 
	return arr;
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