function minOperations(s: string): number {
    const n = s.length;
    
    // Case 0: Already sorted
    let isSorted = true;
    for (let i = 0; i < n - 1; i++) {
        if (s[i] > s[i + 1]) {
            isSorted = false;
            break;
        }
    }
    if (isSorted) return 0;
    
    // Case -1: Unsorted and length is 2
    if (n === 2) return -1;
    
    // Find absolute min and max characters
    let mn = s[0];
    let mx = s[0];
    for (let i = 1; i < n; i++) {
        if (s[i] < mn) mn = s[i];
        if (s[i] > mx) mx = s[i];
    }
    
    // Case 1: Ideal boundary element is already locked in place
    if (s[0] === mn || s[n - 1] === mx) {
        return 1;
    }
    
    // Case 2: Middle check (Addresses your "jgg" issue)
    // If a min or max character exists in the middle, it takes 2 operations.
    for (let i = 1; i < n - 1; i++) {
        if (s[i] === mn || s[i] === mx) {
            return 2;
        }
    }
    
    // Case 3: Absolute worst-case boundary lock
    // Only reachable if s[0] === mx and s[n - 1] === mn with NO mn/mx in the middle
    return 3;
}
