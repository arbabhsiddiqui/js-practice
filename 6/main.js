const myNum = [1, 2, 3, 4, 5];
console.log('myNum', myNum);

const firstMyNum = myNum[0];
const lastMyNum = myNum[myNum.length - 1];

console.log({
  firstMyNum,
  lastMyNum,
});

const myNumMulti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myNumMulti.push(11);
console.log(myNumMulti);

myNumMulti.pop();
console.log(myNumMulti);

myNumMulti.shift();

console.log(myNumMulti);

myNumMulti.unshift(44);

console.log(myNumMulti);

const doubleMyNum = myNum.map((item) => item * item);

console.log(doubleMyNum);

const evenMyNum = myNum.filter((item) => item % 2 === 0 && item);

console.log(evenMyNum);

const total = myNum.reduce((acc, myNum) => myNum + acc, 0);

console.log(total);

for (let index = 0; index < doubleMyNum.length; index++) {
  const element = doubleMyNum[index];
  console.log(element);
}

myNum.forEach((element) => {
  console.log(element);
});

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`i ${i} ,j ${j} and ${matrix[i][j]}`);
  }
}

console.log(matrix[2][2]);
