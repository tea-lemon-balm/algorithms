function test(matrix) {
  if(matrix[0][0]===1) {
    return 0;
  }
  // const newMatrix=matrix.slice(0);
  const newMatrix=matrix.map(el=>el.slice(0));
  newMatrix[0][0]=1;
  test(newMatrix);
  console.log(matrix);
}

function test2(arr) {
  if(arr[0]===1) {
    return 0;
  }
  const newArr=arr.slice(0);
  newArr[0]=1;
  test2(newArr);
  console.log(arr);
}

const mat= Array(5).fill(0).map(el=>Array(5).fill(0));
// console.log(mat);
test(mat);
const arr=Array(5).fill(0)
test2(arr);