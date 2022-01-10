const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let boolean = false;
  if (str.length === 0) {
    return true;
  }
  const queue = [];
  for (let i = 0; i < str.length; i++) {
    queue.push(str[i]);
    if (
      (queue[queue.length - 1] === ")" && queue[queue.length - 2] === "(") ||
      (queue[queue.length - 1] === "}" && queue[queue.length - 2] === "{") ||
      (queue[queue.length - 1] === "]" && queue[queue.length - 2] === "[")
    ) {
      queue.pop();
      queue.pop();
      boolean = true;
    } else if (
      // ({[)]})
      queue[queue.length - 1] === ")" ||
      queue[queue.length - 1] === "}" ||
      queue[queue.length - 1] === "]"
    ) {
      return false;
    }
  }
  return boolean;
};