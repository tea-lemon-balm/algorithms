function findSubsequence(str) {
  const arr = [];
  function subsequence(str, subStr = "") {
    if (str.length === 0) {
      arr.push(subStr);
      return;
    }
    subsequence(str.slice(0, str.length - 1), subStr);
    subsequence(str.slice(0, str.length - 1), str[str.length - 1] + subStr);
    return;
  }
  subsequence(str);
  return arr;
}
// subsequence("084");
const out1 = findSubsequence("abcd");
console.log(out1.toString());
const out2 = findSubsequence("aceb");
console.log(out2.toString());

// const totalarr = [];
// function subsequence2(arr, subArr = []) {
//   if (arr.length === 0) {
//     // if (!arr.includes(subStr)) arr.push(subStr);
//     totalarr.push(subArr);
//     return;
//   }
//   subsequence2(arr.slice(0, subArr.length - 1), subArr);
//   subsequence2(
//     arr.slice(0, subArr.length - 1),
//     [arr[arr.length - 1]].concat(...subArr)
//   );
//   return;
// }
// subsequence2([0, 8, 4]);
// totalarr.forEach((el) => console.log(el.toString()));

// const arr = [1, 2, 3];
// console.log(arr.concat(arr[arr.length - 1]).toString());
