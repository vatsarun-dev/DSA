
function createGrid(m: number, n: number): string[] {
    const grid: string[] = [];

    for (let i = 0; i < m; i++) {
        let row = "";

        for (let j = 0; j < n; j++) {
            row += (i === 0 || j === n - 1) ? "." : "#";
        }

        grid.push(row);
    }

    return grid;
}
