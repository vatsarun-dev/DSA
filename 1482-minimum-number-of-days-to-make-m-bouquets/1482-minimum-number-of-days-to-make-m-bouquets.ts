function minDays(bloomDay: number[], m: number, k: number): number {
    const n = bloomDay.length;

    // Impossible to make m bouquets
    if (m * k > n) return -1;

    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);

    function canMake(day: number): boolean {
        let flowers = 0;
        let bouquets = 0;

        for (let i = 0; i < n; i++) {
            if (bloomDay[i] <= day) {
                flowers++;

                if (flowers === k) {
                    bouquets++;
                    flowers = 0;

                    if (bouquets >= m) return true;
                }
            } else {
                flowers = 0;
            }
        }

        return false;
    }

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (canMake(mid)) {
            high = mid - 1;   // try fewer days
        } else {
            low = mid + 1;    // need more days
        }
    }

    return low;
}