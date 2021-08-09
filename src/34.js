const LCS = function (str1, str2) {
  const findSubsequence = (str) => {
    const arr = [];
    function subsequence(str, subStr = "") {
      if (str.length === 0) {
        arr.push(subStr);
        return;
      }
      subsequence(str.slice(0, str.length - 1), subStr);
      subsequence(str.slice(0, str.length - 1), str[str.length - 1] + subStr);
      return;
    }
    subsequence(str);
    return arr;
  };
  const seq1 = findSubsequence(str1).filter((el) =>
    el.length > 1 ? true : false
  );
  const seq2 = findSubsequence(str2).filter((el) =>
    el.length > 1 ? true : false
  );
  const intersection = [...seq1].filter((x) => seq2.includes(x));
  console.log(intersection);
  return intersection.length;
};

// let output = LCS("abcd", "aceb");
let output = LCS("abcdgh", "aedfhr");
console.log(output);
