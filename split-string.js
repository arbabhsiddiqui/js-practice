function solution(str) {
  let letterArray = [];
  let stringLength = str.length;
  let currentCharLength = 0;
  let newWord = '';
  if (stringLength == 0) {
    return letterArray;
  }

  for (let index = 0; index < stringLength; index++) {
    if (currentCharLength == 2) {
      letterArray.push(newWord);
      currentCharLength = 0;
      newWord = '';
    }
    newWord += str[index];
    currentCharLength++;
  }

  if (newWord.length == 2) {
    letterArray.push(newWord);
    return letterArray;
  }
  if (newWord.length == 1) {
    newWord += '_';
    letterArray.push(newWord);
    return letterArray;
  }
}

console.log(solution('abcdef')); // [ab,cd,ef]
console.log(solution('abcdefg')); // [ab,cd,ef,g_]
console.log(solution(''));
