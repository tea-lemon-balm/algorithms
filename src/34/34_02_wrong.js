const LCS = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.
  const lis1s = LIS(str1);
  const lis2s = LIS(str2);
  for(let lis1 of lis1s) {
    if(lis1[1]==='') continue;
    for(let lis2 of lis2s) {
      if(lis1[1]===lis2[1]) {
        return lis2[0]
      }
    }
  }
  return 1;
};

const LIS = function (arr) {
  const N = arr.length;
  const lis = Array(N).fill(1).map((el) => [1, '']);
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i][0] < lis[j][0] + 1) {
        if (lis[j][0] === 1) lis[i][1] += arr[j] + arr[i];
        if (lis[j][0] > 1) lis[i][1] = lis[j][1] + arr[i];
        lis[i][0] = lis[j][0] + 1;
      }
    }
  }
  return lis;
};