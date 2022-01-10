const robotPath2 = function (room, src, sDir, dst, dDir) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  sDir -= 1;
  dDir -= 1;
  // 0: U, 1: R, 2: D, 3: L
  const sizes = [room.length, room[0].length];
  const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  room = room.map(arr => arr.map(el => {
    if (el === 1) return -1;
    return 0
  }));
  room[src[0]][src[1]] = 's';
  dfs(src, sDir, 0, dir);
  return Math.min(...result);

  function dfs(pos, dir, count, control, level=0) {
    if (pos.join('') === dst.join('')) {
      const fininalDirCount= Math.abs(dir - dDir)===3 ? 1 : Math.abs(dir - dDir);
      result.push(count+fininalDirCount);
      return 'finish';
    }
    for (let i = 0; i < 4; i++) {
      const newDir = (dir + i) % 4;
      const newPos = [pos[0] + control[newDir][0], pos[1] + control[newDir][1]];
      let newCount = count;
      if (i === 0) {
        newCount += i;
        if(level===0) {
          newCount+=1;
        }
      }
      else if (i === 3) newCount = newCount + 2;
      else newCount += i + 1;
      // console.log(newPos,sizes,isIn(sizes, newPos[0], newPos[1]))
      if (isIn(sizes, newPos[0], newPos[1]))
        if (isRoad(room[newPos[0]][newPos[1]]) &&
          isBetter(newCount, room[newPos[0]][newPos[1]])) {
          room[newPos[0]][newPos[1]] = newCount;
          dfs(newPos, newDir, newCount, control, level+1);
        }
    }
  }
};

function isIn(sizes, i, j) {
  return i >= 0 && j >= 0 && i < sizes[0] && j < sizes[1]
}

function isRoad(value) {
  if (value === -1) return false;
  return true;
}

function isBetter(nextCount, visitedCount) {
  if (visitedCount === 0) return true;
  else if (visitedCount > 0)
    if (nextCount < visitedCount) return true;
  return false;
}

let room = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 1],
];
let src = [3, 0];
let sDir = 1;
let dst = [2, 2];
let dDir = 2;
let output = robotPath2(room, src, sDir, dst, dDir);
print(output)
console.log('wfowp')
//
// room = [
//   [1, 1, 0, 1],
//   [0, 1, 0, 1],
//   [0, 0, 0, 1],
// ];
// src = [1, 0];
// sDir = 4;
// dst = [1, 2];
// dDir = 2;
// output = robotPath2(room, src, sDir, dst, dDir)
// print(output)
// console.log('wfowp')
// room = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0],
//   [0, 1, 0, 0, 0, 0],
//   [0, 0, 1, 1, 1, 0],
//   [1, 0, 0, 0, 0, 0],
// ];
// src = [4, 2];
// sDir = 1;
// dst = [2, 2];
// dDir = 3;
// output = robotPath2(room, src, sDir, dst, dDir);
// print(output)
//
// room = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 1, 1, 1, 0, 1],
//   [0, 0, 1, 0, 0, 0, 1],
//   [0, 0, 1, 0, 1, 1, 1],
//   [0, 0, 1, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];
// src = [0, 3];
// sDir = 1;
// dst = [7, 3];
// dDir = 2;
// output = robotPath2(room, src, sDir, dst, dDir)
// print(output)
//
//
function print(output) {
  if (Number.isInteger(output)) {
    return output
  } else {
    for (let x of output) {
      console.log(x);
    }
  }
}