let longestPalindrome = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let maxLen = 0;
  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j <= str.length - i; j++) {
      const bool = isPalindrome(str.substring(j, j + i));
      if (bool && bool > maxLen) maxLen = bool;
    }
  }
  return maxLen;
};
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return str.length;
}
let str = "My dad is a racecar athlete";
str = "There is a tattarrattat   ";
let result = longestPalindrome(str);
console.log(result);
