// The goal:
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz"
// For multiples of 5 print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// ---------- METHOD 1 ----------
function fizzBuzz() {
  // Use a for loop
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }

  // ***NOTE ***
  // The first if condition can also be written as:
  if (i % 15 === 0) {
    // The console log goes here...
  } // ...and the other statements start here
}

// Call the function
fizzBuzz();

// ---------- METHOD 2 ----------
// Using the array method .push()
function fizzBuzz() {
  var output = [];
  var count = 1;

  while (count <= 100) {
    if (count % 15 === 0) {
      output.push('FizzBuzz');
    } else if (count % 3 === 0) {
      output.push('Fizz');
    } else if (count % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(count);
    }
    count++;
  }

  console.log(output);
}

fizzBuzz();
