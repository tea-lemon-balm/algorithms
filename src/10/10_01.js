// const binarySearch = function (arr, target) {
//   // TODO : 여기에 코드를 작성합니다.
//   const half = parseInt(arr.length / 2);
//   const current = arr[half];

//   if (current === target) {
//     return half;
//   }
//   if (arr.length === 1) {
//     return -1;
//   } else if (target > current) {
//     const right = arr.slice(half);
//     return binarySearch(right, target);
//   } else {
//     const left = arr.slice(0, half);
//     return binarySearch(left, target);
//   }
// };

const binarySearch = function (arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let middle = parseInt((right + left) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};