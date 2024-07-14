function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

function rem(num1, num2) {
  return num1 % num2;
}

function double(num) {
  return (num += num);
}

function decs() {
  return (num -= num);
}

function findBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

function findSmallest(num1, num2) {
  if (num1 < num2) {
    return num1;
  }
  return num2;
}

function findBiggerOrEqual(num1, num2) {
  if (num1 >= num2) {
    return num1;
  }
  return num2;
}

function findSmallestOrEqual(num1, num2) {
  if (num1 <= num2) {
    return num1;
  }
  return num2;
}

function findEqual(num1, num2) {
  if (num1 === num2) {
    return 'type and value are equal';
  }
  if (num1 == num2) {
    return 'type is not equal but value are';
  }
  return 'not equal';
}

function andCheck(num1, num2) {
  if (num1 == num2 && typeof num1 == typeof num2) {
    return 'fully equal';
  }
  return 'not equal';
}

function orCheck(num1, num2) {
  if (num1 == num2 || typeof num1 == typeof num2) {
    return 'practically equal';
  }
  return 'not equal';
}

function isSame(num1, num2) {
  if (num1 != num2) {
    return 'not equal';
  }
  return 'equal';
}

function isPositive(num1) {
  return Math.sign(num1) === 1 ? true : false;
}

function performArithmeticOperations(num1, num2) {
  console.log('sum', sum(num1, num2));
  console.log('sub', sub(num1, num2));
  console.log('mul', mul(num1, num2));
  console.log('div', div(num1, num2));
  console.log('rem', rem(num1, num2));
}

performArithmeticOperations(2, 3);

function compare(num1, num2) {
  console.log('findBigger', findBigger(num1, num2));
  console.log('findSmallest', findSmallest(num1, num2));
  console.log('findBiggerOrEqual', findBiggerOrEqual(num1, num2));
  console.log('findSmallestOrEqual', findSmallestOrEqual(num1, num2));
  console.log('findEqual', findEqual(num1, num2));
  console.log('andCheck', andCheck(num1, num2));
  console.log('orCheck', orCheck(num1, num2));
  console.log('isSame', isSame(num1, num2));
}

compare(3, 6);

console.log(isPositive(5), 'isPositive');
console.log(isPositive(-5), 'isPositive');
