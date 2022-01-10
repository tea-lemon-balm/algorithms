const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  const lPT=[];
  for(let i=0;i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++) {
      for(let k=j+1;k<arr.length;k++) {
        const product=arr[i]*arr[j]*arr[k]
        lPT.push(product);
      }
    }
  }
  lPT.sort((a,b)=> b-a);
  return lPT[0];
};
