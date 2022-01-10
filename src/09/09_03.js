const stack=[];
function power(base, exponent) {
  if(exponent===1) return base;
  if(exponent===0) return 1;
  let newBase = base;
  let newExponent = 2;
  while (newExponent < exponent) {
    newBase = (newBase * newBase) % 94906249;
    newExponent *= 2;
  }
  // console.log([exponent,newExponent/2])
  newExponent= exponent-newExponent/2;
  // console.log([exponent,newExponent, newBase])
  stack.push(newExponent);
  return newBase *power(base, newExponent)% 94906249
}

console.log(power(3, 2910172));
console.log(stack.reduce((acc,cur)=>acc+cur))