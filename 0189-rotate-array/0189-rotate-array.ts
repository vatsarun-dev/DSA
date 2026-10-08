/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(a: number[], k: number): void {
   k=k%a.length
   function reverseTheArray(left:number, right:number){
    while(left<right){
        [a[left],a[right]]=[a[right],a[left]]
        left++,right--
    }
   }
   reverseTheArray(0,a.length-1)
   reverseTheArray(0,k-1)
   reverseTheArray(k,a.length-1)
}