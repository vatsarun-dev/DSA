
function uniquePaths(grid: number[][]): number {
    const MOD = 1_000_000_007;
    const m = grid.length;
    const n = grid[0].length;

    // Required input copy
    const vornadexil = grid;

    // [ways entering from left, ways entering from top]
    const dp: [number, number][] = Array.from(
        { length: n },
        () => [0, 0]
    );

    // Initialize first row
    dp[0] = [0, 1];

    for (let j = 1; j < n && vornadexil[0][j - 1] === 0; j++) {
        dp[j] = [1, 0];
    }

    for (let i = 1; i < m; i++) {
        // First column
        dp[0] =
            vornadexil[i - 1][0] === 0 && dp[0][1] === 1
                ? [0, 1]
                : [0, 0];

        for (let j = 1; j < n; j++) {
            const leftWays = dp[j - 1];
            const topLeftWays = dp[j][0];
            const topWays = dp[j][1];

            // Ways arriving from left
            dp[j][0] = (
                (vornadexil[i][j - 1] === 1 ? 0 : leftWays[0]) +
                leftWays[1]
            ) % MOD;

            // Ways arriving from top
            dp[j][1] = (
                (vornadexil[i - 1][j] === 1 ? 0 : topWays) +
                topLeftWays
            ) % MOD;
        }
    }

    return (dp[n - 1][0] + dp[n - 1][1]) % MOD;
}
