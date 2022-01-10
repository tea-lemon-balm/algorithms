let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  const stack = [];
  const result = [];
  stack.push(node);
  while (stack.length > 0) {
    const cur = stack.pop();
    result.push(cur.value);
    if (cur.children.length === 0) {
    } else if (cur.children.length === 1) {
      stack.push(cur.children[0]);
    } else if (
      cur.children.length === 2 &&
      cur.children[0].value < cur.children[1].value
    ) {
      stack.push(cur.children[1]);
      stack.push(cur.children[0]);
    }
  }
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
