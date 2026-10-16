function singleNumber(nums: number[]): number {
    let result = 0;

    for (let bit = 0; bit < 32; bit++) {
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            if (((nums[i] >> bit) & 1) === 1) {
                count++;
            }
        }

        if (count % 3 !== 0) {
            result |= (1 << bit);
        }
    }

    return result;
}