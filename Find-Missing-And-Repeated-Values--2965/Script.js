/**
 * @param {number[][]} grid
 * @return {number[]}
 */
let findMissingAndRepeatedValues = function(grid) {
    let set = new Set(), a = 0, b = 0;
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[i].length; j++)
            set.has(grid[i][j]) ? a = grid[i][j] : set.add(grid[i][j]);

    for (let i = 1; i <= Math.pow(grid.length, 2); i++)
        if (!set.has(i)) {
            b = i;
            break;
        }

    return [a, b];
}

console.log(findMissingAndRepeatedValues([[1,3],[2,2]]))