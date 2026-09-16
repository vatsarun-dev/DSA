/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(a: number[]): void {
let i:number=0
  let j:number=0
  let  k:number=a.length-1
while(j<=k){

  if(a[j]==0){
    [a[j],a[i]]=[a[i],a[j]]
     j++, i++
  }
  else if(a[j]==1){
    j++
  }
  else {

    [a[k],a[j]]=[a[j],a[k]]
    k--
  }
}
};