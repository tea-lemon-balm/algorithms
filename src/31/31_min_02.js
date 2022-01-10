const rangeMinimum = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.
  const createMinTree = (arr, ts, te, tree, idx) => {
    if (ts === te) {
      tree[idx] = arr[ts];
      return arr[ts];
    }

    const mid = Math.floor((ts + te) / 2);
    tree[idx] = Math.min(
      createMinTree(arr, ts, mid, tree, idx * 2 + 1), //
      createMinTree(arr, mid + 1, te, tree, idx * 2 + 2)
    );

    return tree[idx];
  };

  const height = Math.ceil(Math.log2(arr.length));
  const size = Math.pow(2, height + 1) - 1;
  const tree = Array(size).fill(null);
  createMinTree(arr, 0, arr.length - 1, tree, 0);
  const segmentTree= tree;

  const result = [];
  for (let range of ranges) {
    const pushMe = calculate(segmentTree, range, arr);
    result.push(pushMe);
  }
  return result;
};


function calculate(segmentTree, inputRange, arr) {
  let min = Infinity;
  check(inputRange);
  return min;

  function check(inputRange, range = [0, arr.length - 1], parent = 0) {
    const len = range[1] - range[0] + 1
    let left, right, childL, childR;
    childL = 2 * parent + 1;
    childR = 2 * parent + 2;
    left = [[range[0], range[0] + Math.ceil(len / 2) - 1], childL];
    right = [[range[1] - Math.floor(len / 2) + 1, range[1]], childR];
    if (range.join(',') === inputRange.join(',')) {
      // console.log("123", segmentTree[parent])
      if(min > segmentTree[parent]) min= segmentTree[parent];
      return 0;
    }
    if ((left[0][0] <= inputRange[0] && inputRange[0] <= left[0][1]) &&
      (right[0][0] <= inputRange[1] && inputRange[1] <= right[0][1])) {
      check([inputRange[0], left[0][1]], left[0], childL);
      check([right[0][0], inputRange[1]], right[0], childR);
    } else if ((left[0][0] <= inputRange[0] && inputRange[0] <= left[0][1]) &&
      (left[0][0] <= inputRange[1] && inputRange[1] <= left[0][1])) {
      check(inputRange, left[0], childL);
    } else if ((right[0][0] <= inputRange[0] && inputRange[0] <= right[0][1]) &&
      (right[0][0] <= inputRange[1] && inputRange[1] <= right[0][1])) {
      check(inputRange, right[0], childR);
    }
  }
}

const arr = [1, 3, 2, 7, 9, 11];
const mins = rangeMinimum(arr, [
  [1, 4],
  [0, 3]
]);
console.log(mins)