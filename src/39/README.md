## Brute force

concepts of 39_01.js
- 구간을 workerNum에 따라서 나누었다.
- combination을 array로 구하였다.
- array의 값은 간막이의 위치를 나타내는데 1이면 0과 1사이에 칸막이가 있다고 본다.
- 칸막이는 slice가 두 번째 parameter에서 -1을 한 idx까지 짜르기 때문에 해당하는
범위 마지막 +1로 지정하였다.
- 칸막이의 갯수는 workerNum -1 이다.
- 구간이 workerNum만큼 구해 지고 각 구간의 합 중 최대값을 combination 마다 구한다.
- combinations의 갯수 만큼 각 combination에서 max 값이 구해서 그 중 최소값을 구한다.

## The efficient Algorithm (reference)
- [0,3], [1,3], [2,3] 과 같을 경우 3부터 마지막까지 합을 계속 구하면서 반복은 계산 시간을 
낭비한다.
- 뒤에서 부터 index가 workerNum -1 까지 합을 각 idx에 구한다.
- combinations를 다 구하는 건 n_C_wokerNum-1 만큼 operation time을 소비하게 된다.
더 효율적인 방법이 있다. 아직은 모르겠다.