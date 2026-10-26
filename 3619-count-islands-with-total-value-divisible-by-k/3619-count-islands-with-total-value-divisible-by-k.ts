
function countIslands(grid: number[][], k: number): number {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) continue;

            let sum = 0;
            const stack: [number, number][] = [[i, j]];

            // Mark visited when adding to the stack.
            sum += grid[i][j];
            grid[i][j] = 0;

            while (stack.length > 0) {
                const [x, y] = stack.pop()!;

                for (const [dx, dy] of directions) {
                    const nx = x + dx;
                    const ny = y + dy;

                    if (
                        nx >= 0 &&
                        nx < m &&
                        ny >= 0 &&
                        ny < n &&
                        grid[nx][ny] > 0
                    ) {
                        sum += grid[nx][ny];
                        grid[nx][ny] = 0;
                        stack.push([nx, ny]);
                    }
                }
            }

            if (sum % k === 0) count++;
        }
    }

    return count;
}
