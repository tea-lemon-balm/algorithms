const rangeMinimum = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.
  const result = [];
  arr = findSegmentTree(arr);
  for (let range of ranges) {
    const pushMe = calculate(arr, range)
    console.log(pushMe);
    result.push(pushMe);
  }
  return result;
};

/**
 * ! 먼저 segment Tree를 생성하는 코드를 작성하자.
 * ! Array로 Tree를 구성한다.
 * ! 빈 부분은 Null로 값을 준다.
 * ! 현재 [arr, isOver] 형태로 queue 넣어서 Null 부분을 해결하려고 하였다.
 * ! arr: Array, isOver: boolean
 *
 * ! isOver는 현재 left, right 중 하나라도 length가 2이상이면 false가 된다.
 * ! 문제가 있는데 length가 1일 때 잘 생각해보면 숫자가 있을 때와 Null일 때를 구분 해야 하지만
 * ! 구분을 해서 진행해야 하지만 잘 되지 않고 있다.
 * @param arr
 * @returns {*[]}
 */

// Queue로 만들어야 한다.
function findSegmentTree(arr) {
  const queue = [];
  const segmentTree = [];
  queue.push([arr, false]);
  while (queue.length > 0) {
    // console.log("Q",queue);
    const node = queue.shift();
    const len = node[0].length;
    // len이 1일 때만 특별하고 나머지는 특별하지 않다.
    // node[1] 이 true, false 중 하나를 갖으면 어떻게 해야할지 알 수 있다.
    if (len === 1) {
      // console.log(node);
      if (!node[1] && Number.isInteger(...node[0])) {
        // console.log(node);
        queue.push([[null], true]);
        queue.push([[null], true]);
      }
      segmentTree.push(...node[0]);
      continue;
    }
    const half = Math.ceil(len / 2);
    const left = node[0].slice(0, half);
    const right = node[0].slice(half, len);
    // over 가 false면 한 개짜리 배열을 null 두개로 쪼갠다.
    const over = isOver(left, right);
    if (!node[1]) {
      queue.push([left, over]);
      queue.push([right, over]);
    }
    // 한 개짜리 배열은 더 하지 않는다.
    // console.log("wer",node[0], sum(node[0]));
    segmentTree.push(sum(node[0]));
  }
  return segmentTree;
}

function isOver(left, right) {
  return !(left.length > 1 || right.length > 1)
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

function calculate(segmentTree, inputRange) {
  let sum = 0;
  check(inputRange);
  return sum;

  function check(inputRange, range = [0, arr.length - 1], parent = 0) {
    const len = range[1] - range[0] + 1
    let left, right, childL, childR;
    childL = 2 * parent + 1;
    childR = 2 * parent + 2;
    left = [[range[0], range[0] + Math.ceil(len / 2) - 1], childL];
    right = [[range[1] - Math.floor(len / 2) + 1, range[1]], childR];
    // console.log('123', fixedRange, len, left[1], right[1])
    if (range.join(',') === inputRange.join(',')) {
      console.log("123", segmentTree[parent])
      sum += segmentTree[parent];
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
  [1, 4]
]);