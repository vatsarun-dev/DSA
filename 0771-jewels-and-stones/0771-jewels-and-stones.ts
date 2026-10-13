function numJewelsInStones(jewels: string, stones: string): number {
    let set:Set<string>= new Set(jewels),count=0
    for(let i of stones) if(set.has(i)) count++
    return count

};