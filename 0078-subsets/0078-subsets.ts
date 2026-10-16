function subsets(nums: number[]): number[][] {
    let result:number[][]=[[]]
    for(let n of nums){
        let size= result.length
        for(let i=0;i<size;i++){
            result.push([...result[i],n])
        }
    }
    return result
};