const coinChange = function (total, coins) {
  // TODO: 여기에 코드를 작성합니다.

};


function findCombs(set, n) {
  const combs = [];
  let count = 0;

  function pushCombs(set, comb = []) {
    const sumComb = comb.reduce((acc, cur) => acc + cur, 0);
    if (sumComb === n) {
      combs.push(comb);
      count++;
      return 0;
    } else if (sumComb > n) {
      return 0;
    }
    for (let i = 0; i < set.length; i++) {
      pushCombs(set.slice(i), comb.concat(set[i]));
    }
  }

  pushCombs(set);
  return [combs, count];
}


console.log(findCombs([1, 5], 10))