function splitArray(nums: number[], k: number): number {
    let low = Math.max(...nums);
    let high = nums.reduce((sum, num) => sum + num, 0);

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        let subarrays = 1;
        let currentSum = 0;

        for (const num of nums) {
            if (currentSum + num > mid) {
                subarrays++;
                currentSum = num;
            } else {
                currentSum += num;
            }
        }

        if (subarrays <= k) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
}