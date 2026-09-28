function findMin(a: number[]): number {
    let i=0,j=a.length-1
    while(i<j){
        let mid=Math.floor((i+j)/2)
        if(a[mid]>a[j]) i=mid+1
        else if(a[mid]<a[j]) j=mid
        else j--
    }
    return a[i]
};