//Time Complexity: O(N)
//Space Complexity: O(1)
function longestSubarray(nums: number[]): number {
    const size: number = nums.length;
    let allOnes: boolean = true;
    // @ts-ignore
    let left = new Array(size).fill(0), right = new Array(size).fill(0);
    let maxLen: number = 0;
    for (let i: number = 0;i < size; i++){ if(nums[i] === 0){allOnes = false; break;} }
    if(allOnes){ return size-1; }
    if(nums[0] === 1 ) left[0]=1;
    for(let i: number = 1; i < size; i++){ if(nums[i] === 1){ left[i] = left[i - 1] + 1; } else { left[i] = 0; } }
    if(nums[size - 1] === 1) right[size - 1] = 1;
    for(let i: number = size - 2;i >= 0; i--){ if(nums[i] === 1){ right[i] = right[i + 1] + 1; } else { right[i] = 0; } }
    for(let i: number = 0; i < size; i++){
        let a: number = (i > 0) ? left[i - 1] : 0;
        let b: number = (i < size - 1) ? right[i + 1] : 0;
        let sum: number = a + b;
        if(sum>maxLen) maxLen=sum;
    }
    return maxLen;
}
