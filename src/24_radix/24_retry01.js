function radixSort(arr) {
  // todo: 여기에 코드를 작성합니다.
  // sort for digit.
  const maxLen=String(Math.max(arr)).length;
  for(let i=0;i<maxLen;i++) {
    arr.sort((a,b)=> getDigit(a,i) - getDigit(b, i));
  }
  return arr;
}
// 321=> [3,2,1]
// In base 10, get each digit for the array.
function getDigit(num, nth) {
  return parseInt(num / Math.pow(10, nth) ) %10;
}

function countingSort(arr) {
  const digits=Array(10).fill(0);
  const newArr=Array(arr.length);
  for(let x of arr) digits[x]+=1;
  for(let i=1;i<digits.length;i++) digits[i]+=digits[i-1];
  for(let x of arr) {
    digits[x]-=1
    newArr[digits[x]]=x;
  }
  return newArr;
}

let arr=[3,1,21];
console.log(radixSort(arr));

arr=[3,3,2,1];
console.log(countingSort(arr));