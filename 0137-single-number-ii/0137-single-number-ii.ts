function singleNumber(nums: number[]): number {
    let map:Map<number,number>=new Map()
     for(let i of nums) map.set(i,(map.get(i)||0)+1)
    for(let key of map.keys()) if(map.get(key)==1) return key
   
};