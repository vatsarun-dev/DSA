function maxProduct(a: number[]): number {
let prefix:number = 1,
  suffix:number = 1,
  ans:number = 0;
if(a.length ===1) return a[0]
else{
    for (let i:number = 0; i < a.length; i++) {
  if (prefix === 0) prefix = 1;
  if (suffix === 0) suffix = 1;
  prefix = prefix * a[i];
  suffix = suffix * a[a.length - i - 1];
  ans = Math.max(ans, Math.max(prefix, suffix));
}
return ans
}

};