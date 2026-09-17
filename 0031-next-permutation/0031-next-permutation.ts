/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(a: number[]): void {
let i: number = a.length - 2;
let j: number = a.length - 1;
let breakingPoint: number = -1;
while (i >= 0) {
    if (a[i] < a[i + 1]) {
        breakingPoint = i;
        break;
    }
    i--;
}

if (breakingPoint === -1) a.reverse();
else {
  while (j > 0) {
    if (a[j] > a[breakingPoint]) {
      [a[breakingPoint], a[j]] = [a[j], a[breakingPoint]];
      break;
    } else j--;
  }

  let left: number = breakingPoint + 1,
    right: number = a.length - 1;

  while (left < right) {
    [a[left], a[right]] = [a[right], a[left]];
    (left++, right--);
  }
}

};