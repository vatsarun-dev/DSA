function findMaxConsecutiveOnes(a: number[]): number {
let freq=0, maxFreq=0
for(let i of a){
    if(i==1){
        freq++
        maxFreq=Math.max(freq,maxFreq)
    }else freq=0
}
return maxFreq
};