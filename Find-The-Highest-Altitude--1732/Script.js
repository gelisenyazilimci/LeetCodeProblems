// Time Complexity: O(N)
// Space Complexity: O(N)


/**
 * @param {number[]} gain
 * @return {number}
 */
let largestAltitude = function(gain) {
    const length = gain.length + 1;
    let result = [], max = 0;
    if (length === 0) return 0;
    gain.unshift(0);
    result[0] = gain[0];
    for (let i = 1; i < length; ++i) result[i] = result[i - 1] + gain[i];
    for (let i = 0; i < length; i++) max = Math.max(max, result[i]);
    return max;
}

console.log(largestAltitude([44,32,-9,52,23,-50,50,33,-84,47,-14,84,36,-62,37,81,-36,-85,-39,67,-63,64,-47,95,91,-40,65,67,92,-28,97,100,81]))