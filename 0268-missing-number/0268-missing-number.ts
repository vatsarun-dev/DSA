function missingNumber(nums: number[]): number {
    let digit:number=nums.length, sum=0
    for(let i:number=0;i<digit;i++){
        sum+=nums[i]
    }
    let missingNumber:number = digit*(digit+1)/2 -sum
    return missingNumber
};