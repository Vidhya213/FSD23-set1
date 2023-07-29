// Rectangle
function calculateArea() {
  var length = Number(document.getElementById("length").value);
  var width = Number(document.getElementById("width").value);
  var area = length * width;
  alert("Area of the rectangle " + area);
}

// Age
function checkAge() {
  var age = prompt("Enter the Age:");
  if (age >= 18) {
    alert("You are eligible to vote");
  } else {
    alert("You must be 18 or older to vote");
  }
}

// Largest number
function largestNumber() {
  var number1 = Number(document.getElementById("number1").value);
  var number2 = Number(document.getElementById("number2").value);
  var number3 = Number(document.getElementById("number3").value);
  if (number1 >= number2 && number1 >= number3) {
    alert("number 1 is greater");
  } else if (number2 >= number3 && number2 >= number1) {
    alert("number 2 is greater");
  } else {
    alert("number 3 is greater");
  }
}

// Fahrenheit in celsius
function calculateCelsius() {
  var number2 = prompt("Enter the Number:");
  let check = ((number2 - 32) * 5) / 9;
  alert("Fahrenheit in celsius " + check);
}

// positive or negative
function checkPositiveOrNegative() {
  var number4 = Number(document.getElementById("number4").value);
  if (number4 >= 0) {
    alert(number4 + " is positive");
  } else {
    alert(number4 + " is negative");
  }
}

// Greatest number
function greatestNumber() {
  var a = Number(document.getElementById("number5").value);
  var b = Number(document.getElementById("number6").value);
  var c = Number(document.getElementById("number7").value);
  var greater = a > b && a > c ? a : b > c ? b : c;
  alert(greater);
}

// Even natural number
function sumOfAllEvenNumber() {
  var num = 0;
  var i;
  for (i = 2; i <= 100; i = i + 2) {
    num = num + i;
  }
  document.getElementById("number").value = num;
}

// Percentage
function showPercentage() {
  var number8 = Number(document.getElementById("number8").value);
  if (number8 >= 1000) {
    alert("The discount Percentage is 10%");
  } else if (number8 >= 500) {
    alert("The discount Percentage is 5%");
  } else {
    alert("There is no discount ");
  }
}

// Factorial
function showFactorial() {
  var number9 = Number(document.getElementById("number9").value);
  if (number9 < 0) {
    alert("Please enter non-negative number");
  }
  var fact = 1;
  var i = 1;
  while (i <= number9) {
    fact *= i;
    i++;
  }
  alert("The factorial is " + fact);
}

// Pattern
function showPattern() {
  let numRows = 5;
  let pattern = "";
  for (let i = 1; i <= numRows; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  alert(pattern);
}
