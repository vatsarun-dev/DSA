function longestConsecutive(nums: number[]): number {
    const set: Set<number> = new Set(nums);
    let largest = 0;

    for (const num of set) {
        // Sequence ke starting element ko hi process karo
        if (set.has(num - 1)) continue;

        let current = num;
        let count = 1;

        while (set.has(current + 1)) {
            current++;
            count++;
        }

        largest = Math.max(largest, count);
    }

    return largest;
}