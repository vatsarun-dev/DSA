function productExceptSelf(a: number[]): number[] {
let answer:number[] = new Array(a.length);
answer[0] = 1;
let suffix:number = 1;

for (let i = 1; i < a.length; i++) {
  answer[i] = answer[i - 1] * a[i - 1];
}
for (let i = a.length - 2; i >= 0; i--) {
  suffix *= a[i + 1];
  answer[i] *= suffix;
}

return answer
};