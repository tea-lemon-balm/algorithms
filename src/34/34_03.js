const LCS = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.
  const lis1s = LIS(str1);
  const lis2s = LIS(str2);
  let max = '';
  for (let lis1 of lis1s) {
    for (let lis2 of lis2s) {
      if ((lis1 === lis2) && max.length < lis2.length) {
        max = lis2;
      }
    }
  }
  return max.length;
};

const LIS = function (arr) {
  const N = arr.length;
  const lis = Array(N).fill(1).map((el) => []);
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      lis[i].push(arr[j] + arr[i]);
      if (lis[j].length > 0) lis[i].push(...lis[j].map((el) => el + arr[i]))
    }
  }
  const flatArr = lis.flat();
  flatArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  const result = {};
  for (let x of flatArr) {
    if(!result[x[0]]) result[x[0]]=[];
    result[x[0]].push(x);
  }
  return result;
};


console.log(LIS('abcd'))
