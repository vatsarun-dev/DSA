/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(a: number[], m: number, b: number[], n: number): void {
   let index:number =m+n-1
   let i:number=m-1
   let j:number=n-1
   while(i>=0 && j>=0){
    if(a[i]<b[j]){
        a[index--]=b[j--]
    }
    else{
        a[index--]=a[i--]
    }
   }
   while(j>=0){
    a[index--]=b[j--]
   }
};