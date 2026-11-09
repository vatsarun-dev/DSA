class MyMinHeap<T> {
    private heap: T[] = [];
    constructor(private compare: (a: T, b: T) => number) {}

    push(val: T) {
        this.heap.push(val);
        this.up(this.heap.length - 1);
    }

    pop(): T | undefined {
        if (this.size() === 0) return undefined;
        const top = this.heap[0];
        const bottom = this.heap.pop()!;
        if (this.size() > 0) {
            this.heap[0] = bottom;
            this.down(0);
        }
        return top;
    }

    peek(): T | undefined {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }

    private up(i: number) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.compare(this.heap[i], this.heap[p]) >= 0) break;
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }

    private down(i: number) {
        const len = this.heap.length;
        while ((i << 1) + 1 < len) {
            let left = (i << 1) + 1;
            let right = left + 1;
            let best = left;
            if (right < len && this.compare(this.heap[right], this.heap[left]) < 0) {
                best = right;
            }
            if (this.compare(this.heap[best], this.heap[i]) >= 0) break;
            [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
            i = best;
        }
    }
}

function busiestServers(k: number, arrival: number[], load: number[]): number[] {
    const requestCount = new Array(k).fill(0);
    
    // Using the renamed heap class to avoid LeetCode namespace conflicts
    const busyHeap = new MyMinHeap<[number, number]>((a, b) => a[0] - b[0]);
    const available: number[] = Array.from({ length: k }, (_, i) => i);

    const lowerBound = (arr: number[], target: number): number => {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (arr[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };

    for (let i = 0; i < arrival.length; i++) {
        const curTime = arrival[i];
        
        while (busyHeap.size() > 0 && busyHeap.peek()![0] <= curTime) {
            const [_, serverId] = busyHeap.pop()!;
            const idx = lowerBound(available, serverId);
            available.splice(idx, 0, serverId);
        }

        if (available.length === 0) continue;

        const targetServer = i % k;
        let idx = lowerBound(available, targetServer);

        if (idx === available.length) {
            idx = 0;
        }

        const selectedServer = available[idx];
        
        requestCount[selectedServer]++;
        busyHeap.push([curTime + load[i], selectedServer]);
        available.splice(idx, 1);
    }

    const maxRequests = Math.max(...requestCount);
    const result: number[] = [];
    for (let i = 0; i < k; i++) {
        if (requestCount[i] === maxRequests) {
            result.push(i);
        }
    }

    return result;
}
