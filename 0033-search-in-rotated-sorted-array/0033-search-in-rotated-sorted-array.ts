function search(a: number[], target: number): number {
    let i=0, j=a.length-1
    while(i<=j){
        let mid=Math.floor((i+j)/2)
        if(target==a[mid]) return mid
        if(a[i]<=a[mid]){
            if(a[i]<=target && target<a[mid]) j=mid-1
            else i=mid+1
        }
        else{
            if(a[mid]<target && target<=a[j]) i=mid+1
            else j=mid-1
        }
    }
    return -1
};