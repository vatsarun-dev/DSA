
function maxSlidingWindow(nums: number[], k: number): number[] {
    let deque: number[] = [];
    let front = 0;
    let ans: number[] = [];

    for (let i = 0; i < nums.length; i++) {

        // Remove elements outside current window
        while (
            front < deque.length &&
            deque[front] < i - k + 1
        ) {
            front++;
        }

        // Remove smaller elements from back
        while (
            deque.length > front &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }

        // Add current index
        deque.push(i);

        // Add maximum
        if (i >= k - 1) {
            ans.push(nums[deque[front]]);
        }
    }

    return ans;
}