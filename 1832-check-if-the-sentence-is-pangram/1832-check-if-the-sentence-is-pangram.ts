function checkIfPangram(sentence: string): boolean {
    let set:Set<string>= new Set(sentence)
    if(set.size!=26) return false
    else return true
};