const isSubsetOf = function (base, sample) {
  const obj={};
  for(let i=0;i<base.length;i++) {
    obj[base[i]]=1;
  }
  for(let element of sample) {
    if(!obj[element]) {
      return false;
    }
  }
  return true;
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true