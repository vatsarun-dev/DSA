function checkValidString(s: string): boolean {
    let low = 0;
    let high = 0;

    for (let ch of s) {
        if (ch === '(') {
            low++;
            high++;
        } 
        else if (ch === ')') {
            low--;
            high--;
        } 
        else {
            // '*' can be ')', '(' or ''
            low--;
            high++;
        }

        // Minimum cannot go below 0
        low = Math.max(0, low);

        // Even maximum possible opens became negative
        if (high < 0) {
            return false;
        }
    }

    return low === 0;
}