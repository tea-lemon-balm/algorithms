
The file 22_01.js is the correct solution of this problem.

# Rotate the input matrix to 90 degree at n times.


Problem: 
- Rotate the input matrix to 90 degree at n times.

Answer:

Relate between the matrix A and the rotated matrix B.
```js
const m= A.length;
const n= A[0].length;
B[j][m-i-1] = A[i][j];
```
Then We can use the relation on recursion.

Test case: 
```js
// The input matrix 
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// Before excuting the function rotateMatrix, see the matrix element to `console.log`   
console.log(matrix[0][0]); // --> 1
console.log(matrix[3][2]); // --> 15
// After excuting the function rotateMatrix, see the matrix element to `console.log`
const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix[0][0]); // --> 13
console.log(rotatedMatrix[3][2]); // --> 8
```