const jobAllocation = function (jobs, workersNum) {
  // TODO: 여기에 코드를 작성합니다.
  //  workersNum-1은 분할 횟수이다.
  const len = jobs.length;
  const idx = jobs.map((el, idx)=> idx+1);
  const combs = findCombs(idx, workersNum - 1);
  let min = Infinity;
  for (let comb of combs) {
    let max = -Infinity;
    console.log(comb, jobs);
    for (let i = 0; i < workersNum; i++) {
      if (i === workersNum - 1) {
        let sum = 0;
        for (let range = comb[i-1]; range < len; range++) sum += jobs[range];
        max = Math.max(max, sum);
        console.log("end", jobs.slice(comb[i-1], len))
        // console.log("end", max)
      } else if (i === 0) {
        let sum = 0;
        for (let range = 0; range < comb[i]; range++) sum += jobs[range];
        max = Math.max(max, sum);
        console.log("1", jobs.slice(0, comb[i]))
        // console.log("1", max)
      } else {
        let sum = 0;
        for (let range = comb[i-1]; range < comb[i]; range++) sum += jobs[range];
        max = Math.max(max, sum);
        // console.log("mid", max)
        console.log("mid", jobs.slice(comb[i - 1], comb[i]))
      }
    }
    min = Math.min(min, max);
  }
  // console.log(min);
  return min;
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

let jobs = [1, 2, 3, 4, 5, 6, 7];
// console.log(jobAllocation(jobs, 3))

// jobs = Array(1000).fill(1);
let workersNum = 3;
let output = jobAllocation(jobs, workersNum);
console.log(output)