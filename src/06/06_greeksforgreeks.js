let N = 9;
function solveSuduko(grid, row, col)
{
  if (row === N - 1 && col === N) return true;
  // col === N, then row++;
  if (col === N) {
    row++;
    col = 0;
  }
  if (grid[row][col] !== 0) return solveSuduko(grid, row, col + 1);
  for(let num = 1; num < 10; num++) {
    if (isSafe(grid, row, col, num)) {
      grid[row][col] = num;
      if (solveSuduko(grid, row, col + 1)) return true;
    }
    grid[row][col] = 0;
  }
  return false;
}

function isSafe(grid, row, col, num)
{
  for(let x = 0; x <= 8; x++) if (grid[row][x] === num) return false;
  for(let x = 0; x <= 8; x++) if (grid[x][col] === num) return false;
  let startRow = row - row % 3, startCol = col - col % 3;
  for(let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i + startRow][j + startCol] === num) {
        return false;
      }
      return true;
    }
  }
}

// Driver Code
let grid = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
  [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
  [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
  [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
  [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
  [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
  [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ]

if (solveSuduko(grid, 0, 0))
  console.log(grid)
else
  console.log('no')