let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let count = 0;
  const result = [];
  const stack = [];
  stack.push(node);
  while (stack.length > 0) {
    count++;
    if (node.children.length > 0) {
      // Traversal
      stack.push(node);
      if (!result.includes(node.value)) result.push(node.value);
      node = node.children.shift();
    } else {
      // Traversal
      if (!result.includes(node.value)) result.push(node.value);
      node = stack.pop();
    }
  }
  console.log("V:", result, ", |V|:", result.length, ", |E|:", result.length - 1, ", |V|+|E|:", count, ", O(|V|+|E|)");
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

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output);