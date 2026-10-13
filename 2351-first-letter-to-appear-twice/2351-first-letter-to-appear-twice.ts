function repeatedCharacter(s: string): string {
    let set:Set<string>=new Set()
    for(let i=0;i<s.length;i++){
        if(set.has(s[i])) return s[i]
        else set.add(s[i])
    }
};