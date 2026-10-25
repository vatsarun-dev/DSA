function closedIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    const dfs = (r: number, c: number): void => {
        const stack: [number, number][] = [[r, c]];
        grid[r][c] = 1;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        while (stack.length > 0) {
            const [x, y] = stack.pop()!;

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (
                    nx >= 0 && nx < m &&
                    ny >= 0 && ny < n &&
                    grid[nx][ny] === 0
                ) {
                    grid[nx][ny] = 1;
                    stack.push([nx, ny]);
                }
            }
        }
    };

    // Remove islands connected to the boundary.
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) dfs(i, 0);
        if (grid[i][n - 1] === 0) dfs(i, n - 1);
    }

    for (let j = 0; j < n; j++) {
        if (grid[0][j] === 0) dfs(0, j);
        if (grid[m - 1][j] === 0) dfs(m - 1, j);
    }

    // Count the remaining islands.
    let count = 0;

    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 0) {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
}