// Time  Complexity: O(n)
// Space Complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
let pivotArray = function(nums, pivot) {
    let res = [], index=0;
    for(let i=0;i<nums.length;i++) nums[i]  <  pivot ? res[index++]=nums[i] : "";
    for(let i=0;i<nums.length;i++) nums[i] === pivot ? res[index++]=nums[i] : "";
    for(let i=0;i<nums.length;i++) nums[i]  >  pivot ? res[index++]=nums[i] : "";
    return res;
}