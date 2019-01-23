var varFizz;
var varBuzz;
var maxVal;
var myButton = document.getElementById("gfb");
var str = '<ul>';


function generateFizzBuzz () {
  varFizz = document.getElementById("userFizz").value;
  varBuzz = document.getElementById("userBuzz").value;
  maxVal = document.getElementById("userMax").value;
  fizzbuzzLoop(varFizz, varBuzz, maxVal);
	str += '</ul>';
	document.getElementById("fizzBuzz").innerHTML = str;
  str = '<ul>';
}

function fizzbuzzLoop (fizz, buzz, maxVal) {
  maxVal++;
	for (i=1; i<maxVal; i++) {
    if (i%fizz==0 && i%buzz==0) {
      updateUL(i + " (Fizzbuzz)");
    }
    else if (i%buzz==0) {
      updateUL(i + " (Buzz)");
    }
    else if (i%fizz==0) {
      updateUL(i + " (Fizz)");
    } else {
      updateUL(i);
    }
  }
}

const updateUL = (myStr) => {
  "use strict";
	str += '<li>'+ myStr + '</li>';
}

myButton.onclick = generateFizzBuzz;
