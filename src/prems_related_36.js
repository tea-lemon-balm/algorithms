/**
 * * String Version
 */
// function perms(str, plus = "", strPerms = "") {
//   strPerms += plus;
//   if (strPerms.length === 2) {
//     console.log(strPerms);
//     return;
//   }
//   for (let i = 0; i < str.length; i++) {
//     perms(str.slice(0, i) + str.slice(i + 1), str[i], strPerms);
//   }
//   // if (str.length === 0) {
//   //   console.log(strPerms);
//   // }
// }

// perms("abcde");

/**
 * * Array Version
 */
// const str =
// "abcdewvqwfjqpwhfepoqjfopwefjpqofjpoeqwfj[wqpejd[pqjpej[pjp[j1[pj2[p3j1p[2j[pw2m1[pwm2[wmpqmw[qpsk[pakpskpakd[psakd[akd[sa,p[,sad[psad[,";
const str = "abc";
const chars = str.split("");
function allPerms(str) {
  const arr = [];
  function perms(str, plus = "", strPerms = [], count = 0) {
    if (plus.length > 0) {
      strPerms.push(plus);
    }
    if (strPerms.length === 2) {
      arr.push(strPerms);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      count++;
      console.log(count);
      perms(
        [...str.slice(0, i), ...str.slice(i + 1)],
        str[i],
        strPerms.slice(0),
        count
      );
    }
  }
  perms(str);
  return arr;
}
const data = allPerms(chars);
console.log(data[0].toString());
