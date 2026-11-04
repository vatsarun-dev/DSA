
class Fenwick {
    n: number;
    tree: Float64Array;

    constructor(n: number) {
        this.n = n;
        this.tree = new Float64Array(n + 1);
    }

    add(index: number, delta: number): void {
        while (index <= this.n) {
            this.tree[index] += delta;
            index += index & -index;
        }
    }

    // Sum of elements from index 1 to index
    query(index: number): number {
        let sum = 0;

        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }

        return sum;
    }

    // Find the index of the kth smallest element
    kth(k: number): number {
        let index = 0;
        let bit = 1;

        while ((bit << 1) <= this.n) {
            bit <<= 1;
        }

        while (bit > 0) {
            const next = index + bit;

            if (next <= this.n && this.tree[next] < k) {
                index = next;
                k -= this.tree[next];
            }

            bit >>= 1;
        }

        return index + 1;
    }
}

function minOperations(
    nums: number[],
    x: number,
    k: number
): number {

    const n = nums.length;

    // Step 1: Coordinate compression
    const values = Array.from(new Set(nums)).sort((a, b) => a - b);

    const rank = new Map<number, number>();

    for (let i = 0; i < values.length; i++) {
        rank.set(values[i], i + 1);
    }

    const m = values.length;

    // Step 2: Two Fenwick Trees
    const countBIT = new Fenwick(m);
    const sumBIT = new Fenwick(m);

    const add = (value: number, delta: number): void => {
        const index = rank.get(value)!;

        countBIT.add(index, delta);
        sumBIT.add(index, value * delta);
    };

    // Step 3: Initialize first window
    let windowSum = 0;

    for (let i = 0; i < x; i++) {
        add(nums[i], 1);
        windowSum += nums[i];
    }

    // Step 4: Calculate cost of every window
    const cost: number[] = [];

    const medianPosition = Math.floor((x + 1) / 2);

    for (let i = 0; i <= n - x; i++) {

        // Find median
        const medianIndex = countBIT.kth(medianPosition);
        const median = values[medianIndex - 1];

        // Left side: values <= median
        const leftCount = countBIT.query(medianIndex);
        const leftSum = sumBIT.query(medianIndex);

        // Right side: values > median
        const rightCount = x - leftCount;
        const rightSum = windowSum - leftSum;

        // Minimum operations for current window
        const operations =
            median * leftCount - leftSum +
            rightSum - median * rightCount;

        cost.push(operations);

        // Slide window
        if (i < n - x) {
            add(nums[i], -1);
            add(nums[i + x], 1);

            windowSum += nums[i + x] - nums[i];
        }
    }

    // Step 5: Dynamic Programming
    const INF = Number.POSITIVE_INFINITY;

    // prev[i] = minimum cost using previous number of windows
    // among the first i elements.
    let prev = new Array(n + 1).fill(0);

    for (let j = 1; j <= k; j++) {

        const curr = new Array(n + 1).fill(INF);

        for (let i = 1; i <= n; i++) {

            // Option 1: Skip current element
            curr[i] = curr[i - 1];

            // Option 2: Select window ending at i - 1
            if (i >= x) {
                const start = i - x;

                curr[i] = Math.min(
                    curr[i],
                    prev[start] + cost[start]
                );
            }
        }

        prev = curr;
    }

    return prev[n];
}
