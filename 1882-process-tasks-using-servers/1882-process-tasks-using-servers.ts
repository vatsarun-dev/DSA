class MyMinHeap<T> {
    private heap: T[] = [];

    constructor(private compare: (a: T, b: T) => number) {}

    size(): number {
        return this.heap.length;
    }

    peek(): T {
        return this.heap[0];
    }

    push(value: T): void {
        this.heap.push(value);
        let i = this.heap.length - 1;

        while (i > 0) {
            const p = Math.floor((i - 1) / 2);

            if (this.compare(this.heap[p], this.heap[i]) <= 0) break;

            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    pop(): T {
        const result = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.down(0);
        }

        return result;
    }

    private down(i: number): void {
        const n = this.heap.length;

        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0)
                smallest = left;

            if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0)
                smallest = right;

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }
    }
}

function assignTasks(servers: number[], tasks: number[]): number[] {
    const available = new MyMinHeap<[number, number]>(
        (a, b) => a[0] - b[0] || a[1] - b[1]
    );

    const busy = new MyMinHeap<[number, number, number]>(
        (a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]
    );

    servers.forEach((weight, index) => {
        available.push([weight, index]);
    });

    const result: number[] = [];
    let currentTime = 0;

    for (let i = 0; i < tasks.length; i++) {
        currentTime = Math.max(currentTime, i);

        while (busy.size() > 0 && busy.peek()[0] <= currentTime) {
            const [time, weight, index] = busy.pop();
            available.push([weight, index]);
        }

        if (available.size() === 0) {
            currentTime = busy.peek()[0];

            while (busy.size() > 0 && busy.peek()[0] <= currentTime) {
                const [time, weight, index] = busy.pop();
                available.push([weight, index]);
            }
        }

        const [weight, index] = available.pop();

        result.push(index);

        busy.push([currentTime + tasks[i], weight, index]);
    }

    return result;
}