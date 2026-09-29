function smallestDivisor(nums: number[], threshold: number): number {
    let low=1, high=Math.max(...nums)
   while(low<=high){
    let sum=0
     let mid =Math.floor((low+high)/2)
    for(let i=0;i<nums.length;i++){
        sum+=Math.ceil(nums[i]/mid)
    }
    if(sum<=threshold) high=mid-1
    else low=mid+1
   }
    return low
};