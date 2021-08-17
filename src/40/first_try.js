let longestPalindrome = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let maxLen = 0;
  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j <= str.length - i; j++) {
      // if (i === 11) {
      const editedStr1 = str.slice(j, j + i);
      const editedStr2 = editedStr1.split("").reverse().join("");
      const bool = editedStr1 === editedStr2;
      // console.log(bool, editedStr1, "||", editedStr2);
      if (bool) {
        if (editedStr1.length > maxLen) {
          maxLen = editedStr1.length;
        }
      }
      // }
    }
  }
  return maxLen;
};
let str = "My dad is a racecar athlete";
str = "There is a tattarrattat   ";
let result = longestPalindrome(str);
console.log(result);
