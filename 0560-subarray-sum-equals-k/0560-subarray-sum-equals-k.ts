function subarraySum(nums: number[], k: number): number {
    let map:Map<number,number>=new Map()
    let sum=0,count=0
    map.set(0,1)
    for(let i of nums){
        sum+=i
        let rem= sum-k
        if(map.has(rem)) count+=map.get(rem)
        map.set(sum,(map.get(sum)|| 0)+1)
    }
    return count
};