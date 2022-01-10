const subsetSum = function (set, bound) {
  // TODO: 여기에 코드를 작성합니다.
  set = set.filter(el => el <= bound);
  const twoSumList = findPowerSet(set, 2);
  let int = 0;
  for (let x of twoSumList) {
    if (x <= bound && int < x) int = x;
  }
  return int;
};


function findPowerSet(set) {
  const powerSet = [];
  const n = set.length;

  function pushPowerSet(set, subset = []) {
    if (subset.length !== 0) powerSet.push(subset.reduce((acc, curr) => acc + curr));
    if (subset.length === n) return 0;
    for (let i = 0; i < set.length; i++) {
      pushPowerSet(set.slice(i + 1), subset.concat(set[i]));
    }
  }

  pushPowerSet(set);
  return powerSet;
}


let output = findPowerSet([1, 8, 3, 15]);
console.log(output);
output = subsetSum([1, 8, 3, 15], 10);
console.log(output);