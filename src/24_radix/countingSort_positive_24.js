/**
 * * counting sort!
 * * https://www.programiz.com/dsa/counting-sort
 */
const countingSort = (arr) => {
  const len = Math.max(...arr);
  const count = Array(len + 1).fill(0);
  const output = [];
  arr.forEach((el) => {
    count[el] += 1;
  });
  for (let i = 1; i < count.length; i++) {
    count[i] = count[i] + count[i - 1];
  }
  // inverse order in same digit.
  // for (let num of arr) {
  //   output[count[num] - 1] = num;
  //   count[num] -= 1;
  // }
  for (let i = arr.length - 1; i > -1; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]] -= 1;
  }
  return output;
};

const arr = [3, 5, 1, 2, 3, 0];
console.log(countingSort(arr).toString());
[121, 432, 564, 23, 1, 45, 788];
