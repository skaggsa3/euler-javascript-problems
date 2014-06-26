// Problem #1 --- Find the sum of all the multiples of 3 or 5 below 1000.
var count = 1000;
var sum = 0;

while (count > 1) {
    if (count % 3 == 0 || count % 5 == 0) {
        sum += count;
    }
    count--;
}

console.log(sum);

// Problem 2 --  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var prevNum = 1;
var currNum = 2;
var count = 0;
var sum = 0;

while (count <= 500) {
    sum = prevNum + currNum;
  
    if (sum % 2 == 0) {
      console.log(sum);
    }
  
    prevNum = currNum;
    currNum = sum;
      
    count = sum;
}

// Problem 3 -- What is the largest prime factor of the number 600851475143 ? - Started but hasn't been completed.

