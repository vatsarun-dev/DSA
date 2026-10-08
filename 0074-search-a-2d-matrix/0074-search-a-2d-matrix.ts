function searchMatrix(a: number[][], target: number): boolean {
 let row= a.length, col=a[0].length
 let low=0, high= (row*col)-1
 while(low<=high){
    let mid=Math.floor((low+high)/2)
    let value= a[Math.floor(mid/col)][mid%col]
    if(value ==target) return true
    else if(value  >target) high=mid-1
    else low=mid+1
 }
 return false

};