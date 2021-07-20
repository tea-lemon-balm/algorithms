function ocean(target, type) {
  // TODO: 여기에 코드를 작성합니다.
  const memo = [];
  pickUp(target, type, memo);
  return memo.length;
}

function pickUp(target, type, memo, sum = 0, path = []) {
  for (let node of type) {
    path.push(node);
    sum = sum + node;
    // condition 1
    const strPath = path
      .slice(0)
      .sort((a, b) => a - b)
      .join("");
    if (memo.includes(strPath)) {
      path.pop();
      sum -= node;
      return sum;
    } else if (sum === target) {
      memo.push(strPath);
      path.pop();
      sum -= node;
      return sum;
    } else if (sum > target) {
      path.pop();
      sum -= node;
      return sum;
    } else if (sum > 0 && node < path[path.length - 2]) {
      path.pop();
      sum -= node;
      continue;
    }
    // condition 1 end
    sum = pickUp(target, type, memo, sum, path);
    // condition 2
    path.pop();
    sum -= node;
  }
  return sum;
}
// let output = ocean(50, [10, 20, 50]);
// let output = ocean(100, [10, 20, 50, 55]);
let output = ocean(2573, [48, 72, 83, 25, 64, 75, 36]);
console.log(output);
