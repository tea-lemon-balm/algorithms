const LSCS = function (a, size = a.length) {
  //TODO: 여기에 코드를 작성합니다.
  // let maxint = Math.pow(2, 53)
  let max_so_far = -Infinity;
  let max_ending_here = 0;

  for (let i = 0; i < size; i++) {
    max_ending_here = max_ending_here + a[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;

    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
};

console.log(LSCS([-3, 4, -2]));
