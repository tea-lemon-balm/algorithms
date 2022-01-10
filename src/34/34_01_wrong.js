const LCS = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.
  const lis1 = LIS(str1);
  const lis2 = LIS(str2);
  return [lis1, lis2];
};


const LIS = function (arr) {
  const N = arr.length;
  const lis = Array(N).fill(1).map((el) => [1, []]);
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i][0] < lis[j][0] + 1) {
        if (lis[j][0] === 1) lis[i][1].push(arr[j], arr[i]);
        if (lis[j][0] > 1) lis[i][1] = lis[j][1].concat(arr[i]);
        lis[i][0] = lis[j][0] + 1;
      }
    }
  }
  return lis;
};

let output = LCS('abcd', 'aceb');
console.log(output[0]);
console.log(output[1]);