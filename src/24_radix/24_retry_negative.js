function radixSort(arr) {
  // todo: 여기에 코드를 작성합니다.
  // sort for digit.
  // divide the array to the positive part and the negative part.
  const maxLen = String(Math.max(...arr)).length;
  for (let i = 0; i < maxLen; i++) {
    const arr2 = arr.map(el => getDigit(el, i));
    arr = countingSort(arr2, arr);
    console.log(i, arr);
  }
  return arr;
}

// 321=> [3,2,1]
// In base 10, get each digit for the array.
function getDigit(num, nth) {
  return parseInt(num / Math.pow(10, nth)) % 10;
}

function countingSort(arr, arr2) {
  const digits = Array(19).fill(0);
  const newArr = Array(arr2.length);

  for (let x of arr) {
    digits[9 + x] += 1;
  }

  for (let i = 1; i < digits.length; i++) digits[i] += digits[i - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    digits[9 +arr[i]] -= 1
    newArr[digits[9 +arr[i]]] = arr2[i];
  }
  return newArr;
}

let arr = [3, 1, 21];
console.log(radixSort(arr));