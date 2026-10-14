function sumOfUnique(a: number[]): number {
    let map:Map<number,number>= new Map(),sum=0
    for(let i=0;i<a.length;i++) map.set(a[i],(map.get(a[i])||0)+1)
    for(let key of map.keys()) if(map.get(key)==1) sum+=key
    return sum
};