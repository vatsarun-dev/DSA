function singleNumber(nums: number[]): number[] {
    let xor=0
    for(let i of nums) xor^=i
    let mask =xor &-xor
    let a=0,b=0
    for(let i of nums){
        if((i &mask)!==0) a^=i
        else b^=i
    }
    return [a,b]
};