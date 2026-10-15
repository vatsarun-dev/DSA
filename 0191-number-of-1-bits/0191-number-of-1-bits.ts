function hammingWeight(n: number): number {
    let count=0,bits=""
    while(n>0){
        let total=n%2
        bits=total+bits
        n=Math.floor(n/2)
    }
    for(let i of bits){
        if(Number(i) &1) count++
    }
    return count
};