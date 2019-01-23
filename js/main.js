var varFizz;
var varBuzz;
var maxVal;
var myButton = document.getElementById("gfb");
var str = '<ul>';


function generateFizzBuzz () {
  varFizz = document.getElementById("userFizz").value;
  console.log(varFizz);
  varBuzz = document.getElementById("userBuzz").value;
  console.log(varBuzz);
  maxVal = document.getElementById("userMax").value;
  console.log(maxVal);
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

function updateUL (myStr) {
		str += '<li>'+ myStr + '</li>';
}

myButton.onclick = generateFizzBuzz;
