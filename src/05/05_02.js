let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let sum=0;
  for(let i=0;i<=parseInt(n/2);i++) {
    sum+=numOfComb(n-i, i);
  }
  return sum;
};

function numOfComb(n, k) {
  return fac(n)/fac(k)/fac(n -k)
}

function fac(n) {
  if(n===0) return 1;
  return n * fac(n-1);
}
