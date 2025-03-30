/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
let minOperations = function(grid, x) {
    const flattened = grid.flat(), remainder = flattened[0] % x;
    for (let number of flattened) if (number % x !== remainder) return -1;
    flattened.sort((a, b) => a - b);
    let median = flattened[Math.floor(flattened.length / 2)], operations = 0;
    for (let number of flattened) operations += Math.abs(number - median) / x;
    return operations;
}

