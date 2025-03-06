/**
 * @param {number} n
 * @return {number}
 */
let coloredCells = function(n) {
    let result = 1; 
    if (n === result) return result;
    while (n > 0) {
        result+= Math.imul(4, (n-1));
        --n;
    }
    return result;
}