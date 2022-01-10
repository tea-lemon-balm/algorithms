# 문제점

- closure가 현재 38_01.js, 38_02.js에서 str 변수에 대해서 작동을 제대로 하지 않는다.
- 의도대로 라면 str은 function decomposition의 변수이고 하위 함수에서 str을 정의하지 않는다면 str은 decomposition 안의 최상위 변수이다.
- str은 callstack이 return 되면 return 후 해당 callstack에 해당하는 변수로 설정된다는 문제가 있다. 