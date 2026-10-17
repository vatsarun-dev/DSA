function subsets(nums: number[]): number[][] {
    let ans:number[]=[]
    let result:number[][]=[]
    function sub(nums:number[],ans:number[],n:number):number[][]{
        if(n===nums.length){
            result.push([...ans])
            return 
        }

        // include step
        ans.push(nums[n])
        sub(nums,ans,n+1)
        // exclude step
        ans.pop()
        sub(nums,ans,n+1)
    }
    sub(nums,ans,0)
    return result
};