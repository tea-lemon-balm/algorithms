function join(arr) {
  arr = arr.map((el) => toString(el));
  return arr.join("");
}
function toString(num, numDigits) {
  const str = String(num);
  let result = "";
  if (str.length === numDigits) {
    result += str;
    return str;
  } else {
    for (let i = 0; i < numDigits - str.length; i++) {
      result += "0";
    }
    result += str;
    return result;
  }
}

console.log(toString(1, 3));
