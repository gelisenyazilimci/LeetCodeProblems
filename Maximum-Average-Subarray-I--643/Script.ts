function findMaxAverage(nums: number[], k: number): number {
    let s: number = 0, b: number = 0; // b = big number; s = small number;
    for (let i: number = 0; i < k; i++) s += nums[i]; b = s;
    for (let i: number = k; i < nums.length; i++) { s = s + nums[i] - nums[i - k]; b = Math.max(b, s); }
    return b / k;
};
console.log(findMaxAverage([1,12,-5,-6,50,3], 4));