function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.
  // N 가지의 재료
  // M 가지
  const result = [];
  const newStuff = stuffArr.filter((stuff) => !/0{3}/.test(stuff));

  function recursion(arr = [], lookup = newStuff) {
    if (arr.length === choiceNum) result.push(arr);
    for (let i = 0; i < lookup.length; i++) {
      const clone = [...lookup];
      const picked = clone.splice(i, 1);
      recursion([...arr, ...picked], clone);
    }
  }
  recursion();
  return result;
}
