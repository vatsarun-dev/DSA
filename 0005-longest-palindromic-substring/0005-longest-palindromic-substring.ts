function longestPalindrome(s: string): string {
    let maxLength= 1,start=0
    function expandString( l:number, r:number){
        while(l>=0 && r<s.length && s[l]==s[r]){
            l--,r++
        }
        l++,r--
        if(r-l+1>maxLength){
            start=l
            maxLength=r-l+1
        }
    }
    for(let i=0;i<s.length;i++){
        expandString(i,i)
        expandString(i,i+1)
    }
    return s.substring(start,start+maxLength)
};