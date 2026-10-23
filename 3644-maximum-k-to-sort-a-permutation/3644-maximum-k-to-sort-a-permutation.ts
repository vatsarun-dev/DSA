function sortPermutation(nums: number[]): number {
    let k = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            k |= nums[i];
        }
    }

    let result = -1;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            result &= nums[i];
        }
    }

    return result === -1 ? 0 : result;
}