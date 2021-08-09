function radix(arr) {
  // the number of digits about the maximum number in array.
  const numDigits = String(Math.max(arr)).length;
  console.log(numDigits);
  for (let i = 0; i < numDigits; i++) {
    const arrInArr = getDigit(arr, i);
    arr = countingSort(arrInArr);
    console.log(i, arr.toString());
  }
  return arr;
}

function countingSort(arrInArr) {
  // addiction part- 1s
  const arr = arrInArr[0];
  console.log("arr:", arr.toString());
  // addiction part- 1e
  const len = Math.max(...arr);
  const count = Array(len + 1).fill(0);
  const output = [];
  arr.forEach((el) => {
    count[el] += 1;
  });
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  // edited part - 1s
  for (let i = arr.length - 1; i > -1; i--) {
    output[count[arr[i]] - 1] = arrInArr[1][i];
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
    digit = Number(strNum);
    list[0].push(digit);
    list[1].push(num);
  }
  return list;
}
const arr = [1, 2, 43, 100, 21];
console.log(radix(arr).toString());
