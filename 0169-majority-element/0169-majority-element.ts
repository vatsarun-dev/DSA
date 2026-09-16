function majorityElement(nums: number[]): number {
   let freq:number=0
    let ans:number=0
    for(let i of nums){
        if(freq==0) ans=i
        if(ans==i) freq++
        else freq--
    }
    return ans
};