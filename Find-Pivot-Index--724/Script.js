// Time Complexity: O(N)
// Space Complexity: O(1)


/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function(nums) {
    let leftSum = 0, rightSum = nums.reduce((a , b) => a + b);
    for (let i = 0; i < nums.length; ++i){
        rightSum -= nums[i];
        if (rightSum === leftSum) return i;
        leftSum += nums[i];
    }
    return -1;
}