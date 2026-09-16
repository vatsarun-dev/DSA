function majorityElement(nums: number[]): number {
   let freq:number=0
    let ans:number=0
    for(let i=0;i<nums.length;i++){
        if(freq==0) ans=nums[i]
        if(ans==nums[i]) freq++
        else freq--
    }
    return ans
};