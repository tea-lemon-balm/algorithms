const largestProductOfThree = function (arr) {
  const combs = findCombs(arr, 3);
  const lPTs= combs.map(comb => comb.reduce((acc, cur) => acc * cur))
  return Math.min(...lPTs);
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