// const coinChange = function (total, coins) {
//   // TODO: 여기에 코드를 작성합니다.
//   let count = 0;
//   const visited = [];
//   const finCoinChange = (total, coins, sum = 0, log = "") => {
//     // recursive case
//     for (let i = 0; i < coins.length; i++) {
//       sum += coins[i];
//       log += String(coins[i]);
//       log = log.split("").sort().join("");
//       if (sum > total || visited.includes(log)) {
//         return;
//       }
//       if (log.length > 1) visited.push(log);
//       // base case
//       if (sum === total) {
//         count++;
//         return;
//       }
//       finCoinChange(total, coins, sum, log);
//     }
//   };
//   finCoinChange(total, coins);
//   return count;
// };

// console.log(coinChange(10, [1, 5]));

function count(S, m, n) {
  // If n is 0 then there is 1 solution
  // (do not include any coin)
  if (n == 0) return 1;

  // If n is less than 0 then no
  // solution exists
  if (n < 0) return 0;

  // If there are no coins and n
  // is greater than 0, then no
  // solution exist
  if (m <= 0 && n >= 1) return 0;

  // count is sum of solutions (i)
  // including S[m-1] (ii) excluding S[m-1]
  const result = count(S, m - 1, n) + count(S, m, n - S[m - 1]);
  return result;
}

arr = [1, 5];
console.log(count(arr, arr.length, 10));
