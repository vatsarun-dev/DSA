function mostFrequentEven(nums: number[]): number {
    let map:Map<number,number>=new Map()
    let freq=0,ans=-1
    for(let i of nums){
        if(i%2==0){
            map.set(i,(map.get(i)||0)+1)
        }
    }
    for(let key of map.keys()){
        if(freq < map.get(key)){
            freq=map.get(key)
            ans=key
        }
        else if(freq==map.get(key)) ans=Math.min(ans,key)
    }
    return ans
};