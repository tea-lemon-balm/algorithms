function fibonacci(n, nm1=1,nm2=0) {
  // TODO: 여기에 코드를 작성합니다.
  if(n===0) {
    return nm2;
  }
  if(n===1) {
    return nm1;
  }
  return fibonacci(n-1,nm1+nm2,nm1);
}
