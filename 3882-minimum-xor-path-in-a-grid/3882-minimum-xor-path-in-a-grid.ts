function minCost(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    
    // DP array tracking reachable XOR values for the current row's columns
    // dp[j][k] is true if XOR value k is reachable at column j
    let dp: boolean[][] = Array.from({ length: n }, () => new Array(1024).fill(false));
    
    // Initialize the starting position (0, 0)
    dp[0][grid[0][0]] = true;
    
    // Initialize the first row (can only move right from the left column)
    for (let j = 1; j < n; j++) {
        const val = grid[0][j];
        for (let k = 0; k < 1024; k++) {
            if (dp[j - 1][k]) {
                dp[j][k ^ val] = true;
            }
        }
    }
    
    // Process the remaining rows
    for (let i = 1; i < m; i++) {
        const nextDp: boolean[][] = Array.from({ length: n }, () => new Array(1024).fill(false));
        
        for (let j = 0; j < n; j++) {
            const val = grid[i][j];
            
            // Move down from the cell above (from dp[j])
            for (let k = 0; k < 1024; k++) {
                if (dp[j][k]) {
                    nextDp[j][k ^ val] = true;
                }
            }
            
            // Move right from the cell to the left (from nextDp[j - 1])
            if (j > 0) {
                for (let k = 0; k < 1024; k++) {
                    if (nextDp[j - 1][k]) {
                        nextDp[j][k ^ val] = true;
                    }
                }
            }
        }
        // Roll over the current row states to the next row
        dp = nextDp;
    }
    
    // Find the smallest reachable XOR value at the bottom-right cell
    for (let k = 0; k < 1024; k++) {
        if (dp[n - 1][k]) {
            return k;
        }
    }
    
    return 0;
}
