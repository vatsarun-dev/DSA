function singleNonDuplicate(a: number[]): number {
    let i = 0;
    let j = a.length - 1;

    while (i < j) {
        let mid = Math.floor((i + j) / 2);
        if (mid % 2 === 1) {
            mid--;
        }
        if (a[mid] === a[mid + 1]) {
            i = mid + 2;
        } else {
            j = mid;
        }
    }
    return a[i];
}