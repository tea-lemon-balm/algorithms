const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let num = 1;
  let count = 1;
  while (n > count) {
    num++;
    if (isUgly(num) === true) {
      count++;
    }
  }
  return num;
};
function isUgly(num) {
  num = maxDivide(num, 2);
  num = maxDivide(num, 3);
  num = maxDivide(num, 5);
  if (num === 1) {
    return true;
  } else {
    return false;
  }
}

function maxDivide(a, b) {
  while (a % b == 0) a = a / b;
  return a;
}
// console.log(maxDivide(4, 2));

// function gcd(a, b) {
//   if (b == 0) return a;
//   return gcd(b, a % b);
// }

// function lcm(a, b) {
//   return (a / gcd(a, b)) * b;
// }

// console.log(gcd(10, 5));
