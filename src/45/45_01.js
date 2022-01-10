const subsetSum = function (set, bound) {
  // TODO: 여기에 코드를 작성합니다.
  set= set.filter(el=> el <= bound);
  const twoSumList = findCombs(set, 2);
  set.push(...twoSumList);
  let int = 0;
  for (let x of set) {
    if (x <= bound && int < x) int = x;
  }
  return int;
};

function findCombs(set, n) {
  const combs = [];

  function pushCombs(set, comb = []) {
    if (comb.length === n) {
      combs.push(comb.reduce((acc, cur) => acc + cur));
      return 0;
    }
    for (let i = 0; i < set.length; i++) {
      pushCombs(set.slice(i + 1), comb.concat(set[i]));
    }
  }
  pushCombs(set);
  return combs;
}

let output = subsetSum([1, 8, 3, 15], 10);
console.log(output);

console.log(findCombs([1, 8, 3, 15], 2))