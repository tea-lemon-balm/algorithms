const rangeMinimum = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.
  const all=[];
  for(let x of ranges) {
    const arr2= arr.slice(x[0], x[1]+1);
    all.push(Math.min(...arr2));
  }
  return all;
};

// const arr = [1, 2, 3];
// const ranges = [[1, 1]];
// console.log(rangeMinimum(arr, ranges));

const arr = [1, 3, 2, 7, 9, 11];
const ranges = [
  [1, 4],
  [0, 3],
];
console.log(rangeMinimum(arr, ranges));