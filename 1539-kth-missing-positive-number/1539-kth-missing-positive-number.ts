function findKthPositive(a: number[], k: number): number {
    let low=0
    let high=a.length-1
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        let missing= a[mid]-(mid+1)

        if(missing>=k) high=mid-1
        else low=mid+1
    }
    return low+k
};