function minBitFlips(start: number, goal: number): number {
    let count=0
    let countingBit= start^goal
    while(countingBit!=0){
        countingBit=countingBit &(countingBit-1)
        count++
    }
return count
};