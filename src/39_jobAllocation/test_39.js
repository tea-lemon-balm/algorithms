"use strict";
const jobAllocation = function (jobs, workersNum) {
  // TODO: 여기에 코드를 작성합니다.
  const arr = Array.from({ length: jobs.length - 1 }, (x, i) => i + 1);
  const num = workersNum - 1;
  const get = findCombs(arr, num);

  const arrOfCombs = [];
  for (let i = 0; i < get.length; i++) {
    // console.log(get[i].toString());
    const arrOfComb = [];
    for (let j = 0; j < get[i].length; j++) {
      if (j === 0) {
        const sum = jobs.slice(0, get[i][j]).reduce((acc, cur) => {
          return acc + cur;
        });
        // console.log("partS", get[i][j], sum);
        arrOfComb.push(sum);
      } else if (j === get[i].length - 1) {
        const sum1 = jobs
          .slice(get[i][j - 1], get[i][j])
          .reduce((acc, cur) => acc + cur);
        const sum2 = jobs
          .slice(get[i][j], jobs.length)
          .reduce((acc, cur) => acc + cur);
        // console.log("partM", get[i][j], sum1);
        // console.log("partE", get[i][j], sum2);
        arrOfComb.push(sum1);
        arrOfComb.push(sum2);
      } else {
        const sum = jobs
          .slice(get[i][j - 1], get[i][j])
          .reduce((arr, cur) => arr + cur);
        // console.log("partM", get[i][j], sum);
        arrOfComb.push(sum);
      }
    }
    arrOfCombs.push(Math.max(...arrOfComb));
    // console.log(Math.max(...arrOfComb), " ", arrOfComb.toString());
  }
  return Math.min(...arrOfCombs);
};

function findCombs(arr, num) {
  const combs = [];
  function AddCombs(arr, comb = []) {
    if (comb.length === num) {
      combs.push(comb.slice(0));
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      comb.push(arr[i]);
      AddCombs(arr.slice(i + 1, arr.length), comb);
      comb.pop();
    }
  }
  AddCombs(arr);
  return combs;
}

let jobs = [1, 2, 3, 4, 5, 6, 7];
jobs = [999, 23, 234, 555, 444, 987, 123, 999, 321];
let workersNum = 6;
let output = jobAllocation(jobs, workersNum);
console.log(output);
