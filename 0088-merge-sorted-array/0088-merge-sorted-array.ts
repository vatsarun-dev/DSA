/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(a: number[], m: number, b: number[], n: number): void {
    let i:number=m-1, j:number=n-1, index:number=m+n-1
    while(i>=0 && j>=0){
        if(a[i]>=b[j]) a[index--]=a[i--]
        else a[index--]=b[j--]
    }
    while(j>=0) a[index--]=b[j--]
};