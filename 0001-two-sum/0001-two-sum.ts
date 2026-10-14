function twoSum(a: number[], target: number): number[] {
    let map:Map<number,number>=new Map()
    for(let i=0;i<a.length;i++){
        if(map.has(target-a[i])) return [i,map.get(target-a[i])]
        else map.set(a[i],i)
    }
};