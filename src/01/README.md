# How to simply calculate an ordered permutation.
- We have the set {1,2,3,4,5}.
- When we pick a number 5 times in the set, then picked numbers create the number,
for example '12345'.
- When these picked numbers is sorted by increasing order, We can fastly get
a specific order.

#### How to do
### Example:
1. Get the order of the subsequence'32415'.
2. The first part of subsequence is 3.
Before this number, a subsequence passed 1 and 2.
It can be think the number of passed subsequences 2*4!.
3. Next to second part '2', a subsequence passed 1. 
Then calculate the number of passed subsequence 2 4! + 1 3!.
4. Next to third part '4', a subsequence passed 1,2,3 and 4.
This case is special. We used numbers 3,2 in the set.
Therefore choices of the third part in the set can be just 1.
Then calculate the number of passed subsequence 2 4!+ 1 3! + 1 2!.
5. We can think the next part iteratly.
Used numbers: 3,2,4. the current number: 1.
passed subsequences: 0 1! + 1 2! + 1 3! + 2 4!
6. Next, the passed subsequences: 0 0! + 0 1! + 1 2! + 1 3! + 2 4!
7. 0 0! + 0 1! + 1 2! + 1 3! + 2 4! = 56.