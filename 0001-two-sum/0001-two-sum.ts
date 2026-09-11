function twoSum(nums: number[], target: number): number[] {
    const seen: { [key: number]: number } = {};
    let i = 0;

    while (i < nums.length) {
        let currentNum = nums[i];
        let complement = target - currentNum;

        if (complement in seen) {
            return [seen[complement], i];
        }
        seen[currentNum] = i;
        i++;
    }

    return [];
}
