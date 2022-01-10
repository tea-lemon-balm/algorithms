# Is any subset of the set?
### What is a set?
How can I make a set using Javascript?

Answer: Hash Table can think of a set.

Its keys can think of the elements of set.

This is a code.
```js
// TODO: This code make a set in the JavaScript Object.
const arr=[1,2,3,4,5];
const set={};
for(let element of arr) {
  set[element]=1;
}
```
```js
// TODO: This code make a set in the JavScript built-in Set Object.
const arr=[1,2,3,5,];
const set= new Set(arr);
```
The value 1 of the object `set` represent their key is the element of the set.
Then We just solve this problem in time complexity O(n+1). this is worst case.

Reference code solve this problem in worst case O(n*m).
Sorting algorithm O(n log n), O(m log m) &
Iterative comparison between any set and any subset is to be the worst case O(n m).

### example:
let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false