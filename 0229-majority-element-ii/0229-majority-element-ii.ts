function majorityElement(a: number[]): number[] {

let candidate1: number = 0,
  candidate2: number = 0,
  count1: number = 0,
  count2: number = 0,
  freq1: number = 0,
  freq2: number = 0;

for (let i:number = 0; i < a.length; i++) {
  if (candidate1 == a[i]) count1++;
  else if (candidate2 == a[i]) count2++;
  else if (count1 == 0) {
    candidate1 = a[i];
    count1 = 1;
  } else if (count2 == 0) {
    candidate2 = a[i];
    count2 = 1;
  } else (count1--, count2--);
}
let result: number[] = [];
for (let i of a) {
  if (i === candidate1) freq1++;
  else if (i === candidate2) freq2++;
}
if (freq1 > Math.floor(a.length / 3)) result.push(candidate1);
if (freq2 > Math.floor(a.length / 3)) result.push(candidate2);

return result
 
};