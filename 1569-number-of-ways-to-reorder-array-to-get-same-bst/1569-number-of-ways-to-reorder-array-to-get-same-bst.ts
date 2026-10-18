
function numOfWays(nums: number[]): number {
    const MOD = 1000000007n;
    const n = nums.length;

    // Precompute combinations using Pascal's Triangle
    const comb: bigint[][] = Array.from(
        { length: n + 1 },
        () => Array<bigint>(n + 1).fill(0n)
    );

    for (let i = 0; i <= n; i++) {
        comb[i][0] = 1n;
        comb[i][i] = 1n;

        for (let j = 1; j < i; j++) {
            comb[i][j] =
                (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
        }
    }

    function solve(arr: number[]): bigint {
        if (arr.length <= 2) {
            return 1n;
        }

        const root = arr[0];

        const left = arr.slice(1).filter(x => x < root);
        const right = arr.slice(1).filter(x => x > root);

        const leftWays = solve(left);
        const rightWays = solve(right);

        // Interleave left and right subtree elements
        const ways = comb[left.length + right.length][left.length];

        return (
            (((ways * leftWays) % MOD) * rightWays) % MOD
        );
    }

    // Subtract the original ordering
    return Number((solve(nums) - 1n + MOD) % MOD);
}
