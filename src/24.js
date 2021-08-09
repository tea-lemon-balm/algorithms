"use strict";
// digit part 하고 arr part를 저장하는 arrInArr를 없애고 digitArr로 계산할 것
function radixSort(arr) {
  const positive = [];
  let negative = [];
  for (let num of arr) {
    if (num < 0) {
      negative.push(num);
    } else {
      positive.push(num);
    }
  }
  const posPart = radix(positive, 0);
  negative = negative.map((el) => -1 * el);
  let negPart = radix(negative, 1);
  negPart = negPart.map((el) => -1 * el);
  return [...negPart, ...posPart];

  function radix(arr, option) {
    const numDigits = String(Math.max(arr)).length;
    for (let i = 0; i < numDigits; i++) {
      const arrInArr = getDigit(arr, i);
      arr = countingSort(arrInArr, option);
    }
    return arr;
  }

  function countingSort(arrInArr, option) {
    const arr = arrInArr;
    const count = Array(10).fill(0);
    const output = [];
    arr.forEach((el) => {
      count[el] += 1;
    });
    for (let i = 1; i < count.length; i++) {
      count[i] = count[i] + count[i - 1];
    }
    for (let i = arr.length - 1; i > -1; i--) {
      option === 0
        ? (output[count[arr[i]] - 1] = positive[i])
        : (output[count[arr[i]] - 1] = negative[arr.length - 1 - i]);
      count[arr[i]] -= 1;
    }
    return output;
  }

  function getDigit(numArr, pos) {
    const list = [];
    for (let num of numArr) {
      let strNum = String(num);
      strNum = strNum[strNum.length - 1 - pos]
        ? strNum[strNum.length - 1 - pos]
        : 0;
      const digit = Number(strNum);
      list.push(digit);
      // list[1].push(num);
    }
    return list;
  }
}

// const arr = [20, -10, -11, 2, 29];
const arr = [5, 4, 3, 2, 1];
console.log(radixSort(arr).toString());
