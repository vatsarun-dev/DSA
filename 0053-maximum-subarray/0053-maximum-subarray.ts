function maxSubArray(nums: number[]): number {
    let sum:number =0
    let max:number=nums[0]
    for(let i:number=0;i<nums.length;i++){
        sum+=nums[i]
        if(sum>max){
            max=sum
        }
        if(sum<0){
            sum=0
        }
    }
     return max
};