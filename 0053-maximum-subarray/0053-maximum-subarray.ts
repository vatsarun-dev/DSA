function maxSubArray(nums: number[]): number {
   let maxSum=Math.max(...nums), sum=0
   if(nums.length ==1) return nums[0]
   for(let i of nums){
    sum+=i
    if(maxSum<sum) maxSum=sum
    if(sum<0) sum=0
   }
   return maxSum
};