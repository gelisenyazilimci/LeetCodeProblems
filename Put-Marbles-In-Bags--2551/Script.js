/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
let putMarbles = function (weights, k) {
    if (k === 1) return 0;
    let pairSums = [], minScore = 0, maxScore = 0;
    for (let i = 0; i < weights.length - 1; i++) pairSums.push(weights[i] + weights[i + 1]);
    pairSums.sort((a, b) => a - b);
    for (let i = 0; i < k - 1; i++) {
        minScore += pairSums[i]; maxScore += pairSums[weights.length - 2 - i];
    } return maxScore - minScore;
}