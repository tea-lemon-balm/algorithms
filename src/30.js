// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx + 1) / 2 - 1);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  let curIdx = heap.length - 1;
  let pIdx = getParentIdx(curIdx);
  while (pIdx >= 0 && heap[curIdx] < heap[pIdx]) {
    swap(curIdx, pIdx, heap);
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
  return heap;
}

function removeRoot(heap) {
  // TODO: 여기에 코드를 작성합니다.
  const root = heap.shift();
  // const last=heap.pop();
  // return insert(heap, last);
  return root;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  // TODO: 여기에 코드를 작성합니다.
  const minSort = [];
  // while(minHeap.length > 1)  {
  for (let i = 0; i < 7; i++) {
    const push = removeRoot(minHeap);
    minSort.push(push);
    const last = minHeap.pop();
    minHeap = insert(minHeap, last);
    console.log(minHeap);
  }
  return minSort;
};

heapSort([2, 5, 4, 9, 6, 7, 10]);
