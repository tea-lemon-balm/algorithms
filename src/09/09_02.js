function power(base, exponent) {
  let newBase = base;
  let newExponent = 2;
  while (newExponent < exponent) {
    newBase = (newBase * newBase) % 94906249;
    newExponent *= 2;
  }
  newExponent/=2;
  const remind = exponent - newExponent;
  for (let i = 0; i < remind; i++) {
    newBase = (newBase * base) % 94906249;
  }
  return newBase;
}

console.log(power(3, 2910172));