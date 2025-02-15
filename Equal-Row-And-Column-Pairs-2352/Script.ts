// Time Complexity: O(N)
// Space Complexity: O(N)
function equalPairs(grid: number[][]): number {
    const n: number = grid.length;
    if (n === 0) return 0;

    const result: number[][] = [];
    for (let i: number = 0; i < n; i++) result[i] = new Array(n).fill(0);

    for (let i: number = 0; i < n; i++)
        for (let j: number = 0; j < n; j++)
            result[i][j] = grid[j][i];

    let count: number = 0;

    for (let row: number = 0; row < n; row++)
        for (let col: number = 0; col < n; col++) {
            let same: boolean = true;
            for (let k: number = 0; k < n; k++) if (grid[row][k] !== result[col][k]) {same = false; break;}
            if (same) count++;
        }

    return count;
}

// @ts-ignore
console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));