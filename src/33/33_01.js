const LIS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  const subsequences = findSubsequence(arr);
  for(let subsequence of subsequences) {
    if(subsequence.includes(10)) console.log(subsequence);
  }
  // let long;
  // for (let subsequence of subsequences) {
  //   let isCon = true;
  //   for (let i = 1; i < subsequence.length; i++) {
  //     if (subsequence[i - 1] > subsequence[i]) {
  //       isCon = false;
  //       break;
  //     }
  //   }
  //   if (isCon) long = subsequence;
  // }
  // return long.length;
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

let arr = [3, 2];
arr = [3, 10, 2, 1, 20];
console.log(LIS(arr));