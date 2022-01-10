function fibonacci(n, step=0, num1=1, num2=0) {
  // TODO: 여기에 코드를 작성합니다.
  if(n===step) return num2;
  if(n===step-1) return num1;
  return fibonacci(n-1, step++, num1+num2, num1)
}
