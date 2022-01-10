function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  const order = range(1, N);
  const used = Array(N).fill(1);
  let KsOrder = 0;
  for (let i = 0; i < K.length; i++) {
    const pointer = K[i];
    used[pointer - 1] = 0;
    const before = used.slice(0, pointer).reduce((cur, acc) => cur + acc);
    KsOrder += before * factorial(N - i - 1);
  }
  return KsOrder;
}

function range(start, num) {
  const arr = Array(num).fill(start);
  const result = arr.map((el, idx) => el + idx)
  return result;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}