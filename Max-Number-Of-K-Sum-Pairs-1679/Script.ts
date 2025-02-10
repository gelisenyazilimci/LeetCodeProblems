"use strict"
function maxOperations(nums: number[], k: number): number {
    let x: number = 0;
    nums.sort((a: number, b: number): number  => a - b);
    for (let i: number = 0, j:number = nums.length - 1; i < j;){
        if (nums[i] + nums[j] === k) {
            x++;
            j-=1;
            i++;
        } else if (nums[i] + nums[j] < k) i++; else j--;
    }
    return x;
}

console.log(maxOperations([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4] , 2));