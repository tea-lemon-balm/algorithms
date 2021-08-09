function countingSort(arr) {
  // array of digits
  let count = Array(10).fill(0);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }

  count = count.map((el, idx) => {
  for (let i = arr.length - 1; i > -1; i--) {
    result[count[arr[i]]] = arr[i];
    console.log(count.toString());
    count[arr[i]] -= 1;
  }
  return result;
}

const arr = [3, 5, 2, 1];
console.log(countingSort(arr).toString());
