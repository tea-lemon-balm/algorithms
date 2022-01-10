const uglyNumbers = function (n) {
  const uglyNumbers = [1];
  let idx2 = 0,
    idx3 = 0,
    idx5 = 0;

  for (let i = 0; i < n; i++) {
    const nextMultipleOf2 = uglyNumbers[idx2] * 2;
    const nextMultipleOf3 = uglyNumbers[idx3] * 3;
    const nextMultipleOf5 = uglyNumbers[idx5] * 5;
    const nextUglyNum = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );
    uglyNumbers.push(nextUglyNum);

    if (nextUglyNum === nextMultipleOf2) idx2++;
    if (nextUglyNum === nextMultipleOf3) idx3++;
    if (nextUglyNum === nextMultipleOf5) idx5++;
  }
  return uglyNumbers[n - 1];
};

console.log(uglyNumbers(10))