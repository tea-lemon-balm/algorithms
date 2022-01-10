const coinChange = function (total, coins) {
  // TODO: 여기에 코드를 작성합니다.
  let count = 0;

  function counting(set, choCoins = []) {
    const sumCoins = choCoins.reduce((acc, cur) => acc + cur, 0);
    if (sumCoins === total) {
      count++;
      return 0;
    } else if (sumCoins > total) {
      return 0;
    }
    for (let i = 0; i < set.length; i++) {
      counting(set.slice(i), choCoins.concat(set[i]));
    }
  }

  counting(coins);
  return count;

};


console.log(coinChange( 10,[1, 5]))