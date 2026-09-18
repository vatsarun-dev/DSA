function reversePairs(a: number[]): number {
    function mergeSort(a:number[]):{arr:number[],count:number} {
  if (a.length <= 1) return { arr: a, count: 0 };

  /**DIVIDING THE ARRAY */
  let mid = Math.floor(a.length / 2);
  let left = mergeSort(a.slice(0, mid));
  let right = mergeSort(a.slice(mid));

  /**this method is use to count the reverse pair from left and right array */
  let count = left.count + right.count,
    l = 0;
  for (let k = 0; k < left.arr.length; k++) {
    while (l < right.arr.length && left.arr[k] > 2 * right.arr[l]) l++;
    count += l;
  }

  /** MERGING THE ARRAY*/
  let i = 0,
    j = 0;
  let result:number[] = [];
  while (i < left.arr.length && j < right.arr.length) {
    if (left.arr[i] <= right.arr[j]) result.push(left.arr[i++]);
    else result.push(right.arr[j++]);
  }

  while (i < left.arr.length) result.push(left.arr[i++]);

  while (j < right.arr.length) result.push(right.arr[j++]);

  return { arr: result, count: count };
}
return mergeSort(a).count
};