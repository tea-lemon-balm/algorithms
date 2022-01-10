const bubbleSort = function (arr, count=0) {
  // TODO: 여기에 코드를 작성합니다.
  for(let j=1;j<arr.length;j++) {
    for(let i=0;i<arr.length-j;i++) {
      if(arr[i]>arr[i+1]) {
        count++;
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
      }
    }
    if(count===0) return arr;
  }
  return arr;
};