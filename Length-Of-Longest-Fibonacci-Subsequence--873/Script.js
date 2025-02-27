// Time Complexity: O(N^2)
// Space Complexity: O(N^2)

/**
 * @param {number[]} arr
 * @return {number}
 */
let lenLongestFibSubSeq = function(arr) {
    if (arr.length < 3) return 0;

    const indexMap = {};

    for (let i = 0; i < arr.length; i++) indexMap[arr[i]] = i;

    const dp = Array.from({ length: arr.length }, () => new Array(arr.length).fill(2));
    let max = 0;

    for (let j = 1; j < arr.length; j++)
        for (let i = 0; i < j; i++) {
            if (arr[j] - arr[i] < arr[i] && arr[j] - arr[i] in indexMap)
                dp[i][j] = dp[indexMap[arr[j] - arr[i]]][i] + 1;
            max = Math.max(max, dp[i][j]);
        }

    return max >= 3 ? max : 0;
}

console.log(lenLongestFibSubSeq([1,3,7,11,12,14,18]))