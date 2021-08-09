// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx + 1) / 2 - 1);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  // let idx= heap.length;
  // heap.push(item);
  // let parentIdx=getParentIdx(idx);
  // if(parentIdx<0) parentIndex = 0;
  // let parentVal = heap[parentIdx];
  // const pushedVal = heap[idx];
  // while(idx>0 && parentVal > pushedVal) {
  //   parentIdx=getParentIdx(idx);
  //   swap(idx, parentIdx);
  //   idx=parentIdx;
  //   parentVal=heap[Math.max(parentIndex,0)];
  // }
  // return [...heap, item];
  return heap.concat(item);
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

let output = binaryHeap([5, 4, 3, 2, 1]);
console.log(output);
