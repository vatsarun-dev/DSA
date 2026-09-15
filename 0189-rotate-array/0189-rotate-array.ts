/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(a: number[], k: number): void {
    k = k % a.length;

    function reverse(left: number, right: number) {
        while (left < right) {
            [a[left], a[right]] = [a[right], a[left]];
            left++;
            right--;
        }
    }

    reverse(0, a.length - 1);
    reverse(0, k - 1);
    reverse(k, a.length - 1);
}