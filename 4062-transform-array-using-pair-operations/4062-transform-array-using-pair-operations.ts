function canTransform(source: number[], target: number[]): boolean {
    let sum1=0, sum2=0
    for(let i=0;i<source.length;i++){
        sum1+=source[i]
        sum2+=target[i]
    }
    for(let i=0;i<source.length-1;i++){
        let j=i+1
        let delta=source[i]+source[j]-target[i]
        source[i]=source[i] + source[j] - delta
        source[j]=delta
    }
    if(sum1!=sum2) return false
     return true
};