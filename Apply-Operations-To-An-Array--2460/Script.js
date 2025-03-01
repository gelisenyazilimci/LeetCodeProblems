/**
 * @param {number[]} nums
 * @return {number[]}
 */
let applyOperations = function(nums) {
    const array = []; let counter = 0;
    for (let i = 0; i < nums.length - 1; i++) if (nums[i] === nums[i+1]) { nums[i] *= 2; nums[i+1] = 0; i++; }
    for (let i = 0; i < nums.length; i++) nums[i] === 0 ? counter++ : array.push(nums[i]);
    while (counter) { array.push(0); counter--; }
    return array;
}