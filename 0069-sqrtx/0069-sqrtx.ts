function mySqrt(x: number): number {
    let low =1, high=x,ans=0
    if(x===0) return 0
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(mid*mid ==x) return mid
        else if(mid*mid >x) high=mid-1
        else {
            ans=mid
            low=mid+1
        }
    }
    return ans
};