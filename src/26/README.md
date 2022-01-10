# Largest Sum of Contiguous Subarray (LSCS)
### 주요하게 생각해야 할 점.
- sum=0은 the summation of subarray의 초기값이다.
- sum<0이면 sum =0으로 the summation of subarray 가 초기화된다.
- 최대값은 m이고 m은 초기에 -infinity이다.
- arr은 input array이다.
- sum+=arr[i] and sum > max 이면 max=sum 이다.
- 초기화 되기전 최대값을 max에 저장한다.