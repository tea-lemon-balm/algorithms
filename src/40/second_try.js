let longestPalindrome = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  const strLen = str.length;
  let result = strLen;
  for (let i = 3; i <= strLen; i++) {
    for (let j = 0; j <= strLen - i; j++) {
      const cutStr = str.substring(j, j + i);
      isPalindrome(cutStr);
    }
  }
  return result;
  function isPalindrome(str) {
    const len = str.length;
    const iterLen = parseInt(len / 2);
    for (let i = 0; i < iterLen; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    result = len;
  }
};
let str = "My dad is a racecar athlete";
str = "There is a tattarrattat   ";
let result = longestPalindrome(str);
console.log(result);
