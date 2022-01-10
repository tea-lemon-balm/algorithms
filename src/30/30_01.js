// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item)
  const last = heap.length - 1;
  let idx = last;
  let parIdx = getParentIdx(idx);
  if (parIdx === -1) return heap;
  while (parIdx !== -1 && heap[parIdx] > heap[idx]) {
    swap(parIdx, idx, heap);
    idx = getParentIdx(idx);
    parIdx = getParentIdx(idx);
  }
  return heap;
}

function removeRoot(heap) {
  // TODO: 여기에 코드를 작성합니다.
  if (heap.length > 1) swap(0, heap.length - 1, heap);
  return heap.pop();
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const swapHeap = (heap, parent = 0, left = 1, right = 2) => {
  const lastIdx = heap.length - 1;
  if (lastIdx === -1 || lastIdx === 0 || lastIdx === left - 1) return heap;
  if (lastIdx === left) {
    if (heap[parent] > heap[left]) swap(parent, left, heap);
    return heap;
  }

  if (heap[left] < heap[right]) {
    if (heap[parent] <= heap[left]) return heap;
    swap(parent, left, heap);
    return swapHeap(heap, left, 2 * left + 1, 2 * left + 2);
  } else if (heap[left] >= heap[right]) {
    if (heap[parent] <= heap[right]) return heap;
    swap(parent, right, heap);
    return swapHeap(heap, right, 2 * right + 1, 2 * right + 2);
  }
  return heap;
}

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  // TODO: 여기에 코드를 작성합니다.
  const sortedArr = [];
  while (minHeap.length > 0) {
    // console.log("minHeap", minHeap);
    sortedArr.push(removeRoot(minHeap));
    // console.log(minHeap);
    minHeap = swapHeap(minHeap);
    // console.log(minHeap, sortedArr);
  }
  return sortedArr;
};

// let output = heapSort([5, 4, 3, 2, 1]);
// console.log(swapHeap([ 10, 5, 7, 9, 6 ]));
let output;
// output = heapSort([9, 6, 7, 4, 5, 2, 10]);
// console.log(output);
// const heap=[3, 1, 21];
// console.log(swapHeap(heap));

let arr = Array(100).fill(0).map(el => getRandomInt(100))

// console.log(arr);
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

output = heapSort(arr);
console.log(output);