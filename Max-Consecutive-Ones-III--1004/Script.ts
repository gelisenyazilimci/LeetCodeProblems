// Time Complexity = O(N)
// Space Complexity = O(1)
function longestOnes(nums: number[], k: number): number {
    let tempK: number = k, maxCount: number = 0;
    for (let r: number = 0, l: number = 0; r < nums.length; r++ ) {
        if (nums[r] === 0) tempK--;
        if (tempK < 0) { tempK += 1 - nums[l]; l++; }
        maxCount = Math.max(maxCount, r - l + 1);
    }
    return maxCount;
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));