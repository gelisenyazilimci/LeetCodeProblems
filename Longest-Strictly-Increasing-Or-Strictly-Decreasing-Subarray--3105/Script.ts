// Time Complexity: O(N)
// Space Complexity: O(1)
function longestMonotonicSubarray(nums: number[]): number {
    let ans: number = 1;
    for (let i: number = 1, inc: number = 1, dec: number = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) { inc += 1; dec = 1; } else if (nums[i] < nums[i - 1]) { dec += 1; inc = 1; } else { inc = 1; dec = 1; }
        ans = Math.max(ans, inc, dec);
    }
    return ans;
}