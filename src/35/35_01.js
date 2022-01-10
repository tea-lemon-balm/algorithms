const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let uglyNum=1;
  if(n===1) return uglyNum;
  while(n > 1) {
    uglyNum+=1;
    if(divisor(uglyNum)) n-=1;
  }
  return uglyNum;
};

function divisor(num) {
  if(num===1) return true;
  if(Number.isInteger(num/2)) return divisor(num/2);
  if(Number.isInteger(num/3)) return divisor(num/3);
  if(Number.isInteger(num/5)) return divisor(num/5);
  else return false;
}
