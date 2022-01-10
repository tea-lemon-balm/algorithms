// 다 됨. 하지만 효율적이지 못함.
const LCS = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.
  const lis1s = findSubsequence(str1);
  const lis2s = findSubsequence(str2);
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

function findCombs(set, n) {
  const combs = [];

  function pushCombs(set, comb = []) {
    if (comb.length === n) {
      combs.push(comb);
      return 0;
    }
    for (let i = 0; i < set.length; i++) {
      pushCombs(set.slice(i + 1), comb.concat(set[i]));
    }
  }

  pushCombs(set);
  return combs;
}

function findSubsequence(set) {
  const subsequence = [];
  for (let i = 1; i <= set.length; i++) {
    subsequence.push(...findCombs(set, i));
  }
  return subsequence;
}


console.log(LIS('abcd'))
