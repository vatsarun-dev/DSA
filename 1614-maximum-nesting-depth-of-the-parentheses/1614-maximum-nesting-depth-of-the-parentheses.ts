function maxDepth(s: string): number {
    let maxParam=0, count=0
    for(let i of s){
        if(i==="("){
            count++
            maxParam=Math.max(count,maxParam)
        }else if(i==")") count--
    }
    return maxParam
};