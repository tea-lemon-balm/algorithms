let tiling = function (n, m2=0, m1=1) {
  // TODO: 여기에 코드를 작성합니다.
  //  n/2 > 0 가능
  if(n===1) {
    return m1+m2;
  }
  return tiling(n -1, m1, m1+m2)
};