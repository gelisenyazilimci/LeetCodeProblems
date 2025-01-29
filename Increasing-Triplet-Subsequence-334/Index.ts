function increasingTriplet(nums: number[]): boolean {

    // ------------------------------------------------------------------------------------------------------ //

    // Time Complexity  =  O(n^2)
    // Space Complexity = O(n)

    // let numLength:number = nums.length;
    // let nums2DArray: number[][] = [];
    // let groupSize: number = 3;
    //
    // for (let i:number = 0; i < numLength - groupSize; i++) nums2DArray.push(nums.slice(i, i + groupSize));
    //
    // for (let i: number = 0; i < numLength - 2; i++) for (let j: number = i + 1; j < numLength - 1; j++)
    //         for (let k: number = j + 1; k < numLength; k++) if (nums[i] < nums[j] && nums[j] < nums[k]) return true;

    // ------------------------------------------------------------------------------------------------------ //

    // Time Complexity  =  O(n)
    // Space Complexity = O(1)

    let first:number = Number.MAX_VALUE, second:number = Number.MAX_VALUE;

    for (let num of nums) if (num <= first) first = num; else if (num <= second) second = num; else return true;

    return false;
}