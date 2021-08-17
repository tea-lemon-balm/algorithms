const str = "12321";
const LENGTH = str.length;
const isPalindrome = Array(LENGTH)
  .fill(false)
  .map((_) => Array(LENGTH).fill(false));
console.log(isPalindrome.toString());
