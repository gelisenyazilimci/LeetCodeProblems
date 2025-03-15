/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
let minZeroArray = function(nums, queries) {
    const current = new Array(nums.length);
    let left = 0,right = queries.length - 1, i, best = -1, sum = 0;
    for (const num of nums) sum += num;
    if (sum === 0) return 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2), diff = 0;
        current.fill(0);
        for (let j = 0; j <= mid; ++j) {
            current[queries[j][0]] -= queries[j][2];
            current[queries[j][1] + 1] += queries[j][2];
        }
        for (i = 0; i < nums.length; ++i) {
            diff -= current[i];
            if (nums[i] > diff) break;
        }
        if (i === nums.length) {
            best = mid + 1; right = mid - 1;
        } else left = mid + 1;
    }
    return best;
} 