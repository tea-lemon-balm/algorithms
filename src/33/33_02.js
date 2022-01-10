const LIS = function (arr) {
  const N = arr.length;
  const lis = Array(N).fill(1);
  // 오름차순인지 아닌지 두 수를 비교하면 된다.
  // (arr.length -1)!의 경우 수를 갇는다.
  // arr[0] 부터 비교를 하면서 오름차순이면 lis에 +1을 하면서 비교하는 뒷 숫자에 누적한다.
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }
  return Math.max(...lis);
};
arr = [3, 10, 2, 1, 20];
console.log(LIS(arr));