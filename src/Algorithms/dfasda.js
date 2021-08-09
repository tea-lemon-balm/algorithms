// function perms(total=[],arr=[], list=[1,2,3],n=3){
//   if(arr.length===3) {
//     total.push(arr);
//     return total;
//   }
//   total=perms()
// }

// function permsList(n = 3) {
//   const total = [];
//   const range = [1, 2, 3];
//   const len = range.length;
//   const perms = (arr = [], index = 0) => {
//     if (arr.length === 3) {
//       return total.push(arr.slice(0));
//     }
//     for (let i = 0; i < len; i++) {
//       arr.push(range[i]);
//       perms(arr, index + 1);
//       arr.pop();
//     }
//   };
//   perms();
//   return total;
// }
// permsList();

function permsList(n = 3) {
  const total = [];
  const range = [1, 2, 3];
  const len = range.length;
  const perms = (arr = [], index = 0, range = [1, 2, 3]) => {
    if (arr.length === 3) {
      return total.push(arr.slice(0));
    }
    for (let i = 0; i < len; i++) {
      arr.push(range[i]);
      perms(arr, index + 1, range.slice(i));
      arr.pop();
    }
  };
  perms();
  return total;
}
permsList();
