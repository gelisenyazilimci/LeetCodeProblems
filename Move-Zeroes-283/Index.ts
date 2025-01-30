// Time Complexity O(N)
// Space Complexity O(1)

function moveZeroes(nums: number[]): void {
    let zeros: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[zeros], nums[i]] = [nums[i], nums[zeros]];
            zeros += 1;
        }
    }
}
