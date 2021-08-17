function findCombs(arr) {
  const combs = [];
  function AddCombs(arr, comb = []) {
    if (comb.length === 3) {
      combs.push(comb.slice(0));
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      comb.push(arr[i]);
      AddCombs(arr.slice(i + 1, arr.length), comb);
      comb.pop();
    }
  }
  AddCombs(arr);
  return combs;
}
const arr = [1, 2, 3, 4, 5];
const result = findCombs(arr);
console.log(result.forEach((el) => el.toString()));
