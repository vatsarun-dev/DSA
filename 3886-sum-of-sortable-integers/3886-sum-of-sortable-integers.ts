function sortableIntegers(nums: number[]): number {
    const n = nums.length;
    let sumOfK = 0;

    // Step 1: Find all divisors of the array length n
    const divisors: number[] = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i * i !== n) {
                divisors.push(n / i);
            }
        }
    }

    // Step 2: Validate each divisor k
    for (const k of divisors) {
        let isValid = true;
        let prevMax = -Infinity;

        for (let start = 0; start < n; start += k) {
            let currentMin = Infinity;
            let currentMax = -Infinity;
            let dropCount = 0;

            // Analyze the current block of size k
            for (let i = 0; i < k; i++) {
                const idx = start + i;
                const val = nums[idx];

                if (val < currentMin) currentMin = val;
                if (val > currentMax) currentMax = val;

                // Check circular descending transition within the block
                const nextIdx = start + ((i + 1) % k);
                if (val > nums[nextIdx]) {
                    dropCount++;
                }
            }

            // Condition 1: A block can be rotated to non-decreasing if it has at most 1 circular drop
            // Condition 2: To maintain global order, max(Block_i) must be <= min(Block_i+1)
            if (dropCount > 1 || prevMax > currentMin) {
                isValid = false;
                break;
            }

            prevMax = currentMax;
        }

        if (isValid) {
            sumOfK += k;
        }
    }

    return sumOfK;
}
