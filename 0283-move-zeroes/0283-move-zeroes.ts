/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(a: number[]): void {
let i=0
for(let j=0;j<a.length;j++){
    if(a[j]!=0){
        [a[i],a[j]]=[a[j],a[i]]
        i++
    }
}
};