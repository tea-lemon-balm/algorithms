# 

### Algorithm 1 (not complete)
1. 시작 방향을 잡는다.
2. 직진하면서 visited에 추가한다.
3. 막히면 방향을 바꾼다.
4. 2-3을 반복한다.
5. 4방향을 모두 직진할 수 없으면 끝낸다.


### Algorithm 2 (complete)
#### Array version.
1. Add 0-row vector in matrix on the array `visited`.
2. Remove 0-row vector in matrix.
3. Rotate matrix.
4. Iterate 1-3.
5. If the length of the matrix is 0, return `visited`. 

#### String version
1. Transform from the joined 0-row vector to the string in matrix on the string `str`.
2. Add the string to `str`.
3. Remove 0-row vector in matrix.
4. Rotate matrix.
5. Iterate 1-4.
6. If the length of the matrix is 0, return `str`.

#### Problem
22 the rotating matrix doesn't work well in this problem.
Therefore the code 22 is edited.
The file about edited code is `rot.js`. 