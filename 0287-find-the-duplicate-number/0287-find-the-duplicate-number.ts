function findDuplicate(a: number[]): number {
let copy:number[] = new Array(a.length).fill(0);

for (let i = 0; i < a.length; i++) {
  copy[a[i]]++;
  if (copy[a[i]] > 1) return a[i]
}
};