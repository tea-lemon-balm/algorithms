const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  const command= [[1,0],[-1,0],[0,-1],[0,1]];
  room[src[0]][src[1]]=5;
  room[dst[0]][dst[1]]=6;
  const arr=findDst(room, command, src, dst);
  return Math.min(...arr);
};
// dfs
// dfs의 문제 이다. 탐색을 어떻게 할지 생각해보자.
function findDst(room, command, src, dst) {
  const record=[];
  const width=room[0].length;
  const height=room.length;
  function dfs(room, command, curPos=src, count=0) {
    // 끝
    if(curPos.join('')===dst.join('')) {
      record.push(count);
      // return;
    }
    for(let i=0;i<command.length;i++) {
      // 기록 부분
      const isMove=canMove(command[i], curPos[0], curPos[1], room, width, height);
      curPos= isMove[1];
      if(!isMove[0]) {
        continue;
      } else {
        count += 1;
        const newRoom= room.map(el=> el.slice(0));
        newRoom[curPos[0]][curPos[1]] = 2;
        dfs(newRoom, command, curPos.slice(0), count)
        console.log('turn')
      }
    }
  }
  dfs(room, command);
  return record;
}

// 이동 상하좌우
/**
 * 상 [1,0]
 * 하 [-1,0]
 * 좌 [0,-1]
 * 우 [0,1]
 */
// 이동 후 정상이동인지 확인
function canMove(behave, i, j, room, width, height) {
  if(isOut(i+behave[0], j+behave[1], width, height)) {
    if(room[i+behave[0]][j+behave[1]]!==1 && room[i+behave[0]][j+behave[1]]!==2) {
      i+=behave[0];
      j+=behave[1];
      return [true,[i, j]];
    } else {
      return [false, [i, j]];
    }
  } else {
    return [false, [i, j]];
  }
}

function isOut(i, j, width, height) {
  return !(i<0 || j<0 || i >= height || j >= width)
}

// room = [
//   [1, 1, 0, 1],
//   [0, 1, 0, 1],
//   [0, 0, 0, 1],
// ];
// const src = [1, 0];
// const dst = [1, 2];

const room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
const src = [4, 2];
const dst = [2, 2];
// console.log(canMove([0,1], 1, 0, room, room[0].length, room.length))
console.log(robotPath(room, src, dst));

// const room = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 1, 1, 1, 0, 1],
//   [0, 0, 1, 0, 0, 0, 1],
//   [0, 0, 1, 0, 1, 1, 1],
//   [0, 0, 1, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];
// const src = [0, 3];
// const dst = [7, 3];
// robotPath(room, src, dst)