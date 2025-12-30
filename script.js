const output = document.getElementById("output");

function show(text) {
  output.innerText = text;
}

// EVEN OR ODD
function evenOdd() {
  let n = prompt("Enter a number:");
  show(n % 2 === 0 ? "Even Number" : "Odd Number");
}

// LARGEST OF TWO
function largest() {
  let a = prompt("Enter first number:");
  let b = prompt("Enter second number:");
  show(a > b ? "Largest is " + a : "Largest is " + b);
}

// GRADE
function grade() {
  let m = prompt("Enter marks:");
  let g = m >= 90 ? "A" :
          m >= 75 ? "B" :
          m >= 60 ? "C" :
          m >= 40 ? "D" : "F";
  show("Grade: " + g);
}

// LEAP YEAR
function leapYear() {
  let y = prompt("Enter year:");
  show(y % 4 === 0 ? "Leap Year" : "Not a Leap Year");
}

// FIBONACCI
function fibonacci() {
  let n = prompt("Enter terms:");
  let a = 0, b = 1, result = "Fibonacci:\n0 1 ";
  for (let i = 2; i < n; i++) {
    let c = a + b;
    result += c + " ";
    a = b;
    b = c;
  }
  show(result);
}

// FACTORIAL
function factorial() {
  let n = prompt("Enter number:");
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  show("Factorial = " + f);
}

// PALINDROME
function palindrome() {
  let n = prompt("Enter number:");
  let r = n.split("").reverse().join("");
  show(n === r ? "Palindrome" : "Not Palindrome");
}

// PRIME
function prime() {
  let n = prompt("Enter number:");
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  show(isPrime ? "Prime Number" : "Not Prime");
}

// FIZZBUZZ
function fizzBuzz() {
  let text = "";
  for (let i = 1; i <= 100; i++) {
    text += (i % 15 === 0) ? "FizzBuzz\n" :
            (i % 3 === 0) ? "Fizz\n" :
            (i % 5 === 0) ? "Buzz\n" :
            i + "\n";
  }
  show(text);
}

// PYRAMID
function pyramid() {
  let p = "";
  for (let i = 1; i <= 5; i++) {
    p += "* ".repeat(i) + "\n";
  }
  show(p);
}