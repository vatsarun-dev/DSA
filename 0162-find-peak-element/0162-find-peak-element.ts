function findPeakElement(a: number[]): number {
    let low=0,high=a.length-1
    if(a.length ===1) return 0
    while(low<high){
        let mid=Math.floor((low+high)/2)
        if(a[mid]>a[mid+1]) high=mid
        else low=mid+1
    }
    return low

};