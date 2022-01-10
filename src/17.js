function orderOfPresentation(N, K) {
  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };
  let order = 0;
  const isUsed = Array(N).fill(false);

  for (let i = 0; i < K.length; i++) {
    const num = K[i];
    isUsed[num -1] = true;
    const candidates = isUsed.slice(0, num-1);
    const validCnt = candidates.filter((el) => el === false).length;
    const formerCnt = validCnt * factorial(N - i - 1);
    order = order + formerCnt;
  }
  return order;
}
