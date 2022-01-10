const robotPath2 = function (room, src, sDir, dst, dDir) {
  // TODO: 여기에 코드를 작성합니다.
  // 0: L, 1: U, 2: R, 3: D
  const sizes = [room.length, room[0].length];
  const dir = [[0, -1], [-1, 0], [0, 1], [1, 0]];
  room[src[0]][src[1]] = 's';
  // console.log(dfs(src, sDir, 0));
  const result = dfs(src, sDir, 0);
  console.log(result);
  // return result;

  return room;


  function dfs(src, sDir, count, level = 0, result = 0) {
    // console.log('123',src.join('')===dst.join(''), sDir, dDir);
    // console.log("l", level);
    // if (level === 4) {
    //   return [src, s
    //   Dir];
    // }
    for (let i = 1; i < 4; i++) {
      const curDir = rot(sDir, i);
      const value = i === 3 ? 1 : i;
      if (src.join('') === dst.join('') && curDir === dDir) {
        return count + value;
      }
      const go = dir[curDir];
      let test = [src[0] + go[0], src[1] + go[1]];
      if (isOut(sizes, test[0], test[1])) continue;
      if (room[test[0]][test[1]] !== 0) continue;
      room[test[0]][test[1]] = count + value + 1;
      // go
      result = dfs(test, curDir, room[test[0]][test[1]], level + 1, result);
      while (!isOut(sizes, test[0] + go[0], test[1] + go[1]) ? room[test[0] + go[0]][test[1] + go[1]] === 0 : false) {
        test = [test[0] + go[0], test[1] + go[1]];
        room[test[0]][test[1]] = count + value + 1;
        result = dfs(test, curDir, room[test[0]][test[1]], level + 1, result);
      }
      // go end
      result = dfs(test, curDir, room[test[0]][test[1]], level + 1, result);
      // console.log(result);
    }
    return result;
  }
};


function isOut(sizes, i, j) {
  return i < 0 || j < 0 || i >= sizes[0] || j >= sizes[1]
}

function rot(start, i) {
  return (start + i) % 4;
}

// console.log(rot(3,1));

let room = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 1],
];
let src = [3, 0];
let sDir = 3;
let dst = [2, 2];
let dDir = 2;
let output = robotPath2(room, src, sDir, dst, dDir);
print(output)

room = [
  [1, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
];
src = [1, 0];
sDir = 4;
dst = [1, 2];
dDir = 2;
output = robotPath2(room, src, sDir, dst, dDir)
print(output)

room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
src = [4, 2];
sDir = 1;
dst = [2, 2];
dDir = 3;
output = robotPath2(room, src, sDir, dst, dDir);
print(output)

room = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
src = [0, 3];
sDir = 1;
dst = [7, 3];
dDir = 2;
output= robotPath2(room, src, sDir, dst, dDir)
print(output)


function print(output) {
  if (Number.isInteger(output)) {
    return output
  } else {
    for (let x of output) {
      console.log(x);
    }
  }
}