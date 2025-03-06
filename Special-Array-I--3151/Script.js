/**
 * @param {number[]} nums
 * @return {boolean}
 */
let isArraySpecial = function(nums) {
    if (nums.length === 1) return true;
    let i = 0;
    if (nums[0] % 2 === 0) i++;
    while (i < nums.length) {
        if (nums[i] % 2 === 0 && nums[i - 1] % 2 === 0) return false;
        if (nums[i] % 2 === 1 && nums[i - 1] % 2 === 1) return false;
        ++i;
    }
    return true;
}