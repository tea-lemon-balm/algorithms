function ocean(target, type) {
  type = type.filter(el => el <= target)
  let bag = Array(target + 1).fill(0);
  for (let i = 0; i < type.length; i++) bag[type[i]] = 1;

  for (let i = 0; i < type.length; i++) {
    for (let j = 0; j <= type.length; j++) {
      if (type[i] === type[j]) continue;
      if (type[j] <= target) {
        bag[j] += bag[type[j] - type[i]];
        // console.log(j, bag)
      }
    }
  }
  return bag;
}

// let output = ocean(50, [10, 20, 50]);
// console.log(output); // 4
output = ocean(10, [1, 8, 3, 15])
console.log(output);