function findMaxConsecutiveOnes(a: number[]): number {
let maxCount:number = 0
let  count:number = 0;
for (let i:number = 0; i < a.length; i++) {
  if (a[i] == 1) {
    count++;
    maxCount = Math.max(count, maxCount);
  } else count = 0;
}
return maxCount
};