/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let minCapability = function(nums, k) {
    let max = Math.max.apply(Math, nums), min = Math.min.apply(Math, nums);
    while (min < max) {
        let mid = Math.floor((min + max)/2), possibleThefts = 0;
        for (let i = 0; i < nums.length; i++) if (nums[i] <= mid) { possibleThefts++; i++; }
        possibleThefts >= k ?max = mid : min = mid + 1;
    }
    return min;
}