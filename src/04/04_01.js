const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  for (let j = arr.length; j > 0; j--) {
    let count=0;
    for (let i = 1; i < j; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        count++;
      }
    }
    if(count===0) {
      return arr;
    }
  }
  return arr;
};