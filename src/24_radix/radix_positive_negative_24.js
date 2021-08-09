"use strict";
function radix(arr) {
  const positive = [];
  let negative = [];
  for (let num of arr) {
    if (num < 0) {
      negative.push(num);
    } else {
      positive.push(num);
    }
  }
  // console.log("pos", positive.toString());
  const posPart = radixSort(positive, 0);
  negative = negative.map((el) => -1 * el);
  // console.log("neg", negative.toString());
  let negPart = radixSort(negative, 1);
  negPart = negPart.map((el) => -1 * el);
  return [...negPart, ...posPart];
}

function radixSort(arr, option) {
  // the number of digits about the maximum number in array.
  const numDigits = String(Math.max(arr)).length;
  // console.log(numDigits);
  for (let i = 0; i < numDigits; i++) {
    const arrInArr = getDigit(arr, i);
    arr = countingSort(arrInArr, option);
    // console.log(i, arr.toString());
  }
  return arr;
}

function countingSort(arrInArr, option) {
  // addiction part- 1s
  const arr = arrInArr[0];
  // console.log("arr:", arr.toString());
  // addiction part- 1e
  const count = Array(10).fill(0);
  const output = [];
  arr.forEach((el) => {
    count[el] += 1;
  });
  for (let i = 1; i < count.length; i++) {
    count[i] = count[i] + count[i - 1];
  }
  // edited part - 1s
  for (let i = arr.length - 1; i > -1; i--) {
    option === 0
      ? (output[count[arr[i]] - 1] = arrInArr[1][i])
      : (output[count[arr[i]] - 1] = arrInArr[1][arr.length - 1 - i]);
    // console.log(output.toString());
    count[arr[i]] -= 1;
  }
  // edited part - 1e
  return output;
}

function getDigit(numArr, pos) {
  const list = [[], []];
  for (let num of numArr) {
    let strNum = String(num);
    strNum = strNum[strNum.length - 1 - pos]
      ? strNum[strNum.length - 1 - pos]
      : 0;
    const digit = Number(strNum);
    list[0].push(digit);
    list[1].push(num);
  }
  return list;
}
// const arr = [20, -10, -11, 2, 29];
const arr = [5, 4, 3, 2, 1];
console.log(radix(arr).toString());
