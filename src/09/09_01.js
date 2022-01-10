function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  const mod = 94906249;
  let output = 1;
  while (exponent > 0) {
    if (exponent % 2) {
      output = output * base;
      output = output % mod;
      exponent--;
    } else {
      exponent = exponent / 2;
      base = base * base;
      base = base % mod;
    }
  }
  return output % mod;
}