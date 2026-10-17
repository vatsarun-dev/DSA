
function minSwaps(nums: number[]): number {
    const n = nums.length;

    function digitSum(num: number): number {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    const arr: [number, number][] = [];

    for (const num of nums) {
        arr.push([digitSum(num), num]);
    }

    // Sort by digit sum, then by number
    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    const targetIndex = new Map<number, number>();

    for (let i = 0; i < n; i++) {
        targetIndex.set(arr[i][1], i);
    }

    const visited: boolean[] = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        const target = targetIndex.get(nums[i])!;

        if (visited[i] || target === i) {
            continue;
        }

        let j = i;
        let cycleSize = 0;

        while (!visited[j]) {
            visited[j] = true;
            j = targetIndex.get(nums[j])!;
            cycleSize++;
        }

        swaps += cycleSize - 1;
    }

    return swaps;
}
