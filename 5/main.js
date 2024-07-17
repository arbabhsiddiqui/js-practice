function checkEvenOdd(number) {
  if (isNaN(number)) {
    return 'not a number';
  }

  if (number % 2 !== 0) {
    return 'odd';
  }
  return 'even';
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd('55'));
console.log(checkEvenOdd('DD55'));

function calculateSquare(number) {
  if (isNaN(number)) {
    return 'not a number';
  }

  return number * number;
}

console.log(calculateSquare(4));
console.log(calculateSquare(2));

function findGreaterNumber(number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    return 'not a number';
  }

  if (number1 > number2) return 'number 1 is grater';

  return 'number 2 is grater';
}

console.log(findGreaterNumber(4, 8));

console.log(findGreaterNumber(7, 3));

function concatenateTwoString(string1, string2) {
  return string1 + string2;
}

console.log(concatenateTwoString('abc', 'axx'));
console.log(concatenateTwoString('abc', 55));

const sumOfTwoNumber = (number1, number2) => {
  if (isNaN(number1) || isNaN(number2)) {
    return 'not a number';
  }
  return number1 + number2;
};

console.log(sumOfTwoNumber(3, 4));

const checkForChar = (sting, specialChar) =>
  sting.includes(specialChar) ? true : false;

console.log(checkForChar('arbab', 'a'));

function returnProduct(number1, number2 = 1) {
  return number1 * number2;
}

console.log(returnProduct(4));

console.log(returnProduct(4, 5));

function sendGreeting(name = 'baba', age = 18) {
  return `hello, ${name} and your age is ${age}`;
}

console.log(sendGreeting('Arbab'));

function callAFunctionNTimes(functionRef, number) {
  let count = 0;
  let results = [];
  while (count <= number) {
    results.push(functionRef());
    count++;
  }
  return results;
}

console.log(callAFunctionNTimes(sendGreeting, 5));

function hof(fun1, fun2, value) {
  let result1 = fun1(value);

  let result2 = fun2(result1);

  return result2;
}

console.log(hof(calculateSquare, checkEvenOdd, 4));
console.log(hof(calculateSquare, checkEvenOdd, 3));
