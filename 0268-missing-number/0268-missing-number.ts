function missingNumber(nums: number[]): number {
    let max=nums.length
    let allSum=max*(max+1)/2
    let digitSum=nums.reduce((a,b)=>a+b)
   return allSum-digitSum
};