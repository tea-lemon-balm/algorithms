/**
 *
 */

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
const arr = [3, 1, 21];
console.log(getDigit(arr, 0).toString());
