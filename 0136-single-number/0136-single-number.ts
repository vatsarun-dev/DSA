function singleNumber(nums: number[]): number {
    let xor=0
    for(let i of nums) xor^=i
    return xor
};