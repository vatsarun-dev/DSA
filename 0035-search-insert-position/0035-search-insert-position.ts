function searchInsert(a: number[], target: number): number {
    let i=0, j=a.length-1
    while(i<=j){
        let mid=Math.floor((i+j)/2)
        if(target>a[mid]) i=mid+1
        else if(target<a[mid]) j=mid-1
        else return mid
    }
    return i
};