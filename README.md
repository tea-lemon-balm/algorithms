## 30 heapSort
### Important Algorithm
- Queue
Below JavaScript code is amazing when I met first time.
Before the code was saw, I can't think come to mind.

**JavaScript Code**
```js
const swap = (idx1, idx2, arr) => {
  [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]];
}
const dequeue = (arr) => {
  swap(0, arr.length-1,arr);
  arr.pop();
}
const enqueue = (arr) => {
  arr.pop();
}
```
#### Binary heap
##### Heap propertis
- Shape property: a binary heap is a complete binary tree; that is, all levels of the tree, except possibly the last one (deepest) are fully filled, and, if the last level of the tree is not complete, the nodes of that level are filled from left to right.
- Heap property: the key stored in each node is either greater than or equal to (≥) or less than or equal to (≤) the keys in the node's children, according to some total order.

Reference
: [Binary heap](https://en.wikipedia.org/wiki/Binary_heap)


#### Links
- [Queue in Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
- [Binary heap](https://en.wikipedia.org/wiki/Binary_heap)


## 31 Segment Tree
### Important words
- overlap, partially overlap, totally overlap, no overlap
- binary tree, time compelxity O(n log n), space compelxity O(n log n)
### Important things
- [Title: Segment Tree Range Minimum Query - Youtube](https://www.youtube.com/watch?v=ZBHKZF5w4YU&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=66)
- [Segment tree in Wikipedia](https://en.wikipedia.org/wiki/Segment_tree)
- [Coplit 31 in codestates](https://urclass.codestates.com/codeproblem/412743a7-fc76-4b57-87c5-f0f36fb3e2c5)
