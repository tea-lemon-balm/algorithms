const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  const good=new Set(base)
  for(let i=0;i<sample.length;i++) {
    if( !good.has(sample[i]) ) {
      return false
    }
  }
  return true
};
