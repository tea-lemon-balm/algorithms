const jobAllocation = function (jobs, workersNum) {
  // TODO: 여기에 코드를 작성합니다.
};
const jobs = [1, 2, 3, 4, 5];
const workersNum = 3;
const arr = Array.from({ length: jobs.length - 1 }, (x, i) => i + 1);
const num = workersNum - 1;
const get = findCombs(arr, num);
// console.log(get);

for (let i = 0; i < get.length; i++) {
  console.log(get[i].toString());
  for (let j = 0; j < get[i].length; j++) {
    if (j === 0) {
      // console.log("partS", get[i][j], jobs.slice(0, get[i][j]).toString());
      const sum = jobs.slice(0, get[i][j]).reduce((acc, cur) => {
        return acc + cur;
      });
      console.log("partS", get[i][j], sum);
    } else if (j === get[i].length - 1) {
      const sum1 = jobs
        .slice(get[i][j - 1], get[i][j])
        .reduce((acc, cur) => acc + cur);
      const sum2 = jobs
        .slice(get[i][j], jobs.length)
        .reduce((acc, cur) => acc + cur);
      console.log("partM", get[i][j], sum1);
      console.log("partE", get[i][j], sum2);
      // console.log(
      //   "partM",
      //   get[i][j],
      //   jobs.slice(get[i][j - 1], get[i][j]).toString()
      // );
      // console.log(
      //   "partE",
      //   get[i][j],
      //   jobs.slice(get[i][j], jobs.length).toString()
      // );
    } else {
      console.log(
        "partM",
        get[i][j],
        jobs.slice(get[i][j - 1], get[i][j]).toString()
      );
    }
  }
}
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
